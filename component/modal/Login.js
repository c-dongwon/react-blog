import React, {useCallback, useState} from 'react';
import { LayerForm, LoginBtn, SignUpBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useInput from '../../hook/useInput';
import axios from 'axios';

const Login = ({showLogin, stopPropagation, onClickSignUp, showSignUp}) => {
    const [email, onChangeEmail ,setEmail] = useInput();
    const [password, onChangePassword ,setPassword] = useInput();
    const [loginData, setLoginData] = useState(false);
    const [userData,  setUserData] = useState('');
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
            setUserData(res.data)
            setLoginData(true)
            console.log(res)
        })
        .catch(error => setError(error.response.data))
    },[email, password])

    return (
        <LayerForm className={showLogin ? "active" : ""} onClick={stopPropagation}> 
            {loginData ? <span>반갑습니다! {userData.name} 님</span> : 
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