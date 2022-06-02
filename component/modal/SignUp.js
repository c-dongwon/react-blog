import React, {useCallback} from 'react';
import { SignUpForm, LoginBtn, SignUpBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import useInput from '../../hook/useInput';

const SignUp = ({showSignUp, stopPropagation}) => {
    const [name, onChangeName, setName] = useInput();
    const [email, onChangeEmail, setEmail] = useInput();
    const [password, onChangePassword, setPassword] = useInput();

    const onSubmitSignUp = useCallback((e) => {
        e.preventDefault();
        axios.post("/api/signup",{
            name:name,
            email:email,
            password:password
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },[name, email, password])

    return (
        <SignUpForm className={showSignUp ? "active" : ""} onClick={stopPropagation}>
            <form onSubmit={onSubmitSignUp}>
            <FloatingLabel
                    label="Name"
                    className="login-input">
                    <Form.Control type="text" value={name} onChange={onChangeName}/>
                </FloatingLabel>
                <FloatingLabel
                    label="ID"
                    className="login-input">
                    <Form.Control type="text" value={email} onChange={onChangeEmail}/>
                </FloatingLabel>
                <FloatingLabel label="Password" className="login-input">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
                </FloatingLabel>
                <SignUpBtn type='submit'>Sign Up</SignUpBtn>
            </form>
        </SignUpForm>
    );
};

export default SignUp;