import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>{/**posts data */}
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
function LoadPosts(){ //  load posts
  const [posts,setPosts] = useState([])//default value'[]' karon data gulo 'array of oject'
  // console.log(posts)
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h1><small> total posts :{posts.length} </small></h1>
      {
       posts.map(post => <Posts id={post.id}  title={post.title} body={post.body}></Posts> )//(post))
      }
    </div>
  )
}
function Posts(props){ // show posts data
  return (
    <div  style={{backgroundColor:'lightSalmon',color:'green',margin:'4px',padding:'5px',border:'2px solid green',borderRadius:'5px'}}>
      <h2><small> title</small> : {props.title } </h2>
      <p>id num : <b> {props.id}</b></p>
      <p>body : {props.body}</p>
    </div>
  )
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
