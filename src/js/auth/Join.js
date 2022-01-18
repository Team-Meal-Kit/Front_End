// About.js
import React,{useState} from 'react';
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
function Join(){
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [bierthDay, setBierthDay] = useState("");
    
    const [userEmailError, setUserEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [bierthDayError, setBierthDayError] = useState(false);

    const onChangeUserEmail = (e) => {
        const userEmailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || userEmailRegex.test(e.target.value)) setUserEmailError(false);
        else setUserEmailError(true);
        setUserEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };
    const onChangeUserName = (e) => {
        setUserNameError(false);
        setUserName(e.target.value)
    };

    const onChnageAddress = (e) => {
        setAddressError(false);
        setAddress(e.target.value)    
    };
    const onChangePhone = (e) => {
        const phoneRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
        if(!e.target.value||(phoneRegex.test(e.target.value))) setPhoneError(false);
        else setPhoneError(true);
        setPhone(e.target.value);

    };
    const onChagneBierthDay = (e) => {
        setBierthDayError(false);
        setBierthDay(e.target.value);
    };

    const validation = () => {
        if(!password) setPasswordError(true);
        if(!confirmPassword) setConfirmPasswordError(true);
        if(!userName) setUserNameError(true);
        if(!userEmail) setUserEmailError(true);
        if(!address) setAddressError(true);
        if(!phone) setPhoneError(true);
        if(!bierthDay) setBierthDayError(true);

        if(password && confirmPassword && userName && userEmail && address && phone && bierthDay) return true;
        else return false;
    };

    const onSubmit = (e) => {
        if(validation()) 
        return function(dispatch, getState,{history}) 
        {
        axios.post('/join',
        {
            userEmail: userEmail,
            password: password,
            userName: userName,
            address: address,
            phone: phone,
            bierthDay: bierthDay},
            {
                headers: {
                  "Content-Type": "application/json",
                }
            })
            .then((res)=>{
                window.alert("회원가입에 성공했습니다!")
                history.push('/login');
            })    
            .catch((err)=>window.alert(err))

    };
    };
  return (
    <div>
        <br/>
            <Container className="panel">
                <Form className='pt-5'>
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail" >
                        <Col sm>
                            <Form.Control maxLength={50} type="email" placeholder="Email Address" value={userEmail} onChange={onChangeUserEmail}/>
                            {userEmailError && <div class="invalid-input">Please enter valid email format.</div>}
                            <Button variant="secondary" type="submit" >
                                이메일 중복 검사
                            </Button>
                        </Col>
                    </Form.Group>
            
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control maxLength={20} type="password" placeholder="Password" value={password} onChange={onChangePassword} />
                            {passwordError && <div class="invalid-input">Password must be at least 8 characters and contain at least one letter and one number. </div>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">   
                        <Col sm>
                            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={onChangeConfirmPassword} />
                            {confirmPasswordError && <div class="invalid-input">Those passwords didn't match.</div>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formUserName">
                        <Col sm>
                            <Form.Control min={2} max={20} type="text" placeholder="Username" value={userName} onChange={onChangeUserName} />
                            {userNameError && <div class="invalid-input">Required.</div>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formAdress">
                        <Col sm>
                            <Form.Control max={100} type="text" placeholder="Address" value={address} onChange={onChnageAddress}/>
                            {addressError && <div class="invalid-input">Required.</div>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPhoneNumber">
                        <Col sm>
                            <Form.Control min={10} max={11} type="text" placeholder="Phone" value={phone} onChange={onChangePhone} />
                            {phoneError && <div class="invalid-input">-없이 진행해주세요.</div>}
                        </Col>
                    </Form.Group>
                    {/*생일은 예외처리 다시해야한다*/} 
                    <Form.Group as={Row} className="mb-3" controlId="formBierthDay">
                        <Col sm>
                            <Form.Control type="text" placeholder="BierthDay" value={bierthDay} onChange={onChagneBierthDay}/>
                            {bierthDayError && <div class="invalid-input">예외처리 생성중임미다.</div>}
                        </Col>
                    </Form.Group>
                    
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="secondary" onClick={onSubmit}>
                            Sign Up
                          
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
  );
};

export default Join;