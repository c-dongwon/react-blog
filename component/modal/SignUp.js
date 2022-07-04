import React, {useCallback, useState} from 'react';
import { LayerForm, LoginBtn, ImageView } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import { BsCameraFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import useInput from '../../hook/useInput'; 

const SignUp = ({stopPropagation, onClickLogin}) => {
    const [name, onChangeName, setName] = useInput();
    const [email, onChangeEmail, setEmail] = useInput();
    const [password, , setPassword] = useInput();
    const [passwordCheck, , setPasswordCheck] = useInput();
    const [files, setFiles] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [mismatchError, setMismatchError] = useState(false);

    const onFile = useCallback((e) => {
        setFiles(e.target.files)
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]); 
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result); 
            resolve();  
          };  
        });
    },[files])

    const onChangePassword = useCallback(
        (e) => {
          setPassword(e.target.value);
          setMismatchError(passwordCheck !== e.target.value);
        },
        [passwordCheck, setPassword],
      );
    
      const onChangePasswordCheck = useCallback(
        (e) => {
          setPasswordCheck(e.target.value);
          setMismatchError(password !== e.target.value);
        },
        [password, setPasswordCheck],
      );
      
    const onSubmitSignUp = useCallback((e) => {
        e.preventDefault(); 
        setError("");
        setSuccess("");
        if(!name || !name.trim()){
            setError("이름을 입력해주세요.");
            return false;
        }else if(!email || !email.trim()){
            setError("아이디를 입력해주세요");
            return false;
        }else if(!password || !password.trim()){
            setError("비밀번호를 입력해주세요");
            return false;
        }else if(mismatchError){
            setError("비밀번호가 일치하지않습니다.");
            return false;
        }
        let formData = new FormData();
        formData.append("name",name);
        formData.append("email",email);
        formData.append("password",password);
        formData.append("file",files[0]);

        axios.post("/api/signup", formData, {
        header: { 'content-type': 'multipart/form-data' },
      })
        .then(res => setSuccess(true))
        .catch(error => setError(error.response.data.message))
    },[name, email, password, files, passwordCheck])

    return (
        <LayerForm onClick={stopPropagation}>
            <form onSubmit={onSubmitSignUp}  encType='multipart/form-data'>
            <h2>회원가입</h2>
            <button type='button' className='signUpBtn' onClick={onClickLogin}>회원이신가요? <span>로그인하기</span></button>
            <ImageView>
                {
                    files ? <img src={imageSrc} alt="" /> : <BsCameraFill/>
                }
             <input type="file" name="file" id="file" accept="image/png, image/jpeg" onChange={onFile}/>
            </ImageView>
            <p className='profileTxt'>프로필이미지 설정</p>
            <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" id="name2" value={name || ""} onChange={onChangeName} placeholder="Name"/>
                    <label htmlFor="name2">이름</label>
                </FloatingLabel>
                <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" value={email} onChange={onChangeEmail || ""} placeholder="ID"/>
                    <label htmlFor="id2">아이디</label>
                </FloatingLabel>
                <FloatingLabel className="login-input">
                    <Form.Control type="password" placeholder="Password" value={password || ""} onChange={onChangePassword}/>
                    <label htmlFor="password2">비밀번호</label>
                </FloatingLabel>
                <FloatingLabel className="login-input">
                    <Form.Control type="password" placeholder="Password" value={passwordCheck || ""} onChange={onChangePasswordCheck}/>
                    <label htmlFor="password3">비밀번호확인</label>
                </FloatingLabel>
                {
                    success && <button type="button" className='succBtn' onClick={onClickLogin}>회원가입성공! 로그인페이지로 이동</button>
                }
                {
                    error && <p className='errorTxt'>{error}</p>
                }
                <LoginBtn type='submit'>
                    회원가입
                </LoginBtn>
            </form>
        </LayerForm>
    );
};

export default SignUp;