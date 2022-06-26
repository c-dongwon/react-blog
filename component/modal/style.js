import styled from "styled-components";

export const SignUpForm =styled.div`
   position: fixed;
    left:50%; 
    top:50%;
    transform: translate(-50%, -50%);
    width: 300px;
    background-color: #fff;
    border: 1px solid #ddd;
    padding:20px 15px;
    box-sizing: border-box;
    border-radius: 10px;
    form{
        margin: 0 15px;
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
    left:50%; 
    top:50%;
    transform: translate(-50%, -50%);
    width: 300px;
    background-color: #fff;
    border: 1px solid #ddd;
    padding:20px 15px;
    box-sizing: border-box;
    border-radius: 10px;
    h2{
        font-weight: 600;
        color:#000;
        font-size: 24px;
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
    .signUpBtn{
        border: 0;
        background-color:transparent;
        color:#000;
        text-align: left;
        margin-top: 10px;
        padding: 0;
        font-size: 14px;
        font-weight: 400;
        span{
            color:#1276E1;
        }
    }
    .errorTxt{
        margin-top: 15px;
        color: red;
        font-size: 14px;
        font-weight: 500;
    }
    .succBtn{
        border:0;
        background-color: transparent;
        margin-top: 15px;
        color: #08c708;
        font-size: 14px;
        font-weight: 500;
        text-align: left;
    }
`
export const LoginBtn = styled.button`
    height:30px;
    background-color: #ddd;
    color:#333;
    border-radius: 5px;
    border: 0;
    font-size: 16px;
    text-align: center;
    width: 100%;
    margin-top: 15px;
    font-weight: 500;;
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
export const UserForm = styled.div`
    padding: 20px 0;
    span{
        display: inline-block;
        padding:0px 0 10px;
    }
`
export const LogOutBtn = styled.button`
  height:30px;
    background-color: #f39191;
    color:#fff;
    border-radius: 5px;
    border: 0;
    font-size: 14px;
    text-align: center;
    width: 100%;
    margin-top: 15px;
`