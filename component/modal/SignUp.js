import React, {useCallback, useState} from 'react';
import { LayerForm, LoginBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import useInput from '../../hook/useInput'; 

const SignUp = ({stopPropagation, onClickLogin}) => {
    const [name, onChangeName, setName] = useInput();
    const [email, onChangeEmail, setEmail] = useInput();
    const [password, onChangePassword, setPassword] = useInput();
    const [files, setFiles] = useState('')
    const [success, setSuccess] = useState(false);

    const onFile = useCallback((e) => {
        setFiles(e.target.files)
    },[files])

    const onSubmitSignUp = useCallback((e) => {
        e.preventDefault(); 
        let formData = new FormData();
        formData.append("name",name);
        formData.append("email",email);
        formData.append("password",password);
        formData.append("file",files[0]);

        axios.post("/api/signup", formData, {
        header: { 'content-type': 'multipart/form-data' },
      })
        .then(res => setSuccess(true))
        .catch(error => console.log(error))
    },[name, email, password, files])

    return (
        <LayerForm onClick={stopPropagation}>
            <form onSubmit={onSubmitSignUp}  encType='multipart/form-data'>
            <h2>회원가입</h2>
            <button type='button' className='signUpBtn' onClick={onClickLogin}>회원이신가요? <span>로그인하기</span></button>
            <input type="file" name="file" id="file" onChange={onFile}/>
            <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" id="name2" value={name || ""} onChange={onChangeName} placeholder="Name"/>
                    <label htmlFor="name2">Name</label>
                </FloatingLabel>
                <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" value={email} onChange={onChangeEmail || ""} placeholder="ID"/>
                    <label htmlFor="id2">ID</label>
                </FloatingLabel>
                <FloatingLabel label="Password" className="login-input">
                    <Form.Control type="password" placeholder="Password" value={password || ""} onChange={onChangePassword}/>
                    <label htmlFor="password2">Password</label>
                </FloatingLabel>
                {
                    success && <button type="button" className='succBtn' onClick={onClickLogin}>회원가입성공! 로그인페이지로 이동</button>
                }
                <LoginBtn type='submit'>
                    회원가입
                </LoginBtn>
            </form>
        </LayerForm>
    );
};

export default SignUp;