import React from "react";
import Filtro from "./components/Filtro/Filtro";
import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos/Produtos";

class App extends React.Component {
  state = {
    
    carrinho: [],
    
    produtos: [
    ],
    
    produtosFiltrados: [
      { id: Date.now() + 5, nome: "BuzzLightear", preco: 100, img: 'https://53831.cdn.lojaquevende.com.br/static/53831/sku/brinquedos-ggh39-toy-story-buzz-voo-espacial-1595965150692.jpg' },
      { id: Date.now() + 4, nome: "Nave espacial", preco: 80, img: 'https://photos.enjoei.com.br/miniatura-nave-espacial-foguete-atlantis-nasa-brinquedo-54453071/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy80MTc5Mi8wNTM5ZTBkMzY2ZjhkYWFiZmE3NWI1OTcxYTBhM2Y5My5qcGc' },
      { id: Date.now() + 3, nome: "OVNI", preco: 30, img: 'https://www.dhresource.com/0x0/f2/albu/g8/M00/91/48/rBVaVF18Pm6APiQdAALVO_ymJoE091.jpg' },
      { id: Date.now() + 6, nome: "Rover de exploração", preco: 35, img: 'https://rihappy.vtexassets.com/arquivos/ids/1226207/Rover-Espacial---Fun-Brinquedos--0.jpg?v=637516713964400000' },
      { id: Date.now() + 7, nome: "Foguete espacial", preco: 70, img: 'https://carrefourbr.vtexassets.com/arquivos/ids/5510565/MP27846312_Foguete-Espacial-com-Mini-Figuras---Fun-Brinquedos_2_Zoom.jpg?v=637324190082230000' },
      { id: Date.now() + 8, nome: "Arma espacial", preco: 100, img: 'https://d2r9epyceweg5n.cloudfront.net/stores/903/122/products/dmt6149_a1-7025748d3ff94fd7b216240539483618-1024-1024.jpg' },
      { id: Date.now() + 9, nome: "Lego Star-Wars", preco: 250, img: 'https://drogariamoderna.vteximg.com.br/arquivos/ids/167216-1000-1000/star-wars-veiculo-11396-058784-058784-1.jpg?v=637395787805600000' },]
  };

  /* recebe os produtos filtrados
  e coloca eles no estado de 'produtosFiltrados'
  */
  onChangeFiltro = (produtos) => {
    this.setState({produtosFiltrados: produtos})
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

  render() {
    return (
      <div className="App">
        {/* <Filtro produtos={this.state.produtos} filtro={this.onChangeFiltro}/> */}
        <Produtos produtosFiltrados={this.state.produtosFiltrados} addCarrinho={this.onClickProdutos} carrinho={this.state.carrinho}/>
        {/* <Carrinho carrinho={this.state.carrinho} removeCarrinho={this.oncClickCarrinho}/> */}
      </div>
    );
  }
}

export default App;
