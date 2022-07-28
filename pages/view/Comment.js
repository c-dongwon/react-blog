import React, {useCallback, useEffect, useState} from 'react';
import {CommentBox} from "./style";
import axios from "axios";
import useInput from "../../hook/useInput";
import {useRouter} from "next/router";

const Comment = ({id}) => {
    const [comment, onChangeComment, setComment] = useInput("");
    const [commentList, setCommentList] = useState('');
    const [refresh, setRefresh] = useState(false);

    const onSubmitComment = useCallback((e) => {
        e.preventDefault();
        axios.post(`/api/board/comment`,{
            idx:id,
            name:"test",
            content:comment
        })
            .then(res => {
                setComment("");
                setRefresh(prev => !prev);
            })
    },[comment])

    useEffect(() => {
        axios.get(`/api/board/comment/${id}`)
            .then(res => {
                setCommentList(res.data)
            })
    },[refresh, id])
    if(!commentList) return false
    return (
        <CommentBox>
            <p>
                <span>0</span>개의 댓글
            </p>
            <div className="commentInput">
                <form onSubmit={onSubmitComment}>
                    <textarea placeholder="댓글을 작성해주세요" onChange={onChangeComment} value={"" || comment}></textarea>
                    <button type="submit">작성</button>
                </form>

            </div>
            <ul className="commentList">
                {
                    commentList.map(item =>
                        <li>
                            <h3>
                                <span>{item.name}</span>
                                <span>{item.createdAt}</span>
                            </h3>
                            <p>
                                {item.content}
                            </p>
                        </li>
                    )
                }

            </ul>
        </CommentBox>
    );
};

export default Comment;