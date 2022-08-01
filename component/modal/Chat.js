import React, {useEffect, useRef, useState} from 'react';
import socketIOClient from "socket.io-client";
import { ChatBox, CloseBtn } from './style';
import { BsCameraFill, BsXLg, BsFillArrowUpCircleFill, BsFillPersonFill } from "react-icons/bs";
import useInput from '../../hook/useInput';
import { useCallback } from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataAsync} from "../../lib/store/modules/user";

const Chat = ({setShowChat, stopPropagation}) => {
    let state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataAsync())
    },[])

    const myInfo = {
        roomName: "Test",
        userName: state.users.name,
        file:state.users.file
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
            userName: state.users.name,
            msg: chatMessage,
            userId:state.users.email,
            file:state.users.file,
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
    console.log(msgRecord)
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
                    msg.userId === state.users.email ?
                    <div className="right" key={idx}>
                        <div className="chatBox">
                            <p>{msg.msg}</p>
                        </div>
                    </div>
                        :
                        <div className="left" key={idx}>
                            <div className="prfileImg">
                                <img src={msg.file} alt=""/>
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