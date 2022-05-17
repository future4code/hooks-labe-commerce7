import React from "react";
// import Filtro from "./components/Filtro/Filtro";
import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos/Produtos";
import styled from "styled-components";

const MainDiv =  styled.div`
display: flex;
flex-direction: column;
padding: 20px;
`
const DivComponents =  styled.div`
display: flex;
margin-top: 10px;
`

const Div = styled.div`
background-color: #3e77b6;
color: #bbd2ec;
display: flex;
justify-content: center;
padding: 10px;
font-size: 2.5em;
border-radius: 5px;
`

const Label = styled.div`
margin: 10px 10px 10px 10px ;
color: #bbd2ec;
`

const Input = styled.input`
border: 1px solid #bbd2ec;
background-color: transparent;
border-radius: 5px;
margin: 0 10px ;
color: #bbd2ec;
`
const DivFiltro = styled.div`
border-radius: 5px;
display: flex;
flex-direction: column;
background-color: #3e77b6;
`

const DivCarrinho = styled.div`
margin-left: 10px;
border-radius: 5px;

`

const DivProdutos = styled.div`
flex-grow: 1;
margin-left: 10px;
border-radius: 5px;
`

class App extends React.Component {
  state = {
    
    carrinho: [],
    
    produtos: [
      { id: Date.now() + 5, nome: "BuzzLightear", preco: 100, img: 'https://53831.cdn.lojaquevende.com.br/static/53831/sku/brinquedos-ggh39-toy-story-buzz-voo-espacial-1595965150692.jpg' },
      { id: Date.now() + 4, nome: "Nave espacial", preco: 80, img: 'https://photos.enjoei.com.br/miniatura-nave-espacial-foguete-atlantis-nasa-brinquedo-54453071/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy80MTc5Mi8wNTM5ZTBkMzY2ZjhkYWFiZmE3NWI1OTcxYTBhM2Y5My5qcGc' },
      { id: Date.now() + 3, nome: "OVNI", preco: 30, img: 'https://www.dhresource.com/0x0/f2/albu/g8/M00/91/48/rBVaVF18Pm6APiQdAALVO_ymJoE091.jpg' },
      { id: Date.now() + 6, nome: "Rover de exploração", preco: 35, img: 'https://rihappy.vtexassets.com/arquivos/ids/1226207/Rover-Espacial---Fun-Brinquedos--0.jpg?v=637516713964400000' },
      { id: Date.now() + 7, nome: "Foguete espacial", preco: 70, img: 'https://carrefourbr.vtexassets.com/arquivos/ids/5510565/MP27846312_Foguete-Espacial-com-Mini-Figuras---Fun-Brinquedos_2_Zoom.jpg?v=637324190082230000' },
      { id: Date.now() + 8, nome: "Arma espacial", preco: 100, img: 'https://d2r9epyceweg5n.cloudfront.net/stores/903/122/products/dmt6149_a1-7025748d3ff94fd7b216240539483618-1024-1024.jpg' },
      { id: Date.now() + 9, nome: "Lego Star-Wars", preco: 250, img: 'https://drogariamoderna.vteximg.com.br/arquivos/ids/167216-1000-1000/star-wars-veiculo-11396-058784-058784-1.jpg?v=637395787805600000' },],
    
    // produtosFiltrados: ,

      
    inputValue: '',
    
    inputValueMin: '',

    inputValueMax: '',
  };

  /* recebe o produto para 
  adicionar no carrinho
  */
  onClickProdutos = (produtos) => {
    this.setState({carrinho: produtos})
  };

  /* recebe o produto para 
  remover do carrinho
  */
  oncClickCarrinho = (produtos) => {
    this.setState({carrinho: produtos})
  };

  onChangeValue = (event) => {
    this.setState({inputValue: event.target.value})
  }

  onChangeValueMin = (event) => {
    this.setState({inputValueMin: event.target.value})
  }

  onChangeValueMax = (event) => {
    this.setState({inputValueMax: event.target.value})
  }

  render() {

    const produtosFiltrados = this.state.produtos.filter((produto)=>{
      
      const teste = !(produto.preco < Number(this.state.inputValueMin) || this.state.inputValueMax? 
      produto.preco > Number(this.state.inputValueMax): false);

      return produto.nome.toUpperCase().includes(this.state.inputValue.toUpperCase()) && teste
    
    })
    return (
      <MainDiv className="App">
        <Div>LabeToys</Div>
        <DivComponents>
        <DivFiltro>
          <Label for="pesquisa" >pesquisa por nome:</Label>
          <Input name="pesquisa" value={this.state.inputValue} onChange={this.onChangeValue}/>
          <Label for="valor-min" >Valor min:</Label>
          <Input name="valor-min" value={this.state.inputValueMin} type="number" onChange={this.onChangeValueMin}/>
          <Label for="valor-max">Valor max:</Label>
          <Input name="valor-max" value={this.state.inputValueMax} type="number" onChange={this.onChangeValueMax}/>
        </DivFiltro>
        <DivProdutos>
        <Produtos produtosFiltrados={produtosFiltrados} addCarrinho={this.onClickProdutos} carrinho={this.state.carrinho}/>
        </DivProdutos>
        <DivCarrinho>
        <Carrinho carrinho={this.state.carrinho} removeCarrinho={this.oncClickCarrinho}/>
        </DivCarrinho>
        </DivComponents>
      </MainDiv>
    );
  }
}

export default App;
