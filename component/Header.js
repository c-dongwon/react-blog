import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { HeaderBar, LeftMenu, HeaderWrap } from './style';
import Link from 'next/link'

const Header = ({isDarkMode}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("/api/list")
      .then(res => setData(res.data))
    },[])

    return (
        <HeaderWrap className={isDarkMode ? "dark" : ""}>        
            <HeaderBar>
                {
                  isDarkMode ? <img src="img/ogu_2.png" className='h50'/> : <img src="img/ogu.gif" alt="" />
                }
                
            </HeaderBar>
            <LeftMenu>
                <h1>
                    <Link href="/">
                        <a title="메인으로 이동">
                        &#60;FrontDev_blog/&#62;
                        </a>
                    </Link> 
                </h1>
                <ul>
                    {
                      data.map(item => <li>{item.title}</li>)
                    }
                </ul>
            </LeftMenu>
        </HeaderWrap>

    );
};

export default Header;