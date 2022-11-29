import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name='Hero Alam' spacial='spaciallity in dialouges'></District>
      <District  name='badal' spacial='fakibaj'></District>
      <District  name='Ghandiji' spacial='National Hero'></District>
      <District  name='Netaji Subas' spacial='Azad Hind Fouse'></District>
    </div>
  );
}
const backgroundStyle = {
  color : "black",
  margin : "20px",
  backgroundColor : "skyBlue",
}
const buttonStyle = {
  color : 'white',
  backgroundColor : 'green',
  borderStyle : 'none',
  borderRadius : '7px',
  margin : ' 10px',
  padding : ' 5px',
  // paddingBottom : ' 5px',
  cursor : 'pointer'
}
function District(props){ // props dia data send kora hoache
  const [power,setPower] = useState(1)// we are to use '1' becouse tasks will be around multip
  const boostPower = () =>{
    const newPower = power * 2;
    setPower(newPower);
  }                                          //arrow function for  multiply
  return (
    <div style={backgroundStyle}>
      <h1>Name :{props.name} </h1>
      <p>spaciallity : {props.spacial}</p>
      <h2>power : {power}</h2>
      <button onClick={boostPower} style={buttonStyle} >boost the power</button>
    </div>
  )
}

export default App;
