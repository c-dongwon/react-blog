import React, {useCallback, useState} from 'react';
import Header from '../component/header';
import useLocalStorage from '../hook/useLocalStorage';
import  GlobalStyles from "./GlobalStyles"
import { Section } from './style';
import Login from '../component/modal/Login';
import SignUp from '../component/modal/SignUp';

const index = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

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
            <Login showLogin={showLogin} stopPropagation={stopPropagation} onClickSignUp={onClickSignUp} showSignUp={showSignUp}/>
            <SignUp showSignUp={showSignUp} stopPropagation={stopPropagation}/>
        </Section>
    );
};

export default index;