import React, {useCallback, useState, useEffect} from 'react';
import { SignUpForm, LogOutBtn, SignUpBtn, ImageView } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import { BsCameraFill, BsXLg } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import useInput from '../../hook/useInput';

const UserInfo = ({showUserInfo, stopPropagation, removeCookie, setLoginData, setShowUserInfo,userData}) => {
    const [name, onChangeName, setName] = useInput("");
    const [email, onChangeEmail, setEmail] = useInput();
    const [password, onChangePassword, setPassword] = useInput();
    const [files, setFiles] = useState();
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        if(userData.name){
            setName(userData.name);
        }
        if(userData.file){
            // setFiles(userData.file)
            setImageSrc(userData.file)
        }
    },[])
   

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
    console.log(files)
 
    const onSubmitMod = useCallback((e) => {
        e.preventDefault(); 
        let formData = new FormData();
        formData.append("name",name);
        
       if(files){
        formData.append("file",files[0]);
       }
        
        axios.post("/api/modfiy", formData, {
            header: { 'content-type': 'multipart/form-data' },
          })
          .then(res => {
              setName("");
              setFiles("");
              setShowUserInfo(false);
          })
    },[name, files])

    const onSubmitLogout = useCallback(() => {
        axios.get("/api/logout")
        .then(res => {
            removeCookie("x_auth");
            setLoginData(false);
            setShowUserInfo(false);
        })
    },[]);

    return (
        <SignUpForm className={showUserInfo ? "active" : ""} onClick={stopPropagation}>
                <CloseBtn type="button" onClick={() => setShowUserInfo(false)}><BsXLg/></CloseBtn>
            <form onSubmit={onSubmitMod} encType='multipart/form-data'>
            <ImageView>
                {
                    imageSrc ? <img src={imageSrc} alt="" /> : <BsCameraFill/>
                }
             <input type="file" name="file" id="file" accept="image/png, image/jpeg" onChange={onFile}/>
            </ImageView>
            <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" name="name" id="name" value={name || ""} onChange={onChangeName} placeholder={userData.name}/>
                    <label htmlFor="name">Name</label>
                </FloatingLabel>
                <SignUpBtn type='submit'>변경</SignUpBtn>
                <LogOutBtn onClick={onSubmitLogout}>로그아웃</LogOutBtn>
            </form>
        </SignUpForm>
    );
};

export default UserInfo;