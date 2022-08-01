import React, {useEffect} from 'react';
import {BsChevronRight} from "react-icons/bs";
import { MyInfo } from '../style';
import {useDispatch, useSelector} from "react-redux";
import {fetchDataAsync} from "../../../lib/store/modules/user";

const LoginAfter = ({onClickUserInfo}) => {
    let state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataAsync())
    },[])

    return (
        <MyInfo onClick={onClickUserInfo}>
            <div className="imgWrap"> 
            {
                state.users.file ? <img src={state.users.file} alt="" /> : <img src="/img/img-sample.gif" alt="" />
            }                     
            </div>
            <div className='infoWrap'>
                <h3>{state.users.name}</h3>
                <p>정보수정, 로그아웃, 글쓰기</p>
            </div>
            <BsChevronRight/>   
        </MyInfo>
    );
};

export default LoginAfter;