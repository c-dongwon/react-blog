import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Section, ViewTop, Content } from './style';
import { useRouter } from 'next/router'
import Moment from 'react-moment';

const View = () => {
    const [view, setView] = useState();
    const router = useRouter(); 
    const id = router.query.id

    useEffect(() => {
        axios.get(`/api/view/${id}`)
        .then(res => setView(res.data.data))
    },[id]);

    return (
        <Section>
            <ViewTop>
                 <h2><span>{view?.category}</span>{view?.title}</h2>
                 <Moment format="YYYY.MM.DD">
                    {view?.createdAt}
                </Moment>
            </ViewTop>
            <Content dangerouslySetInnerHTML={{ __html: view?.content}}>
            
            </Content>
        </Section>
    );
};

export default View;