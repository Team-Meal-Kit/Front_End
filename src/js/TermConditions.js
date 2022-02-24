
import React from 'react';
import Button from "react-bootstrap/Button";
import Join from './auth/Join';
import axios from 'axios';
import { useCallback } from 'react';
import {Route} from 'react-router-dom';


const TermConditions = () => {
  const onLogin = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        await axios
         .post("https://5d2e86fa-7992-4716-992a-7f1300e8c748.mock.pstmn.io/review", {
          // .post("http://58.124.240.242:9876/client",{
            email: Join.userEmail,
            //token: token,
          })
          .then((res) => {
              console.log('response:', res)
              if (res.status === 200) {
                 
                <Route path="/review" element={<Review/>}/>
                   
                }
              else{

              }
              
          })
      } catch (err) {
        console.error(err)
      }
    },
    [Join.userEmail] //token추가해야함
  )
  return (
    
    <div>
       <div className="row">
          <div className="col-md-4">
            <img src="" width="100%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="" width="100%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
          <Button variant="outline-success" onClick={onLogin}>
                            리뷰작성하기
          </Button>
          </div>
        </div>
    </div>
  );
};

export default TermConditions;
