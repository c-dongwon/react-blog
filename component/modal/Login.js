import React, {useCallback, useEffect, useRef, useState} from 'react';
import { LayerForm, LoginBtn, SignUpBtn, UserForm, LogOutBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useInput from '../../hook/useInput';
import axios from 'axios';

const Login = ({setLoginData, stopPropagation, setShowLogin, onClickSignUp}) => {
    const [email, onChangeEmail ,setEmail] = useInput();
    const [password, onChangePassword ,setPassword] = useInput();
    const [error, setError] = useState('');
    const emailRef = useRef();
    const pwRef = useRef();

    const onSubmitLogin = useCallback((e) => {
        e.preventDefault();
        if (!email || !email.trim()) {
            setError("ID 를 입력해주세요.")
            emailRef.current.focus();
            return;
          }
        if (!password || !password.trim()) {
            setError("비밀번호 를 입력해주세요.")
            pwRef.current.focus();
            return;
        }
        axios.post("/api/login",{
            email:email,
            password:password
        })
        .then(res => {
            const { accessToken } = res.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            withCredentials: true,
            setLoginData(true);
            setError('');
            setEmail('');
            setPassword('');
            setShowLogin(false);
        })
        .catch(err => setError(err.response.data.message))
    },[email, password])

    return (
        <LayerForm onClick={stopPropagation}> 
            <form onSubmit={onSubmitLogin}>
                <h2>로그인</h2>
                <button type='button' className='signUpBtn' onClick={onClickSignUp}>신규 사용자이신가요? <span>계정만들기</span></button>
                <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" placeholder="name@example.com" id="id" value={email || ""} onChange={onChangeEmail} ref={emailRef}/>
                    <label htmlFor="id">ID</label>
                </FloatingLabel>
                <FloatingLabel className="login-input">
                    <Form.Control type="password" placeholder="Password" id="password"  value={password || ""} onChange={onChangePassword} ref={pwRef}/>
                    <label htmlFor="password">Password</label>
                </FloatingLabel>
                {
                    error && <p className='errorTxt'>{error}</p>
                }
                <LoginBtn type='submit'>
                    로그인
                </LoginBtn>
            </form> 
        </LayerForm>
    );
};

export default Login;