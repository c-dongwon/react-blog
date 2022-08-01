import React, {useCallback, useEffect, useState} from 'react';
import {CommentBox} from "./style";
import axios from "axios";
import useInput from "../../hook/useInput";
import {connect, useDispatch, useSelector} from "react-redux";
import {fetchDataAsync} from "../../lib/store/modules/user";
import Moment from "react-moment";

const Comment = ({id}) => {
    const [comment, onChangeComment, setComment] = useInput("");
    const [commentList, setCommentList] = useState('');
    const [refresh, setRefresh] = useState(false);
    let state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataAsync())
    }, [])

    const onSubmitComment = useCallback((e) => {
        e.preventDefault();
        if(!state.users.name){
            alert("로그인후 이용해주세요")
            return false;
        }

        axios.post(`/api/board/comment`, {
            idx: id,
            name: state.users.name,
            content: comment,
            file: state.users.file,
            email:state.users.email
        })
            .then(res => {
                setComment("");
                setRefresh(prev => !prev);
            })
    }, [comment])

    const onClickDel = useCallback((id) => {
        if(confirm("정말 삭제하시겠습니까?")){
            axios.delete(`/api/board/comment/${id}`)
                .then(res => {
                    alert("삭제되었습니다.");
                    setRefresh(prev => !prev);
                })
        }else{
            return false;
        }
    },[]);

    useEffect(() => {
        axios.get(`/api/board/comment/${id}`)
            .then(res => {
                setCommentList(res.data)
            })
    }, [refresh, id]);

    if (!commentList) return false
    return (
        <CommentBox>
            <p>
                <span>{commentList.length}</span>개의 댓글
            </p>
            <div className="commentInput">
                <form onSubmit={onSubmitComment}>
                    <textarea placeholder="댓글을 작성해주세요" onChange={onChangeComment} value={"" || comment}></textarea>
                    <button type="submit">작성</button>
                </form>

            </div>
            {commentList.length !== 0 && <ul className="commentList">
                {
                    commentList.map((item, idx) =>
                        <li key={idx}>
                            <div className="img">
                                <img src={item.file} alt=""/>
                            </div>
                            <div className="txt">
                                <h3>
                                    <span>{item.name}</span>
                                    <div>
                                        <span>
                                            <Moment format="YYYY.MM.DD">
                                                {item.createdAt}
                                            </Moment>
                                        </span>
                                        {
                                            item.email === state.users.email &&
                                            <button type="button" onClick={() => onClickDel(item.id)}>삭제</button>
                                        }
                                    </div>
                                </h3>
                                <p>
                                    {item.content}
                                </p>
                            </div>

                        </li>
                    )
                }
            </ul>}
        </CommentBox>
    );
};
const mapStateToProps = (state) => {
    return {...state};
};


export default connect(mapStateToProps)(Comment);