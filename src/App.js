import React from "react";
import Filtro from "./components/Filtro/Filtro";
import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos/Produtos";

class App extends React.Component {
  state = {
    
    carrinho: [{ id: Date.now() + 3, nome: "produto 4", preco: 400, img: "", qtd: "" }],
    
    produtos: [
      { id: Date.now(), nome: "produto 1", preco: 400, img: "" },
      { id: Date.now() + 1, nome: "produto 2", preco: 400, img: "" },
      { id: Date.now() + 2, nome: "produto 3", preco: 400, img: "" },
      { id: Date.now() + 3, nome: "produto 4", preco: 400, img: "" }
    ],
    
    produtosFiltrados: [
      { id: Date.now() + 3, nome: "produto 4", preco: 400, img: "" }
    ]
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
        <Filtro produtos={this.state.produtos} filtro={this.onChangeFiltro}/>
        <Produtos produtosFiltrados={this.state.produtosFiltrados} addCarrinho={this.onClickProdutos}/>
        <Carrinho carrinho={this.state.carrinho} removeCarrinho={this.oncClickCarrinho}/>
      </div>
    );
  }
}

export default App;
