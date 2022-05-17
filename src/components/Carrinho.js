
import React from "react";
import styled from "styled-components";

const DivProdutoCarrinho = styled.div`
background-color: #bbd2ec;
border-radius: 5px;
margin: 15px;
padding: 10px;
color: #7c6ea7;
display: flex;
flex-direction: column;
align-items: center;

span{
    margin: 0 10px;
}
`

const Div = styled.div`
background-color: #3e77b6;
height: 100%;
display: flex;
flex-direction: column;
`

const Button = styled.button`
border: 1px solid #7c6ea7;
background-color: transparent;
border-radius: 5px;
margin: 10px 0;
cursor: pointer;
color: #7c6ea7;

display: flex;
align-items: center;

&:hover{
    border: none;
    background-color: #7c6ea7;
    color: #bbd2ec;
    -webkit-transition: background-color 500ms ease-in-out;
    -ms-transition: background-color 500ms ease-in-out;
    transition: background-color 500ms ease-in-out;
}
`
      
class Carrinho extends React.Component{
    state = {}


    removerDoCarrinho = (produto)=>{
        const carrinhoAuxiliar = this.props.carrinho.filter((prod)=>{
            return prod.id !== produto.id
        })
        this.props.removeCarrinho(carrinhoAuxiliar)
    }

    render(){

        const prod = this.props.carrinho.map((prod)=>{
            return(
                <DivProdutoCarrinho key={prod.id}>
                    <div>
                        prod:{prod.nome}
                    </div>
                    <span>qtd:{prod.qtd} </span>
                    <span> R${prod.preco * prod.qtd}</span>
                    <Button onClick={()=>this.removerDoCarrinho(prod)}> remover produto</Button>
                    </DivProdutoCarrinho>
            );
        });
        return(
            <Div>
            {prod}
            </Div>
        );
        }
}

            

export default Carrinho;