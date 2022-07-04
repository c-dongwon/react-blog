import React, {useCallback, useState, useEffect} from 'react';
import axios from "axios";
import Header from '../component/header';
import  GlobalStyles from "./GlobalStyles"
import { Section } from './style';
import Login from '../component/modal/Login';
import SignUp from '../component/modal/SignUp';
import { withCookies, useCookies } from 'react-cookie';
import UserInfo from '../component/modal/UserInfo';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const index = () => {
    

    return (
        <></>
    );
};

export default index;