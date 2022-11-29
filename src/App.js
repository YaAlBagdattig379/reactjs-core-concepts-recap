import logo from './logo.svg';
import './App.css';

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
function District(props){ // props dia data send kora hoache
  return (
    <div style={backgroundStyle}>
      <h1>Name :{props.name} </h1>
      <p>spaciallity : {props.spacial}</p>
    </div>
  )
}

export default App;
