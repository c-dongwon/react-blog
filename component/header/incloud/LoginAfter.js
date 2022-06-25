import React from 'react';
import {BsChevronRight} from "react-icons/bs";
import { MyInfo } from '../style';

const LoginAfter = () => {
    return (
        <MyInfo>
            <div className="imgWrap">                      
                <img src="img/sample.png" alt="" />
            </div>
            <div className='infoWrap'>
                <h3>최동원</h3>                 
                <p>정보수정, 로그아웃, 글쓰기</p>
            </div>
            <BsChevronRight/>   
        </MyInfo>
    );
};

export default LoginAfter;