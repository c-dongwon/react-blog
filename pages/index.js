import React, {useState} from 'react';
import Header from '../component/Header';
import useLocalStorage from '../hook/useLocalStorage';
import  GlobalStyles from "./GlobalStyles"
import { Section } from './style';
import DarkModeToggle from "react-dark-mode-toggle";

const index = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <Section className={isDarkMode ? "dark" : ""}>
            <GlobalStyles/>
            <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
            <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
                className="darkSwich"
                />
        </Section>
    );
};

export default index;