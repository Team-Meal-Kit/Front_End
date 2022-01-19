import Button from "./Button";
import Head from "./Head"
import Head2 from "./Head2"
import styles from "../css/App.module.css";
import Join from './auth/Join';
import Home from './Home';
import Login from './auth/Login';
import customAxios from './CustomAxios';

import {Link, Route, Switch,Routes} from 'react-router-dom';
import  React,{useState,useEffect } from "react";
function App() {
  const [ip, setIp] = useState('');
  function callback(data) {
    setIp(data);
  }
  useEffect(
    () => {
      // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
      customAxios('/ip', callback);
    }, []
  );
  return (
    <div>
      <Head/>
      <Head2/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/join" element={<Join/>}/>
      <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
