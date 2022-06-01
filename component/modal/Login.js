import React, {useCallback} from 'react';
import { LayerForm, LoginBtn, SignUpBtn } from './style';
import { FloatingLabel, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({showLogin, stopPropagation, onClickSignUp, showSignUp}) => {
    return (
        <LayerForm className={showLogin ? "active" : ""} onClick={stopPropagation}>
            <form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="ID"
                    className="login-input">
                    <Form.Control type="text" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="login-input">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <LoginBtn>Login</LoginBtn>
                <SignUpBtn onClick={onClickSignUp} type="button">{showSignUp ? "Close" : "Sign Up"}</SignUpBtn>
            </form>
        </LayerForm>
    );
};

export default Login;