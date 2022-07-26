import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { CookiesProvider } from 'react-cookie';
import React, {useCallback, useState, useEffect} from 'react';
import axios from "axios";
import Header from '../component/header';
import  GlobalStyles from "./GlobalStyles"
import { Section } from './style';
import Login from '../component/modal/Login';
import SignUp from '../component/modal/SignUp';
import { withCookies, useCookies } from 'react-cookie';
import UserInfo from '../component/modal/UserInfo';
import Chat from '../component/modal/Chat';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const App = ({ Component, pageProps }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [showChat, setShowChat] = useState(false);
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

    const onClickChat= useCallback((e) => {
      setShowChat(prev => !prev);
      e.stopPropagation();
  },[showChat]);

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
        
    },[loginData, showUserInfo, showLogin])
  return (
    <>
    <CookiesProvider>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
        <Section className={isDarkMode ? "dark" : ""} onClick={onCloseModal}>
       
            <Header darkMod={darkMod} isDarkMode={isDarkMode} 
                    userData={userData} loginData={loginData} 
                    onClickLogin={onClickLogin} onClickUserInfo={onClickUserInfo}
                    onClickChat={onClickChat}/>
            {
                showLogin && <Login setLoginData={setLoginData} stopPropagation={stopPropagation} 
                                    setShowLogin={setShowLogin} onClickSignUp={onClickSignUp}/>
            }
    
            {
                showSignUp && <SignUp stopPropagation={stopPropagation} onClickLogin={onClickLogin} setShowSignUp={setShowSignUp}/>
            }

            {
                showUserInfo && <UserInfo stopPropagation={stopPropagation} removeCookie={removeCookie} 
                                          setShowUserInfo={setShowUserInfo} userData={userData} setLoginData={setLoginData}/>
            }
              {
                showChat && <Chat stopPropagation={stopPropagation}
                                          setShowChat={setShowChat} userData={userData}/>
            }
            
             <Component {...pageProps} />
        </Section>
          
        </ThemeProvider>
      </CookiesProvider>
    </>
  )
}


export default App;