import React, {useCallback, useEffect, useState} from 'react';
import { LayerForm, LoginBtn, SignUpBtn, UserForm, LogOutBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useInput from '../../hook/useInput';
import axios from 'axios';

const Login = ({cookies, showLogin, stopPropagation, onClickSignUp, showSignUp, onClickUserInfo, showUserInfo, removeCookie, userData,  setUserData}) => {
    const [email, onChangeEmail ,setEmail] = useInput();
    const [password, onChangePassword ,setPassword] = useInput();
    const [loginData, setLoginData] = useState(false);
    const [error, setError] = useState('');

    const onSubmitLogin = useCallback((e) => {
        e.preventDefault();

        let body = {
            email:email,
            password:password
        }

        axios.post("/api/login",body)
        .then(res => {
            const { accessToken } = res.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            withCredentials: true,
            setLoginData(true)
        })
        .catch(error => setError(error.response.data))
    },[email, password])

    const onSubmitLogout = useCallback(() => {
        axios.get("/api/logout")
        .then(res => {
            removeCookie("x_auth")
            setLoginData(false)
        })
    },[]);

   useEffect(() => {
    if(JSON.stringify(cookies) !== "{}" && cookies.x_auth !== "undefined"){
        setLoginData(true)
    }
   },[]);

    return (
        <LayerForm className={showLogin ? "active" : ""} onClick={stopPropagation}> 
            {loginData ? 
            <UserForm>
            <span>반가워요 {userData?.name}님!</span> 
            <LoginBtn onClick={onClickSignUp} type="button">글쓰기</LoginBtn>
            <SignUpBtn onClick={onClickUserInfo} type="button">{showUserInfo ? "회원정보 변경 취소" : "회원정보 변경"}</SignUpBtn>
            <LogOutBtn onClick={onSubmitLogout} type="button">로그아웃</LogOutBtn>
            </UserForm>
            : 
            <form onSubmit={onSubmitLogin}>
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
                    {
                        error ? <span style={{color:"red"}}>{error}</span> : "Login"
                    }
                    
                </LoginBtn>
                <SignUpBtn onClick={onClickSignUp} type="button">{showSignUp ? "Close" : "Sign Up"}</SignUpBtn>
            </form> 
}
        </LayerForm>
    );
};

export default Login;