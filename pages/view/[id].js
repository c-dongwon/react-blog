import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Section, ViewTop, Content } from './style';
import { useRouter } from 'next/router'

const View = () => {
    const [view, setView] = useState();
    const router = useRouter(); 
    const id = router.query.id

    useEffect(() => {
        axios.get(`/api/view/${id}`)
        .then(res => setView(res.data))
    },[id])
    console.log(view)
    return (
        <Section>
            <ViewTop>
                 <h2><span>{view.category}</span>{view.title}</h2>
                 <span>2022.07.12</span>
            </ViewTop>
            <Content>
                <p>내용이들어가는곳~~~~~~~~~~~~~~~~내용이들어가는곳~~~~~~~~~~~~~~~~내용이들어가는곳~~~~~~~~~~~~~~~~</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>

                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p>
                <p>내용이들어가는곳</p><p>내용이들어가는곳</p>

            </Content>
        </Section>
    );
};

export default View;