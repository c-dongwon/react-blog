import React, {useCallback, useState, useEffect} from 'react';
import { BsClipboardPlus } from "react-icons/bs";
import { Section } from './style';
import Board from '../../component/modal/Board';

const Write = () => {
    const [showBoard, setShowBoard] = useState(false);

     //게시판생성
    const onClickBoard= useCallback((e) => {
        setShowBoard(prev => !prev);
        e.stopPropagation();
    },[showBoard]);
    return (
        <Section>
            <div className='writeTop'>
                 <input type="text" placeholder='제목을 입력해주세요.'/>
                 <select>
                    <option>게시판 선택</option>
                 </select>
                 <button type='button' onClick={onClickBoard}><BsClipboardPlus/></button>
            </div>
            {
              showBoard && <Board setShowBoard={setShowBoard}/>
            }
        </Section>
    );
};

export default Write;