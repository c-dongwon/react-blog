import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Section, ViewTop, Content } from './style';
const View = () => {
    const [view, setView] = useState();

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        let id = params.get("id");
        
        axios.get(`/api/view/${id}`)
        .then(res => setView(res))
    },[])
    return (
        <Section>
            <ViewTop>
                 <h2><span>React</span>리액트에대해 알아보자!</h2>
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