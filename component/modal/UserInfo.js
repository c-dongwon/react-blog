import React, {useCallback, useState, useEffect} from 'react';
import { SignUpForm, LogOutBtn, SignUpBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import useInput from '../../hook/useInput';

const UserInfo = ({showUserInfo, stopPropagation, removeCookie, setLoginData, setShowUserInfo}) => {
    const [name, onChangeName, setName] = useInput();
    const [email, onChangeEmail, setEmail] = useInput();
    const [password, onChangePassword, setPassword] = useInput();

    const onSubmitSignUp = useCallback((e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', e.target.file.files[0])
       axios.post("/api/modfiy", formData, {
        header: { 'content-type': 'multipart/form-data' },
      })
       .then(res => setMod(prev => !prev))
    },[name, email, password])

    const onSubmitLogout = useCallback(() => {
        axios.get("/api/logout")
        .then(res => {
            removeCookie("x_auth")
            setLoginData(false)
            setShowUserInfo(false)
        })
    },[]);

    return (
        <SignUpForm className={showUserInfo ? "active" : ""} onClick={stopPropagation}>
            <form onSubmit={onSubmitSignUp} encType='multipart/form-data'>
            <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" name={name} id="name" value={name || ""} onChange={onChangeName} placeholder="Name"/>
                    <label htmlFor="name">Name</label>
                </FloatingLabel>
                <input type='file' name='file' />
                <SignUpBtn type='submit'>변경</SignUpBtn>
                <LogOutBtn onClick={onSubmitLogout}>로그아웃</LogOutBtn>
            </form>
        </SignUpForm>
    );
};

export default UserInfo;