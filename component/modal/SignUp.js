import React, {useCallback} from 'react';
import { LayerForm, LoginBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import useInput from '../../hook/useInput';

const SignUp = ({stopPropagation, onClickLogin}) => {
    const [name, onChangeName, setName] = useInput();
    const [email, onChangeEmail, setEmail] = useInput();
    const [password, onChangePassword, setPassword] = useInput();

    const onSubmitSignUp = useCallback((e) => {
        e.preventDefault();
        axios.post("/api/signup",{
            name:name,
            email:email,
            password:password
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },[name, email, password])

    return (
        <LayerForm onClick={stopPropagation}>
            <form onSubmit={onSubmitSignUp}>
            <h2>회원가입</h2>
            <button type='button' className='signUpBtn' onClick={onClickLogin}>회원이신가요? <span>로그인하기</span></button>

            <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" id="name2" value={name} onChange={onChangeName} placeholder="Name"/>
                    <label htmlFor="name2">Name</label>
                </FloatingLabel>
                <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" value={email} onChange={onChangeEmail} placeholder="ID"/>
                    <label htmlFor="id2">ID</label>
                </FloatingLabel>
                <FloatingLabel label="Password" className="login-input">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
                    <label htmlFor="password2">Password</label>
                </FloatingLabel>
                <LoginBtn type='submit'>
                    회원가입
                </LoginBtn>
            </form>
        </LayerForm>
    );
};

export default SignUp;