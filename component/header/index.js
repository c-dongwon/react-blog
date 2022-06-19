import React,{useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import { HeaderBar, LeftMenu, HeaderWrap, DarkBtn, UserBtn, MenuList, SwitchBtn, FlexLi } from './style';
import Link from 'next/link'
import { BsFillBrightnessHighFill, BsMoonFill, BsEmojiSunglasses, BsChevronDown, BsChevronUp, BsChevronRight, BsSearch } from "react-icons/bs";

const Header = ({darkMod, isDarkMode, onClickLogin}) => {
    const [activeMenu, setActiveMenu] = useState(0);

    const toggleBtn = useCallback((idx) => {
        if(activeMenu !== idx){
            setActiveMenu(idx)
        }else{
            setActiveMenu(0)
        }
    },[activeMenu])
 
    return (
        <HeaderWrap className={isDarkMode ? "dark" : ""}>        
            <HeaderBar>
                <div>
                    <form>
                        <button type="submit"><BsSearch/></button>
                        <input type="text" placeholder='Search'/>
                    </form>
                    
                </div>
                <UserBtn onClick={onClickLogin}>
                    <img src="img/sample.png" alt="" />
                </UserBtn>
            </HeaderBar>
            <LeftMenu>
                <h1>MENU</h1>
                <MenuList>
                    <li>
                        <button type='button' onClick={() => toggleBtn(1)} className={1 === activeMenu && "active"}>React{1 === activeMenu ? <BsChevronDown/> : <BsChevronUp/>}</button>
                        <ul className={1 === activeMenu && "active"}>
                            <li>
                                <Link href="#">
                                    <a>-useState</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>-useEffect</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>-useState</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>-useEffect</a>
                                </Link>
                            </li>
                        </ul>
                    </li>    
                    <li>
                    <button type='button' onClick={() => toggleBtn(2)}  className={2 === activeMenu && "active"}>JavaScript{2 === activeMenu ? <BsChevronDown/> : <BsChevronUp/>}</button>
                        <ul className={2 === activeMenu && "active"}>
                            <li>
                                <Link href="#">
                                    <a>-Map</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>-For</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>-If Else</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>-filter</a>
                                </Link>
                            </li>
                        </ul>
                    </li> 
                </MenuList>    
                <MenuList>
                    <li>
                        <Link href="#">
                            <a>사람들 ./ Community <BsChevronRight/></a>
                        </Link>
                    </li>    
                    <li>
                        <Link href="#">
                            <a>정보 ./ My page <BsChevronRight/></a>
                        </Link>
                    </li>    
                </MenuList>  
                <MenuList>
                    <li>
                        <Link href="#">
                            <a>문의 및 수정요청 <BsChevronRight/></a>
                        </Link>
                    </li>    
                    <FlexLi>
                        <h3>Dark Mode</h3>
                         <SwitchBtn>
                            <input type="checkbox" id="switch" onClick={darkMod}/>
                            <label for="switch">
                                <span></span>
                            </label>
                        </SwitchBtn>
                    </FlexLi>  
                </MenuList>    
            </LeftMenu>
        </HeaderWrap>

    );
};

export default Header;