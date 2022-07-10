import React,{useState, useEffect, useCallback} from 'react';
import { HeaderBar, LeftMenu, HeaderWrap, MyInfo, MenuList, SwitchBtn, FlexLi, SearchWrap } from './style';
import Link from 'next/link'
import { BsChevronDown, BsChevronUp, BsChevronRight, BsSearch, BsFillPencilFill } from "react-icons/bs";
import LoginAfter from './incloud/LoginAfter';
import LoginBefore from './incloud/LoginBefore';

const Header = ({darkMod, isDarkMode, onClickLogin, userData, loginData, onClickUserInfo}) => {
    const [activeMenu, setActiveMenu] = useState(0);

    const toggleBtn = useCallback((idx) => {
        if(activeMenu !== idx){
            setActiveMenu(idx)
        }else{
            setActiveMenu(0)
        }
    },[activeMenu])
 
    return (
        <HeaderWrap>        
            <LeftMenu>
                <h1>Untitled</h1>
                <Link href="write">
                    <a>
                        <BsFillPencilFill/>
                    </a>
                </Link>
                <SearchWrap>
                    <input type="text" placeholder='검색'/>
                    <button><BsSearch/></button>
                </SearchWrap>
                {
                    loginData ? <LoginAfter onClickUserInfo={onClickUserInfo} userData={userData}/> : <LoginBefore onClickLogin={onClickLogin}/>
                }
                <MenuList>
                    <li>
                        <button type='button' onClick={() => toggleBtn(1)} className={1 === activeMenu ? "active" : ""}>React{1 === activeMenu ? <BsChevronDown/> : <BsChevronUp/>}</button>
                        <ul className={1 === activeMenu ? "active" : ""}>
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
                    <button type='button' onClick={() => toggleBtn(2)}  className={2 === activeMenu ? "active" : ""}>JavaScript{2 === activeMenu ? <BsChevronDown/> : <BsChevronUp/>}</button>
                        <ul className={2 === activeMenu ? "active" : ""}>
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
                        <h3>{isDarkMode ? "라이트 모드" : "다크 모드"}</h3>
                         <SwitchBtn>
                            <input type="checkbox" id="switch" onClick={darkMod}/>
                            <label htmlFor="switch">
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