
import React from 'react';
import Button from "react-bootstrap/Button";
import Join from './auth/Join';
import axios from 'axios';
import { useCallback } from 'react';
import {Route} from 'react-router-dom';
import Review from './Review';

/**
 * 함수형 컴포넌트 스니펫입니다.
 */
const Product = () => {
  const onLogin = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        await axios
         .post("", {
            email: this.userEmail,
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
    [this.userEmail] //token추가해야함
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

export default Product;
