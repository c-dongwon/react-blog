import React from 'react';
import { ChatBox, CloseBtn } from './style';
import { BsCameraFill, BsXLg, BsFillArrowUpCircleFill, BsFillPersonFill } from "react-icons/bs";
import useInput from '../../hook/useInput';
import { useCallback } from 'react';

const Chat = ({setShowChat, stopPropagation}) => {
    const [chat, onChangeChat, setChat] = useInput("");

    const onSiubmitChat = useCallback((e) => {
        e.preventDefalut();
    },[])
    return (
        <ChatBox onClick={stopPropagation}>
            <form onSubmit={onSiubmitChat}>
            <div className='top'>
                <h2>
                    <div><BsFillPersonFill/></div>
                    <span>관리자</span>
                </h2>
                <CloseBtn type="button" onClick={() => setShowChat(false)}><BsXLg/></CloseBtn>
            </div>
            <div className='content'>
                <div className='left'>
                    <p>안녕 ㅋㅋ</p>
                </div>
                <div className='right'>
                    <p>웅 ㅋㅋㅋ 안녕~</p>
                </div>
                <div className='left'>
                    <p>안녕 ㅋㅋ안녕 ㅋㅋ안녕 ㅋㅋ안녕 ㅋㅋ안녕 ㅋㅋ안녕 ㅋㅋ안녕 ㅋㅋ안녕 ㅋㅋ안녕 ㅋㅋ안녕 ㅋㅋ안녕 ㅋㅋ</p>
                </div>
            </div>
            
            <div className='bottom'>
                <textarea onChange={onChangeChat} value={chat}></textarea>
                <button type="submit"><BsFillArrowUpCircleFill/></button>
            </div>
            </form>
        </ChatBox>
    );
};

export default Chat;