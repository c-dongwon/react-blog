import React from 'react';
import {BsChevronRight} from "react-icons/bs";
import { MyInfo } from '../style';

const LoginAfter = ({onClickUserInfo, userData}) => {
    return (
        <MyInfo onClick={onClickUserInfo}>
            <div className="imgWrap"> 
            {
                userData ? <img src={userData.file} alt="" /> : <img src="img/sample.png" alt="" />
            }                     
            </div>
            <div className='infoWrap'>
                <h3>{userData?.name}</h3>                 
                <p>정보수정, 로그아웃, 글쓰기</p>
            </div>
            <BsChevronRight/>   
        </MyInfo>
    );
};

export default LoginAfter;