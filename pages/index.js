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
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [cookies, removeCookie] = useCookies([ 'user' ]);  
    const [hasCookie, setHasCookie] = useState(false);
    const [userData,  setUserData] = useState();
    const [loginData, setLoginData] = useState(false);
    
    //쿠키저장
    useEffect(() => {    
        if (cookies.user && cookies.user !== 'undefined') { 
            setHasCookie(true);    
         }  
      }, [ cookies ]);
    
    //로그인 유지
    useEffect(() => {
        if(JSON.stringify(cookies) !== "{}" && cookies.x_auth !== "undefined"){
            setLoginData(true)
        }
     },[]);

    //로그인
    const onClickLogin = useCallback((e) => {
        setShowLogin(prev => !prev);
        setShowSignUp(false);
        e.stopPropagation();
    },[showLogin]);

    //회원가입
    const onClickSignUp= useCallback((e) => {
        setShowSignUp(prev => !prev);
        setShowLogin(false);
        e.stopPropagation();
    },[showSignUp]);

    //회원정보 수정
    const onClickUserInfo= useCallback((e) => {
        setShowUserInfo(prev => !prev);
        e.stopPropagation();
    },[showSignUp]);

    //modal close 함수
    const onCloseModal = useCallback(() => {
        setShowLogin(false);
        setShowSignUp(false);
        setShowUserInfo(false);
    },[showLogin, showSignUp])

    const darkMod = useCallback(() => {
        setIsDarkMode(prev => !prev)
    },[isDarkMode]);

    //버블링 방지
    const stopPropagation = useCallback((e) => {
        e.stopPropagation();
      }, []);
      
    useEffect(() => {
        axios.get("/api/user/auth")
        .then(res => {setUserData(res.data)})
    },[loginData])
    return (
        <Section className={isDarkMode ? "dark" : ""} onClick={onCloseModal}>
            <GlobalStyles/>
            <Header darkMod={darkMod} isDarkMode={isDarkMode} 
                    userData={userData} loginData={loginData} 
                    onClickLogin={onClickLogin} onClickUserInfo={onClickUserInfo}/>
            {
                showLogin && <Login setUserData={setUserData} loginData={loginData} 
                                    setLoginData={setLoginData} stopPropagation={stopPropagation} 
                                    setShowLogin={setShowLogin} onClickSignUp={onClickSignUp}/>
            }
    
            {
                showSignUp && <SignUp stopPropagation={stopPropagation} onClickLogin={onClickLogin}/>
            }

            {
                showUserInfo && <UserInfo stopPropagation={stopPropagation} removeCookie={removeCookie} setLoginData={setLoginData} setShowUserInfo={setShowUserInfo} userData={userData}/>
            }
        </Section>
    );
};

export default index;