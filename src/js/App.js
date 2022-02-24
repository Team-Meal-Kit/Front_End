import Head from "./Head"
import Join from './auth/Join';
import Home from './Home';
import Login from './auth/Login';
import Product from "./Product";
import {Route,Routes} from 'react-router-dom';
import  React from "react";
function App() {
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
  </head>
  return (
    <>
    <div>
      <Head/>
    </div>
    <br/>
    <br/>
     <div>
    </div>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
   
    </>
  );
}

export default App;
