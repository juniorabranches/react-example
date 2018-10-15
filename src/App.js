import React, { Component } from 'react';
import './App.css';
import Contador from './componentes/Contador'
import Placar from './componentes/Placar'

const dados = {
  partida:{
    estadio: "Maracanã/RJ",
    data: "12/10/2018",
    horario: "21:00"
  },
  casa: {
    nome: "Flamengo"
  }, 
  visitante: {
    nome: "Vasco"
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Placar {...dados} />
      </div>
    );
  }
}

export default App;
