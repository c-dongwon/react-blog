import React, {useCallback} from 'react';
import { SignUpForm, LoginBtn, SignUpBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import useInput from '../../hook/useInput';

const UserInfo = ({showUserInfo, stopPropagation}) => {
    const [name, onChangeName, setName] = useInput();
    const [email, onChangeEmail, setEmail] = useInput();
    const [password, onChangePassword, setPassword] = useInput();

    const onSubmitSignUp = useCallback((e) => {
        e.preventDefault();
        axios.post("/api/",{
          
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },[name, email, password])

    return (
        <SignUpForm className={showUserInfo ? "active" : ""} onClick={stopPropagation}>
            <form onSubmit={onSubmitSignUp}>
            <FloatingLabel
                    label="Name"
                    className="login-input">
                    <Form.Control type="text" value={name} onChange={onChangeName} placeholder="Name"/>
                </FloatingLabel>
                <FloatingLabel
                    label="ImageUpload"
                    className="login-input">
                    <Form.Control type="text" value={email} onChange={onChangeEmail} placeholder="ID"/>
                </FloatingLabel>
                <SignUpBtn type='submit'>변경</SignUpBtn>
            </form>
        </SignUpForm>
    );
};

export default UserInfo;