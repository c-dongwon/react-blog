import React, {useEffect, useRef, useState} from 'react';
import socketIOClient from "socket.io-client";
import { ChatBox, CloseBtn } from './style';
import { BsCameraFill, BsXLg, BsFillArrowUpCircleFill, BsFillPersonFill } from "react-icons/bs";
import useInput from '../../hook/useInput';
import { useCallback } from 'react';
import axios from "axios";

const Chat = ({setShowChat, stopPropagation, userData}) => {
    const myInfo = {
        roomName: "Test",
        userName: userData?.name,
    };

    const [currentSocket, setCurrentSocket] = useState();
    const [msgList, setMsgList] = useState([]);
    const [chatMessage, setChatMessage] = useState("");
    const [msgRecord, setMsgRecord] = useState([]);
    const chatRef = useRef(null);
    let chatList = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        currentSocket?.emit("onSend", {
            userName: userData?.name,
            msg: chatMessage,
            userId:userData?.email,
            timeStamp: new Date().toLocaleTimeString()
        });
        setChatMessage("");
    };

    const onChatMessageChange = (e) => {
        setChatMessage(e.target.value);
    };


    if (currentSocket) {
        currentSocket?.on("connect", () => {
            currentSocket.emit("join", myInfo);
        });
    }

    useEffect(() => {
        setCurrentSocket(socketIOClient("localhost:4000"));
    }, []);

    useEffect(() => {
        axios.get("/api/chatlist")
            .then(res => {
                setMsgRecord(res.data)
            })

    },[msgList])

    useEffect(() => {
        chatRef.current.scrollTo({top: chatRef.current.scrollHeight, behavior: 'smooth'})
    },[msgRecord])

    useEffect(() => {
        currentSocket?.on("onReceive", (messageItem) => {
            setMsgList((msgList) => [...msgList, messageItem]);
        });
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
            <div className='content' ref={chatRef}>
                {msgRecord.map((msg, idx) => (
                    msg.userId === userData.email ?
                    <div className="right" key={idx}>
                        <div className="chatBox">
                            <p>{msg.msg}</p>
                        </div>
                    </div>
                        :
                        <div className="left" key={idx}>
                            <div className="prfileImg">
                                <BsFillPersonFill/>
                            </div>
                            <div className="chatBox">
                                <span>{msg.userName}</span>
                                <p>{msg.msg}</p>
                            </div>
                        </div>
                ))}
            </div>
            
            <div className='bottom'>
                <input type="text" value={chatMessage} onChange={onChatMessageChange}/>
                <button type="submit" className={chatMessage ? "" : "disabled"}><BsFillArrowUpCircleFill/></button>
            </div>
            </form>
        </ChatBox>
    );
};

export default Chat;