// About.js
import React,{useState,useCallback} from 'react';
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Home from '../Home';
import { Route,Router, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';


const Join = () => {
    //이름, 이메일, 비밀번호, 비밀번호 확인
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [bierthDay, setBierthDay] = useState("");
  
    //오류메시지 상태저장
    const [userNameMessage, setUserNameMessage] = useState('')
    const [userEmailMessage, setUserEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
    const [addressMessage, setAddressMessage] = useState(false);
    const [phoneMessage, setPhoneMessage] = useState(false);
    const [bierthDayMessage, setBierthDayMessage] = useState(false);
    
    // 유효성 검사
    const [isUserName, setIsUserName] = useState(false)
    const [isUserEmail, setIsUserEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
    const [isAddress, setIsAddress] = useState(false);
    const [isPhone, setIsPhone] = useState(false);
    const [isBierthDay, setIsBierthDay] = useState(false);
    
    const onEmailCheck = useCallback(
        async(e) =>{
            e.preventDefault()
            try{
                await axios
                .get("https://5d2e86fa-7992-4716-992a-7f1300e8c748.mock.pstmn.io/",{
                // .get("http://58.124.240.242:9876/client",{
                email: userEmail,
            })
            .then((res)=>{
                console.log('response:',res)
                if(res.status===200){
                    if(res.data.status===200)
                    {
                        console.log("test")
                    }
                }
            })
        } catch(err)
        {
            console.error(err)
        }
    },[userEmail]
    )
    const onSubmit = useCallback(
      async (e) => {
        e.preventDefault()
        try {
          await axios
           .post("https://5d2e86fa-7992-4716-992a-7f1300e8c748.mock.pstmn.io/client", {
            // .post("http://58.124.240.242:9876/client",{
              userName: userName,
              password: password,
              email: userEmail,
              address: address,
              phone: phone,
              birthDay: bierthDay,
            })
            .then((res) => {
                console.log('response:', res)
                if (res.status === 200) {
                    if(res.data.status===200)
                    {
                        alert('정상적으로 회원가입을 요청하였습니다.\r이메일을 확인해 주세요.')
                    }
                    else
                    {
                        alert('회원가입중 문제가 발생하였습니다.')
                    }

              }
            })
        } catch (err) {
          console.error(err)
        }
      },
      [userEmail, userName, password,address,phone,bierthDay]
    )
  
    // 이름
    const onChangeUserName = useCallback((e)=> {
      setUserName(e.target.value)
      if (e.target.value.length < 2 || e.target.value.length > 5) {
        setUserNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
        setIsUserName(false)
      } else {
        setUserNameMessage('올바른 이름 형식입니다 :)')
        setIsUserName(true)
      }
    }, [])

    const onChangeUserEmail = useCallback((e) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      const emailCurrent = e.target.value
      setUserEmail(emailCurrent)
  
      if (!emailRegex.test(emailCurrent)) {
        setUserEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ')
        setIsUserEmail(false)
      } else {
        setUserEmailMessage('올바른 이메일 형식이에요 : )')
        // if()
        setIsUserEmail(true)
      }
    }, [])
  
    // 비밀번호
    const onChangePassword = useCallback((e) => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
      const passwordCurrent = e.target.value
      setPassword(passwordCurrent)
  
      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
        setIsPassword(false)
      } else {
        setPasswordMessage('안전한 비밀번호에요 : )')
        setIsPassword(true)
      }
    }, [])
  
    // 비밀번호 확인
    const onChangePasswordConfirm = useCallback(
      (e) => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)
  
        if (password === passwordConfirmCurrent) {
          setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )')
          setIsPasswordConfirm(true)
        } else {
          setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
          setIsPasswordConfirm(false)
        }
      },
      [password]
    ) 
    const onChnageAddress = useCallback((e) => {
        setIsAddress(true);
        setAddressMessage('설정중 입니다.')
        setAddress(e.target.value)    
    },
    []
    )
    const onChangePhone = useCallback((e) => {
        const phoneRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
        const phoneCurrent = e.target.value
        setPhone(phoneCurrent)
       if(!phoneRegex.test(phoneCurrent)){
           setPhoneMessage("-는 제거하거 넣어주세요!")
           setIsPhone(false)
       }else{
            setPhoneMessage("입력완료")
            setIsPhone(true)
       }
    },
       []
    )
    const onChagneBierthDay = useCallback((e) => {
        setIsBierthDay(true);
        setBierthDayMessage('설정중 입니다.')
        setBierthDay(e.target.value)    
    },
    []
    )
    return (
        <div>
        <br/>
            <Container className="panel">
                <Form className='pt-5'>
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail" >
                        <Row>
                        <Col xs={1}>
                        <Form.Label>Email</Form.Label>
                        </Col>
                        <Col xs={5}>
                            <Form.Control maxLength={30} type="email" placeholder="Email Address" value={userEmail} onChange={onChangeUserEmail}/>
                        </Col>
                        <Col>
                            <Button variant="outline-danger" type="submit" >
                                이메일 중복 검사
                            </Button>
                        </Col>
                            {userEmail.length > 0 && <span className={`message ${isUserEmail ? 'success' : 'error'}`}>{userEmailMessage}</span>}
                        </Row>
                    </Form.Group>
            
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Row>
                        <Col xs={1}>
                            <Form.Label>비밀번호</Form.Label>
                        </Col>
                        <Col sm>
                            <Form.Control maxLength={20} type="password" placeholder="Password" value={password} onChange={onChangePassword} />
                            {password.length > 0 && <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>}
                        </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword2">
                    <Row>
                        <Col xs={1}>
                            <Form.Label>비밀번호확인</Form.Label>
                        </Col>   
                        <Col sm>
                            <Form.Control maxLength={20} type="password" placeholder="Confirm Password" value={passwordConfirm} onChange={onChangePasswordConfirm} />
                            {passwordConfirm.length > 0 && (<span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>)}
                        </Col>
                    </Row>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formUserName">
                    <Row>
                        <Col xs={1}>
                            <Form.Label>이름</Form.Label>
                        </Col>
                        <Col sm>
                            <Form.Control min={2} max={20} type="text" placeholder="User Name" value={userName} onChange={onChangeUserName} />
                            {userName.length > 0 && <span className={`message ${isUserName ? 'success' : 'error'}`}>{userNameMessage}</span>}
                        </Col>
                    </Row>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formAdress">
                    <Row>
                        <Col xs={1}>
                            <Form.Label>주소</Form.Label>
                        </Col>
                        <Col sm>
                            <Form.Control max={100} type="text" placeholder="Address" value={address} onChange={onChnageAddress}/>
                            {address.length > 0 && <span className={`message ${isAddress ? 'success' : 'error'}`}>{addressMessage}</span>}
                        </Col>
                    </Row>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPhoneNumber">
                    <Row>
                        <Col xs={1}>
                            <Form.Label>휴대폰 번호</Form.Label>
                        </Col>
                        <Col sm>
                            <Form.Control min={10} max={11} type="text" placeholder="Phone" value={phone} onChange={onChangePhone} />
                            {phone.length > 0 && <span className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMessage}</span>}
                        </Col>
                    </Row>
                    </Form.Group>
                    {/*생일은 예외처리 다시해야한다*/} 
                    <Form.Group as={Row} className="mb-3" controlId="formBierthDay">
                    <Row>
                        <Col xs={1}>
                            <Form.Label>생일</Form.Label>
                        </Col>
                        <Col sm>
                            <Form.Control type="text" placeholder="BierthDay" value={bierthDay} onChange={onChagneBierthDay}/>
                            {bierthDay.length > 0 && <span className={`message ${isBierthDay ? 'success' : 'error'}`}>{bierthDayMessage}</span>}
                        </Col>
                    </Row>
                    </Form.Group>
                    
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="secondary" onClick={onSubmit} disabled={!(isUserName&&isUserEmail&&isPassword&&isPasswordConfirm&&isAddress&&isBierthDay&&isPhone)}>
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
      )
    }
    export default Join;
