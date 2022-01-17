// About.js
import React,{useState} from 'react';
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { FormGroup } from 'react-bootstrap';
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
  

    const validation = () => {
        if(!userId) setUserIdError(true);
        if(!password) setPasswordError(true);
        if(!confirmPassword) setConfirmPasswordError(true);
        if(!userName) setUserNameError(true);
        if(!email) setEmailError(true);

        if(userId && password && confirmPassword && userName && email) return true;
        else return false;
    }

    const onSubmit = (e) => {
        if(validation()) return;
        
        // API Call
        

    }
  return (
    <div>
        <br/>
            <Container className="panel">
                <Form className='pt-5'>
                    <FormGroup className="">
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail" >
                        <Col sm>
                            <Form.Control type="email" placeholder="Email Address"/>
                            <Button variant="secondary" type="submit" >
                                이메일 중복 검사
                            </Button>
                        </Col>
                    </Form.Group>
                    </FormGroup>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">   
                        <Col sm>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formUserName">
                        <Col sm>
                            <Form.Control type="text" placeholder="Username" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formAdress">
                        <Col sm>
                            <Form.Control type="text" placeholder="Address" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPhoneNumber">
                        <Col sm>
                            <Form.Control type="text" placeholder="Phone" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formBierthDay">
                        <Col sm>
                            <Form.Control type="text" placeholder="BierthDay" />
                        </Col>
                    </Form.Group>
                    
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="secondary" type="submit" >
                            Sign Up
                          
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
  );
};

export default Join;