import React, {useCallback, useEffect, useState} from 'react';
import { LayerForm, LoginBtn, SignUpBtn, UserForm, LogOutBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useInput from '../../hook/useInput';
import axios from 'axios';

const Login = ({removeCookie, setUserData, loginData, setLoginData, stopPropagation}) => {
    const [email, onChangeEmail ,setEmail] = useInput();
    const [password, onChangePassword ,setPassword] = useInput();
    const [error, setError] = useState('');

    const onSubmitLogin = useCallback((e) => {
        e.preventDefault();

        axios.post("/api/login",{
            email:email,
            password:password
        })
        .then(res => {
            const { accessToken } = res.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            withCredentials: true,
            setLoginData(true)
        })
    },[email, password])

    const onSubmitLogout = useCallback(() => {
        axios.get("/api/logout")
        .then(res => {
            removeCookie("x_auth")
            setLoginData(false)
        })
    },[]);

   
   useEffect(() => {
    axios.get("/api/user/auth")
    .then(res => {setUserData(res.data)})
    },[loginData])

    return (
        <LayerForm onClick={stopPropagation}> 
            <form onSubmit={onSubmitLogin}>
                <h2>로그인</h2>
                <button type='button' className='signUpBtn'>신규 사용자이신가요? <span>계정만들기</span></button>
                <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" placeholder="name@example.com" id="id" value={email} onChange={onChangeEmail}/>
                    <label htmlFor="id">ID</label>
                </FloatingLabel>
                <FloatingLabel className="login-input">
                    <Form.Control type="password" placeholder="Password" id="password"  value={password} onChange={onChangePassword}/>
                    <label htmlFor="password">Password</label>
                </FloatingLabel>
                <LoginBtn type='submit'>
                    로그인
                </LoginBtn>
            </form> 
        </LayerForm>
    );
};

export default Login;