import { render } from "@testing-library/react";
import React from "react";

class MeuCarrinho extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            qtd: 0
        };
        
    this.carrinho = this.carrinho.bind(this);
    this.removeCarrinho = this.removeCarrinho.bind(this);
    }
   
    removeQtd(){
            this.setState({
                qtd: this.state.qtd -1
            });
    }

    removeProduto(){
        this.setState({
            qtd: this.state.qtd 
        });
}
    
    render(){
        return(
            <div>
                <div className= "row form-group">
                    <div className= "col-sm-10">
                       <h4>{this.props.nome} : R$ {this.props.preco}</h4> 
                    </div>
                    <div className= "col-sm-2 text-right">
                        Quantidade: {this.props.qtd}
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-outline-primary" onClick="{this.removeQtd}">-1</button>
                        <button className="btn btn-outline-primary" onClick="{this.removeProduto}">Remover</button>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}
      
class ListaDeProdutos extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        produtos: ""
    };
}
componentDidMount(){
    setTimeout(()=> {
        this.setState({produtos: produtos})
     }, 1000);
    }

    render(){
        if(!this.state.produtos)
        return <p>Carregando...</p>;

        const component = this;
        const prod = this.state.produtos.map(function(prod){
            return(
                <produto nome={prod.nome}
                preco={prod.preco}/>
            );
        });
        return(
            <div>
            {prod}
            </div>
        );
        }
}

            

export default MeuCarrinho;