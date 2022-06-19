import React,{useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import { HeaderBar, LeftMenu, HeaderWrap, DarkBtn, UserBtn } from './style';
import Link from 'next/link'
import { BsFillBrightnessHighFill, BsMoonFill, BsEmojiSunglasses } from "react-icons/bs";


const Header = ({darkMod, isDarkMode, onClickLogin}) => {
    const [data, setData] = useState([]);

        

    return (
        <HeaderWrap className={isDarkMode ? "dark" : ""}>        
            <HeaderBar>
                {
                  isDarkMode ? <img src="img/ogu_2.png" className='h50'/> : <img src="img/ogu.gif" alt="" />
                }

                <DarkBtn onClick={darkMod}>
                    {
                        isDarkMode ?  <BsMoonFill/> : <BsFillBrightnessHighFill/> 
                    }
                </DarkBtn>

                <UserBtn onClick={onClickLogin}>
                    <BsEmojiSunglasses/>
                </UserBtn>
                
            </HeaderBar>
            <LeftMenu>
             
            {
       data.map(item => <span key={item.idx}>
        {item.idx}<br/>
        {item.title}<br/>
        {item.date}<br/>
        {item.content}<br/>
        {item.name}
        </span>)
      }
            </LeftMenu>
        </HeaderWrap>

    );
};

export default Header;