import React from "react";
import styled from 'styled-components'


const Div = styled.div`
display: flex;
width: 670px;
flex-wrap: wrap;
background-color: #3e77b6;


span{
    display: block;
}
@media(max-width: 400px) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
  }
`

const DivProduto = styled.div`
border: 1px solid #7c6ea7;
border-radius: 5px;

width: 200px;
align-items: center;
display:flex;
flex-direction: column;
margin: 10px;
height: 340px;
text-align: center;
background-color: #bbd2ec;


color: #7c6ea7;


box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
/* box-shadow: 0 0 2px 2px rgba(124, 110, 167, 0.2); */

z-index: 1;


img{
    width: 200px;
    height: 250px;
}

@media(max-width: 400px) {
    flex-direction: row;
    width: 90%;
    justify-content: space-around;
  }
`

const Button = styled.button`
border: 1px solid #7c6ea7;
background-color: transparent;
border-radius: 5px;
margin-top: 10px;
cursor: pointer;
color: #7c6ea7;

&:hover{
    border: none;
    background-color: #7c6ea7;
    color: #bbd2ec;
    -webkit-transition: background-color 500ms ease-in-out;
    -ms-transition: background-color 500ms ease-in-out;
    transition: background-color 500ms ease-in-out;
}
`

const DivOrdenacao = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
background-color: #3e77b6;
color: #bbd2ec;

select{
    border: 1px solid black;
    background-color: transparent;
    border-radius: 5px;

}

@media(max-width: 400px) {
     flex-wrap: wrap;
     div,span{
         margin: 5px ;
     }
     
  }
`

const Centralizar = styled.div`
display: flex;
justify-content: center;
background-color: #3e77b6;

`

class Produtos extends React.Component{
    state = {
        ordenacao: 'crescente',
        tipoOrdenacao: 'nome'
    }

    // método que verifica o tipo de ordenação
    ordenacao = (a, b)=> {

        // verificando tipo de ordenação
        switch(this.state.tipoOrdenacao){
           
            // ordenando por preço
            case 'preco':
                let retornoParaCasoPreco = a.preco - b.preco
                this.state.ordenacao==='crescente' || (retornoParaCasoPreco = retornoParaCasoPreco * -1)
                return retornoParaCasoPreco
            
            // por "default" oredena por nome
            default:
                // coloca o nome dos produtos em minúsculo
                const nameA = a.nome.toUpperCase();
                const nameB = b.nome.toUpperCase();
                        
                // retorno atribuido com valor "0" e contunua "0" caso os nomes comparados sejam iguais
                let retorno = 0;
        
                // verifica qual nome vem antes ou depois
                nameA === nameB || nameA > nameB? retorno = 1: retorno = -1
        
                // verifica tipo de ordenação
                this.state.ordenacao==='crescente' || (retorno = retorno * -1)   
                
                return retorno
        }
      }


    // método para add produto no carrinho
    addCarrinho(produto){
        //   verifica se o produto já está no carrinho
        const contagem = this.props.carrinho.filter((produtoCarrinho)=>{
            return produtoCarrinho.id === produto.id
        })

        let carrinhoAuxiliar = []


        // caso o produto já esteja no carrinho, aumenta sua 'qtd'
        if(contagem.length === 1){

            carrinhoAuxiliar = this.props.carrinho.map((produtoCarrinho)=>{
                if(produtoCarrinho.id === produto.id){
                    return {...produtoCarrinho, qtd: contagem[0].qtd + 1}
                }
                return produtoCarrinho})
        }
        // caso não esteja adiciona ao carrinho com 'qtd=1'
        else{
            carrinhoAuxiliar = [...this.props.carrinho, {...produto, qtd: 1}]
        }

        // chama o método da classe App para 'setar' o estado do carrinho no component App
        this.props.addCarrinho(carrinhoAuxiliar)
      }

    //método para "pegar" o evento de quando o usuário mudar o select "ordenação"
    onChangeSelectOrdenacao = (event)=>{
        this.setState({ordenacao: event.target.value})
    }

    // método para "pegar" o evento de quando o usuário mudar o select "ordenar por"
    onChangeSelectTipoOrdenacao = (event)=>{
        this.setState({tipoOrdenacao: event.target.value})
    }


    render(){
        // lista de produtos filtrados ordenados de acordo com a função "this.orgenação"
        const ordenacaoProdutos = this.props.produtosFiltrados.sort(this.ordenacao)
       
        // Mapeamento dos produtos ordenados para exibir na tela 
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
            <DivOrdenacao>
                <span>quantidade de produtos: {this.props.produtosFiltrados.length} </span>
                <div>
                    {/* aqui escolhe tipo de ordenação*/}
                    <label>ordenar por: </label>
                    <select value={this.state.tipoOrdenacao}
                    onChange={this.onChangeSelectTipoOrdenacao}>
                        <option value='nome'>nome</option>
                        <option value='preco'>Preço</option>
                    </select>
                </div>

                <div>
                    {/* aqui escolhe ordem */}
                    <label>ordenação: </label>
                    <select value={this.state.ordenacao}
                    onChange={this.onChangeSelectOrdenacao}>
                        <option value='crescente'>Crescente</option>
                        <option value='decrescente'>Decrescente</option>
                    </select>
                </div>

                {/* teste */}
                {/* {this.props.carrinho.length>0 && `nome: ${this.props.carrinho[0].nome}` }
                {this.props.carrinho.length>0 && `qtd: ${this.props.carrinho[0].qtd}` } */}
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