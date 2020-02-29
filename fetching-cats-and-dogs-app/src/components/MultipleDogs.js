import React from 'react';
import {useParams} from 'react-router-dom'


const MultipleDogs = () => {
    const {num} = useParams()
    return (
        <div>{num}</div>
    )
}


export default MultipleDogs;