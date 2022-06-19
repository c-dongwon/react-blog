import React, {useCallback, useState, useEffect} from 'react';
import axios from "axios";
import Header from '../component/header';
import useLocalStorage from '../hook/useLocalStorage';
import  GlobalStyles from "./GlobalStyles"
import { Section } from './style';
import Login from '../component/modal/Login';
import SignUp from '../component/modal/SignUp';
import { withCookies, useCookies } from 'react-cookie';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const index = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [ cookies, removeCookie ] = useCookies([ 'user' ]);  
    const [ hasCookie, setHasCookie ] = useState(false);

    useEffect(() => {    
        if (cookies.user && cookies.user !== 'undefined') { 
            setHasCookie(true);    
         }  
      }, [ cookies ]);

    const onClickLogin = useCallback((e) => {
        setShowLogin(prev => !prev);
        setShowSignUp(false);
        e.stopPropagation();
    },[showLogin]);

    const onClickSignUp= useCallback((e) => {
        setShowSignUp(prev => !prev);
        e.stopPropagation();
    },[showSignUp]);

    const onCloseModal = useCallback(() => {
        setShowLogin(false);
        setShowSignUp(false);
    },[showLogin])

    const darkMod = useCallback(() => {
        setIsDarkMode(prev => !prev)
    },[isDarkMode]);

    const stopPropagation = useCallback((e) => {
        e.stopPropagation();
      }, []);
      
    return (
        <Section className={isDarkMode ? "dark" : ""} onClick={onCloseModal}>
            <GlobalStyles/>
            <Header darkMod={darkMod} isDarkMode={isDarkMode} onClickLogin={onClickLogin}/>
            <Login hasCookie={hasCookie} cookies={cookies} showLogin={showLogin} stopPropagation={stopPropagation} onClickSignUp={onClickSignUp} showSignUp={showSignUp} setHasCookie={setHasCookie}/>
            <SignUp showSignUp={showSignUp} stopPropagation={stopPropagation}/>
        </Section>
    );
};

export default index;