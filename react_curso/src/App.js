import React from 'react';
import './App.css';





const Verde = (props) => <div className="Verde">Verde</div>
const Azul = (props) => <div className="Azul">Azul</div>
var Rojo = (props) => <div className='Rojo'>Rojo</div>
const Amarillo = (props) => <div classnName="Amarillo">Amarillo</div>
const Morado = (props) => <div className="Morado">Morado</div>

/*function Rojo() {
  return <div className="rojo">Rojo</div>;
}*/

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

</div>
);
}


export default App;
