import React from 'react';
import './App.css';
import Blue from "./Components/Blue";
import Green from "./Components/Green";
import Red from "./Components/Red";
import Violet from "./Components/Violet";
import Yellow from "./Components/Yellow";



const Verde = (props) => <div className="Verde">Verde</div>
const Azul = (props) => <div className="Azul">Azul</div>
const Rojo = (props) => <div className='Rojo'>Rojo</div>
const Amarillo = (props) => <div className="Amarillo">Amarillo</div>
const Morado = (props) => <div className="Morado">Morado</div>

/*function Prueba() {
  return <div className="prueba">Prueba</div>;
}


/* class Hello extends Component {
render () {
return <h2>{this.props.tittle}</h2>

}

} */



function App(){
return (    
<div classname='App'>
   
<Verde/>
<Azul/>
<Rojo/>
<Amarillo/>
<Morado/>

<Blue/>
<Green/>
<Red/>
<Violet/>
<Yellow/>
</div>
)
}


export default App;
