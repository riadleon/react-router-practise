import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({ friend }) => {
    console.log(friend);
    const { id, name, website, email, phone } = friend
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p> {email} </p>
            <p> {phone} </p>
            <p> <Link to={`/friend/${id} `}>{website}</Link>  </p>
        </div>
    );
};

export default Friend;