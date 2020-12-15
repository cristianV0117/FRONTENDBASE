import React, { Component } from "react";
import Navegacion from "./publico/Navegacion";
import Rutas from './core/Rutas';
import Footer from './componentes/Footer';
//
import './index.css';

class App extends Component 
{
  render() 
  {
    return (
      <div id="app" >
          <Navegacion />
          <Rutas />
          <Footer />
      </div>
    );
  }
}

export default App;
