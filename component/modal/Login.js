import React, {useCallback, useEffect, useState} from 'react';
import { LayerForm, LoginBtn, SignUpBtn, UserForm, LogOutBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useInput from '../../hook/useInput';
import axios from 'axios';

const Login = ({cookies, showLogin, stopPropagation, onClickSignUp, showSignUp, onClickUserInfo, showUserInfo}) => {
    const [email, onChangeEmail ,setEmail] = useInput();
    const [password, onChangePassword ,setPassword] = useInput();
    const [loginData, setLoginData] = useState(false);
    const [userData,  setUserData] = useState('');
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
            setUserData(res.data)
            setLoginData(true)
        })
        .catch(error => setError(error.response.data))
    },[email, password])

   useEffect(() => {
    if(JSON.stringify(cookies) !== "{}" ){
        setLoginData(true)
    }
   },[])

    return (
        <LayerForm className={showLogin ? "active" : ""} onClick={stopPropagation}> 
            {!loginData ? 
            <UserForm>
            <span>반가워요 동원님!</span> 
            <LoginBtn onClick={onClickSignUp} type="button">글쓰기</LoginBtn>
            <SignUpBtn onClick={onClickUserInfo} type="button">{showUserInfo ? "회원정보 변경 취소" : "회원정보 변경"}</SignUpBtn>
            <LogOutBtn onClick={onClickSignUp} type="button">로그아웃</LogOutBtn>
            </UserForm>
            : 
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