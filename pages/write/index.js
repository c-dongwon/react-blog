import React, {useCallback, useState, useEffect} from 'react';
import { BsClipboardPlus } from "react-icons/bs";
import { Section } from './style';
import Board from '../../component/modal/Board';
import Edit from './edit';
import axios from 'axios';
import useInput from '../../hook/useInput';

const Write = () => {
    const [showBoard, setShowBoard] = useState(false);
    const [categoryList, setCategoryList] = useState();
    const [title, onChangeTitle, setTitle] = useInput();
    const [content, setContent] = useState();
    const [selected, setSelected] = useState("");

    const onChangeContent = (value) => {
        setContent(value);
      };

    const handleSelect = useCallback((e) => {
        setSelected(e.target.value);
        console.log(selected)
    },[selected])

     //게시판생성
    const onClickBoard = useCallback((e) => {
        setShowBoard(prev => !prev);
        e.stopPropagation();
    },[showBoard]);
    
    const onSubmitWrite = useCallback((e) => {
        e.preventDefault();
        axios.post("/api/board",{
            title:title,
            category:selected,
            content:content
        })
    },[title, selected, content]);

    useEffect(() => {
        axios.get("/api/board/category")
        .then(res => setCategoryList(res.data))
    },[showBoard]);

    console.log(content)
    return (
        <Section>
            <form onSubmit={onSubmitWrite}>
                <div className='writeTop'>
                    <input type="text" placeholder='제목을 입력해주세요.' onChange={onChangeTitle} value={title || ""}/>
                    <select onChange={handleSelect} value={selected}>
                        <option>게시판 선택</option>
                        {
                            categoryList?.map(item =>
                                <option value={item.category} key={item}>{item.category}</option>
                                )
                        }
                    </select>
                    <button type='button' onClick={onClickBoard}><BsClipboardPlus/></button>
                </div>
                {
                showBoard && <Board setShowBoard={setShowBoard}/>
                }
                <Edit content={content} onChangeContent={onChangeContent}/>
                <div className='btnWrap'>
                    <button type='submit'>작성</button>
                </div>
            </form>
        </Section>
    );
};

export default Write;