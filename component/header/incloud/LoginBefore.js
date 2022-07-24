import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import {BsChevronRight} from "react-icons/bs";
import { MyInfo } from '../style';
const LoginAfter = ({onClickLogin}) => {
    return (
        <MyInfo onClick={onClickLogin}>
             <div className="imgWrap">                      
                   <img src="/img/img-sample.gif" alt="" />
              </div>
              <div className='infoWrap'>
                  <h3>로그인이 필요합니다.</h3>                 
              </div>
             <BsChevronRight/>   
        </MyInfo>
    );
};

export default LoginAfter;