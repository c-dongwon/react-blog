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
        const formData = new FormData();
        formData.append('file', e.target.file.files[0])
       axios.post("/api/modfiy", formData, {
        header: { 'content-type': 'multipart/form-data' },
      })
       .then(res => setMod(prev => !prev))
    },[name, email, password])

    
    
    return (
        <SignUpForm className={showUserInfo ? "active" : ""} onClick={stopPropagation}>
            <form onSubmit={onSubmitSignUp} encType='multipart/form-data'>
            <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" name={name} id="name" value={name} onChange={onChangeName} placeholder="Name"/>
                    <label htmlFor="name">Name</label>
                </FloatingLabel>
                <input type='file' name='file' />
                <SignUpBtn type='submit'>변경</SignUpBtn>
            </form>
        </SignUpForm>
    );
};

export default UserInfo;