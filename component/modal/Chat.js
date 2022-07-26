import React, {useEffect, useState} from 'react';
import socketIOClient from "socket.io-client";
import { ChatBox, CloseBtn } from './style';
import { BsCameraFill, BsXLg, BsFillArrowUpCircleFill, BsFillPersonFill } from "react-icons/bs";
import useInput from '../../hook/useInput';
import { useCallback } from 'react';

const Chat = ({setShowChat, stopPropagation, userData}) => {
    const myInfo = {
        roomName: "Test",
        userName: "Test",
    };

    const [currentSocket, setCurrentSocket] = useState();
    const [msgList, setMsgList] = useState([]);
    const [chatMessage, setChatMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        currentSocket?.emit("onSend", {
            userName: "test",
            msg: chatMessage,
            timeStamp: new Date().toLocaleTimeString(),
        });
        setChatMessage("");
    };

    const onChatMessageChange = (e) => {
        setChatMessage(e.target.value);
    };

    useEffect(() => {
        setCurrentSocket(socketIOClient("localhost:4000"));
    }, []);

    if (currentSocket) {
        currentSocket?.on("connect", () => {
            currentSocket.emit("join", myInfo);
        });
    }

    useEffect(() => {
        currentSocket?.on("onReceive", (messageItem) => {
            setMsgList((msgList) => [...msgList, messageItem]);
            console.log(messageItem);
        });

        currentSocket?.on("onConnect", (systemMessage) => {
            setMsgList((msgList) => [...msgList, { msg: systemMessage }]);
        });

        currentSocket?.on("onDisconnect", (systemMessage) => {
            setMsgList((msgList) => [...msgList, { msg: systemMessage }]);
        });

        return () => {
            currentSocket?.disconnect();
        };
    }, [currentSocket]);

    return (
        <ChatBox onClick={stopPropagation}>
            <form onSubmit={handleSubmit}>
            <div className='top'>
                <h2>
                    <div><BsFillPersonFill/></div>
                    <span>관리자</span>
                </h2>
                <CloseBtn type="button" onClick={() => setShowChat(false)}><BsXLg/></CloseBtn>
            </div>
            <div className='content'>
                {msgList.map((msg, idx) => (
                    <div className='left' key={idx}>
                        <div className="prfileImg">
                            <BsFillPersonFill/>
                        </div>
                        <div className="chatBox">
                            <span>{msg.userName}</span>
                            <p>{msg.msg}</p>
                        </div>
                    </div>
                ))}
                {/*<div className='left'>
                    <div className="prfileImg">
                        <BsFillPersonFill/>
                    </div>
                    <div className="chatBox">
                        <span>관리자</span>
                        <p>안녕 ㅋㅋ</p>
                    </div>
                </div>*/}
                <div className='right'>
                    <div className="chatBox">
                        <span>나</span>
                        <p>안녕 ㅋㅋ</p>
                    </div>
                    <div className="prfileImg">
                        <BsFillPersonFill/>
                    </div>
                </div>
            </div>
            
            <div className='bottom'>
                <textarea value={chatMessage} onChange={onChatMessageChange}></textarea>
                <button type="submit"><BsFillArrowUpCircleFill/></button>
            </div>
            </form>
        </ChatBox>
    );
};

export default Chat;