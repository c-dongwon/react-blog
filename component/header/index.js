import React,{useState, useEffect, useCallback} from 'react';
import { HeaderBar, LeftMenu, HeaderWrap, MyInfo, MenuList, SwitchBtn, FlexLi, SearchWrap } from './style';
import Link from 'next/link'
import { BsChevronDown, BsChevronUp, BsChevronRight, BsSearch, BsFillPencilFill } from "react-icons/bs";
import LoginAfter from './incloud/LoginAfter';
import LoginBefore from './incloud/LoginBefore';
import axios from 'axios';

const Header = ({darkMod, isDarkMode, onClickLogin, userData, loginData, onClickUserInfo}) => {
    const [activeMenu, setActiveMenu] = useState(0);
    const [categoryList, setCategoryList] = useState();
    const [menuList, setMenuList] = useState();
   
    const list = [];
    const toggleBtn = useCallback((idx) => {
        if(activeMenu !== idx){
            setActiveMenu(idx)
        }else{
            setActiveMenu(null)
        }
    },[activeMenu])
    
    useEffect(() => {
        axios.get("/api/board/list")
        .then(res => {
            setMenuList(res.data)
        })

        axios.get("/api/board/category")
        .then(res => {
            setCategoryList(res.data)
        })
    },[])

   
    for(let i = 0; i < categoryList?.length; i++){
        list.push(menuList?.filter(item => item.category === categoryList[i].category))
    }
 
    return (
        <HeaderWrap>        
            <LeftMenu>
                <h1>Untitled</h1>
                <Link href="/write">
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
                    {
                        list?.map((item, idx) => 
                            <li key={idx}>
                                 <button type='button' onClick={() => toggleBtn(idx)} className={idx === activeMenu ? "active" : ""}>{item[0]?.category}{idx === activeMenu ? <BsChevronDown/> : <BsChevronUp/>}</button>
                                 <ul className={idx === activeMenu ? "active" : ""}>
                                    {
                                        item.map((list, idx) =>
                                            <li key={idx}>
                                                <Link href="/123">
                                                    <a>{list.title}</a>
                                                </Link>
                                            </li>
                                            )
                                    } 
                                 </ul>
                            </li>)
                    }
                
                </MenuList>    
                <MenuList>
                    <li>
                        <Link href="/123">
                            <a>사람들 ./ Community <BsChevronRight/></a>
                        </Link>
                    </li>    
                    <li>
                        <Link href="/123">
                            <a>정보 ./ My page <BsChevronRight/></a>
                        </Link>
                    </li>    
                </MenuList>  
                <MenuList>
                    <li>
                        <Link href="/123">
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