import React, {useCallback, useEffect, useRef, useState} from 'react';
import { LayerForm, LoginBtn, SignUpBtn, UserForm, LogOutBtn, CloseBtn } from './style';
import { BsXLg } from "react-icons/bs";
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useInput from '../../hook/useInput';
import axios from 'axios';

const Board = ({setShowBoard}) => {
    const [category, onChangeCategory ,setCategory] = useInput();

    const onSubmitBoard = useCallback((e) => {
        e.preventDefault();
        axios.post("/api/board/category",{
            category:category
        })
       
        .then(res => {
            setShowBoard(false)
            setCategory("")
        })

    },[category]);
    
    return (
        <LayerForm> 
            <form onSubmit={onSubmitBoard}>
                <h2>게시판생성</h2>
                <CloseBtn type="button" onClick={() => setShowBoard(false)}><BsXLg/></CloseBtn> 
                <FloatingLabel
                    className="login-input">
                    <Form.Control type="text" placeholder="게시판 이름" id="id" value={category || ""} onChange={onChangeCategory}/>
                    <label htmlFor="id">게시판 이름</label>
                </FloatingLabel>
                <LoginBtn type='submit'>
                    생성
                </LoginBtn>
            </form> 
        </LayerForm>
    );
};

export default Board;