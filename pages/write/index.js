import React, {useCallback, useState, useEffect} from 'react';
import { BsClipboardPlus } from "react-icons/bs";
import { Section } from './style';
import Board from '../../component/modal/Board';
import Edit from './edit';
import axios from 'axios';
import useInput from '../../hook/useInput';

const Write = () => {
    const [showBoard, setShowBoard] = useState(false);
    const [categoryList, onChangeCategoryList, setCategoryList] = useInput();

     //게시판생성
    const onClickBoard= useCallback((e) => {
        setShowBoard(prev => !prev);
        e.stopPropagation();
    },[showBoard]);

    useEffect(() => {
        axios.get("/api/board/category")
        .then(res => setCategoryList(res.data))
    },[]);
    console.log(categoryList)
    return (
        <Section>
            <div className='writeTop'>
                 <input type="text" placeholder='제목을 입력해주세요.'/>
                 <select>
                    <option>게시판 선택</option>
                     {/* {
                        categoryList.map(item =>
                            <option>{item.category}</option>
                            )
                    } */}
                 </select>
                 <button type='button' onClick={onClickBoard}><BsClipboardPlus/></button>
            </div>
            {
              showBoard && <Board setShowBoard={setShowBoard}/>
            }
            <Edit/>
            <div className='btnWrap'>
                <button type='submit'>작성</button>
            </div>
        
        </Section>
    );
};

export default Write;