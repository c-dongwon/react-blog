import React, {useCallback, useState, useEffect} from 'react';
import { SignUpForm, LoginBtn, SignUpBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import useInput from '../../hook/useInput';

const UserInfo = ({showUserInfo, stopPropagation, userData, setUserData}) => {
    const [name, onChangeName, setName] = useInput();
    const [email, onChangeEmail, setEmail] = useInput();
    const [password, onChangePassword, setPassword] = useInput();
    const [mod, setMod] = useState(false);

    const onSubmitSignUp = useCallback((e) => {
        e.preventDefault();
       axios.post("/api/modfiy",{
        name:name,
        email:userData.email
    })
       .then(res => setMod(prev => !prev))
    },[name, email, password])

    useEffect(() => {
        axios.get("/api/user/auth")
        .then(res => {setUserData(res.data)})
    },[mod])
    
    return (
        <SignUpForm className={showUserInfo ? "active" : ""} onClick={stopPropagation}>
            <form onSubmit={onSubmitSignUp}>
            <FloatingLabel
                    label="Name"
                    className="login-input">
                    <Form.Control type="text" name={name} value={name} onChange={onChangeName} placeholder="Name"/>
                </FloatingLabel>
                <FloatingLabel
                    label="ImageUpload"
                    className="login-input">
                    <Form.Control type="file" value={email} onChange={onChangeEmail} placeholder="ID"/>
                </FloatingLabel>
                <SignUpBtn type='submit'>변경</SignUpBtn>
            </form>
        </SignUpForm>
    );
};

export default UserInfo;