import React from 'react';
import {useParams} from "react-router-dom";

const Vacancy = () => {
    const {id} = useParams()
    return (
        <div className={'w-full flex flex-col px-32 py-16 '}>
            <h1 className="text-text-100">vacancy</h1>
        </div>
    );
};

export default Vacancy;
