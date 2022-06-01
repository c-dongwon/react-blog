import styled from "styled-components";

export const SignUpForm =styled.div`
    position: fixed;
    right: 299px;
    top:79px;
    width: 0px;
    height: 220px;
    border:1px solid #ddd;
    border-right: 0;
    border-left: 0;
    border-top: 0;
    transition: 0.3s;
    overflow: hidden;
    box-sizing: border-box;
    form{
        margin: 0 15px;
    }
    &.active{
        width: 300px;
        border-left: 1px solid #ddd;
    }
    .login-input{
        margin-top: 15px;
    input{
        height: 30px;
        font-size:14px;
        padding:0 10px
    
    } 
    label{
        padding: 0 5px;
        line-height: 30px;
        font-size: 13px;
    }
    }
`

export const LayerForm = styled.div`
    position: fixed;
    right: 0px;
    top:79px;
    width: 300px;
    height: 0px;
    border:1px solid #ddd;
    border-top: 0;
    transition: 0.3s;
    overflow: hidden;
    padding:0 15px;
    box-sizing: border-box;
    &.active{
        height: 220px;
    }
    .login-input{
        margin-top: 15px;
       input{
        height: 30px;
        font-size:14px;
        padding:0 10px
       
       } 
       label{
           padding: 0 5px;
           line-height: 30px;
           font-size: 13px;
       }
    }
`
export const LoginBtn = styled.button`
    height:30px;
    background-color: #ddd;
    color:#333;
    border-radius: 5px;
    border: 0;
    font-size: 14px;
    text-align: center;
    width: 100%;
    margin-top: 15px;
`
export const SignUpBtn = styled.button`
    height:30px;
    background-color: #888;
    color:#fff;
    border-radius: 5px;
    border: 0;
    font-size: 14px;
    text-align: center;
    width: 100%;
    margin-top: 15px;
`