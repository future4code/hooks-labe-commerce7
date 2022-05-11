import React from "react";
import styled from 'styled-components'


const Div = styled.div`
display: flex;
width: 670px;
flex-wrap: wrap;
/* background-color: lightgray; */

span{
    display: block;
}
@media(max-width: 400px) {
    width: 400px;
  }
`

const DivProduto = styled.div`
border: none;
border-radius: 5px;

width: 200px;
align-items: center;
display:flex;
flex-direction: column;
margin: 10px;
height: 340px;

box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
z-index: 1;

@media(max-width: 400px) {
    flex-direction: row;
    width: 90%;
    justify-content: space-around;
  }
`

const Button = styled.button`
border: 1px solid black;
background-color: transparent;
border-radius: 5px;
margin-top: 10px;
cursor: pointer;

&:hover{
    background-color: lightblue;
}
`

const DivOrdenacao = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

const Centralizar = styled.div`
display: flex;
justify-content: center;
`

class Produtos extends React.Component{
    state = {
        ordenacao: 'crescente'
    }

    // método que verifica o tipo de ordenação
    ordenacao = (a, b)=> {
            const nameA = a.nome.toUpperCase();
            const nameB = b.nome.toUpperCase();
                
            // ordenacao crescente
            if(this.state.ordenacao=== 'crescente'){if (nameA < nameB) {
                return -1;
                }
                if (nameA > nameB) {
                return 1;
                }
            
                return 0;}
                
                // ordenacao "decrescete"
                else{
                    if (nameB < nameA) {
                        return -1;
                        }
                        if (nameB > nameA) {
                        return 1;
                        }
                    
                        return 0; 
                }
      }


    // método para add produto no carrinho
    addCarrinho(produto){
        //   verifica se o produto já está no carrinho
        const contagem = this.props.carrinho.filter((produtoCarrinho)=>{
            return produtoCarrinho.id === produto.id
        })

        let carrinho = []

        // caso o produto já esteja no carrinho, aumenta sua qtd
        if(contagem.length === 1){

            carrinho = this.props.carrinho.map((produtoCarrinho)=>{
                if(produtoCarrinho.id === produto.id){
                    return {...produtoCarrinho, qtd: contagem[0].qtd + 1}
                }
                return produtoCarrinho})
        }
        // caso não esteja adiciona ao carrinho com 'qtd=1'
        else{
            carrinho = [...this.props.carrinho, {...produto, qtd: 1}]
        }

        // chama o método da classe App para 'setar' o estado do carrinho no component App
        this.props.addCarrinho(carrinho)
      }

    //método para "pegar" o evento de quando o usuário mudar o select "ordenação"
    onChangeSelect = (event)=>{
        this.setState({ordenacao: event.target.value})
    }


    render(){
        const ordenacaoProdutos = this.props.produtosFiltrados.sort(this.ordenacao)
        const produtosNaTela = ordenacaoProdutos.map((produto)=>{
            return <DivProduto key={produto.id}>
                <div><img src={produto.img} alt='imagem teste' /></div> 
                <div>
                    <div>
                        <span>{produto.nome} </span>
                        <span> R${produto.preco}</span>
                    </div>
                    <Button onClick={() => this.addCarrinho(produto)}>Add ao carrinho</Button>
                </div>
                </DivProduto>
        })
        return <Centralizar>
        <div>
            <DivOrdenacao><span>quantidade de produtos: {this.props.produtosFiltrados.length} </span>
                <div>
                <label>ordenação: </label>
                <select value={this.state.ordenacao}
                onChange={this.onChangeSelect}>
                    <option value='crescente'>Crescente</option>
                    <option value='decrescente'>Decrescente</option>
                </select>
                    </div>
                </DivOrdenacao>
            <Div>   
                {produtosNaTela}
            </Div>
            <div>
                {this.props.carrinho.length > 0 && this.props.carrinho[0].nome}
                {this.props.carrinho.length > 0 &&  `qtd: ${this.props.carrinho[0].qtd}`}
            </div>
        </div>
        </Centralizar>
    }
}

export default Produtos