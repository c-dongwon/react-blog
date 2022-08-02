import React, {useCallback, useState, useEffect} from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {withCookies, useCookies} from 'react-cookie';
import {CookiesProvider} from 'react-cookie';
import axios from "axios";
import Header from '../component/header';
import GlobalStyles from "./GlobalStyles"
import {Section} from './style';
import Login from '../component/modal/Login';
import SignUp from '../component/modal/SignUp';
import UserInfo from '../component/modal/UserInfo';
import Chat from '../component/modal/Chat';
import wrapper from "../lib/store/configureStore";
import useLocalStorage from "../hook/useLocalStorage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const dark = {
    colors:{
        mainTxtColor:'#f3f3f3',
        subTxtColor:'#ececec',
        searchTxtColor:'#ececec',
        wrapColor:'#212121',
        searchInputColor:'#212121',
        listBorderColor:'#6b6b6b',
        colorF9:'#121212',
        shadowColor:'#0000001a',
        svgColor:'#6b6b6b',
        searchIconColor:'#6b6b6b',
        commentColor:'#363636',
        btnColor:'#555'
    }
}
const light = {
    colors:{
        mainTxtColor:'#000',
        subTxtColor:'#333',
        searchTxtColor:'#979797',
        wrapColor:'#fff',
        searchInputColor:'#e1e1e1',
        listBorderColor:'#ddd',
        colorF9:'#F9F9F9',
        shadowColor:'#0000001a',
        svgColor:'#C4C4C6',
        searchIconColor:'#0000005C',
        commentColor:'#e1e1e1',
        btnColor:'#ddd'
    }
}
const App = ({Component, pageProps}) => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage("theme","light")
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [cookies, removeCookie] = useCookies(['user']);
    const [hasCookie, setHasCookie] = useState(false);
    const [loginData, setLoginData] = useState(false);

    //쿠키저장
    useEffect(() => {
        if (cookies.user && cookies.user !== 'undefined') {
            setHasCookie(true);
        }
    }, [cookies]);

    //로그인 유지
    useEffect(() => {
        if (JSON.stringify(cookies) !== "{}" && cookies.x_auth !== "undefined") {
            setLoginData(true)
        }
    }, []);

    //로그인
    const onClickLogin = useCallback((e) => {
        setShowLogin(prev => !prev);
        setShowSignUp(false);
        e.stopPropagation();
    }, [showLogin]);

    //회원가입
    const onClickSignUp = useCallback((e) => {
        setShowSignUp(prev => !prev);
        setShowLogin(false);
        e.stopPropagation();
    }, [showSignUp]);

    //회원정보 수정
    const onClickUserInfo = useCallback((e) => {
        setShowUserInfo(prev => !prev);
        e.stopPropagation();
    }, [showSignUp]);

    //채팅
    const onClickChat = useCallback((e) => {
        setShowChat(prev => !prev);
        e.stopPropagation();
    }, [showChat]);

    //modal close 함수
    const onCloseModal = useCallback(() => {
        setShowLogin(false);
        setShowSignUp(false);
        setShowUserInfo(false);
    }, [showLogin, showSignUp])

    //버블링 방지
    const stopPropagation = useCallback((e) => {
        e.stopPropagation();
    }, []);

    const darkMod = useCallback(() => {
        setIsDarkMode(isDarkMode === "light" ? "dark" : "light")
        if(isDarkMode === 'dark'){
            window.localStorage.setItem('theme', isDarkMode)
        }else{
            window.localStorage.removeItem('theme')
        }
    }, [isDarkMode]);

    let theme = isDarkMode === "light" ? light : dark;

    useEffect(() => {
        if(window.localStorage.getItem('theme')){
            setIsDarkMode("dark")
            theme = dark
        }else{
            setIsDarkMode("light")
            theme = light
        }
    },[isDarkMode]);



    return (
        <>
            <CookiesProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyles/>
                    <Section onClick={onCloseModal}>

                        <Header darkMod={darkMod} isDarkMode={isDarkMode} loginData={loginData}
                                onClickLogin={onClickLogin} onClickUserInfo={onClickUserInfo}
                                onClickChat={onClickChat}/>
                        {
                            showLogin && <Login setLoginData={setLoginData} stopPropagation={stopPropagation}
                                                setShowLogin={setShowLogin} onClickSignUp={onClickSignUp}/>
                        }

                        {
                            showSignUp && <SignUp stopPropagation={stopPropagation} onClickLogin={onClickLogin}
                                                  setShowSignUp={setShowSignUp}/>
                        }

                        {
                            showUserInfo && <UserInfo stopPropagation={stopPropagation} removeCookie={removeCookie}
                                                      setShowUserInfo={setShowUserInfo} setLoginData={setLoginData}/>
                        }
                        {
                            showChat && <Chat stopPropagation={stopPropagation} setShowChat={setShowChat}/>
                        }

                        <Component {...pageProps}/>
                    </Section>

                </ThemeProvider>
            </CookiesProvider>
        </>
    )
}


export default wrapper.withRedux(App);