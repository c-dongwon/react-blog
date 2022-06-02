import React, {useCallback} from 'react';
import { LayerForm, LoginBtn, SignUpBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useInput from '../../hook/useInput';
import axios from 'axios';

const Login = ({showLogin, stopPropagation, onClickSignUp, showSignUp}) => {
    const [email, onChangeEmail ,setEmail] = useInput();
    const [password, onChangePassword ,setPassword] = useInput();

    const onSubmitLogin = useCallback((e) => {
        e.preventDefault();
        axios.post("/api/login",{
            email:email,
            password:password
        })
        .then(res => {
            const { accessToken } = res.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        })
        .catch(error => console.log(error))
    },[email, password])
    return (
        <LayerForm className={showLogin ? "active" : ""} onClick={stopPropagation}>
            <form onSubmit={onSubmitLogin}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="ID"
                    className="login-input">
                    <Form.Control type="text" placeholder="name@example.com" value={email} onChange={onChangeEmail}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="login-input">
                    <Form.Control type="password" placeholder="Password"  value={password} onChange={onChangePassword}/>
                </FloatingLabel>
                <LoginBtn type='submit'>Login</LoginBtn>
                <SignUpBtn onClick={onClickSignUp} type="button">{showSignUp ? "Close" : "Sign Up"}</SignUpBtn>
            </form>
        </LayerForm>
    );
};

export default Login;