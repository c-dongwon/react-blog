import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {SearchWrap} from "./style";
import axios from "axios";
import Link from "next/link";

const Search = () => {
    const router = useRouter()
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`/api/search/${router.query.text}`)
            .then(res => {setList(res.data)})
    },[router.query.text])

    const removeTags = (str) =>{
        return str.toString().replace(/<[^>]*>/g, "");
    };

    return (
        <SearchWrap>
            <h2><span>{router.query.text}</span> 에 대한 검색결과 <span>{list.length}</span>개</h2>
            <ul>
                {
                    list.map(item =>
                        <li>
                            <Link href={`/view/${item.id}`}>
                                <a>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>
                                        {removeTags(item.content)}
                                    </p>
                                </div>
                                </a>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </SearchWrap>
    );
};

export default Search;