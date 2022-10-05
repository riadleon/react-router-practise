import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body, userId } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h3>Details about Post No : {id}</h3>
            <h3>{title}</h3>
            <p> <small> {body} </small> </p>
            <button onClick={handleNavigate}>Get The Author</button>
        </div>
    );
};

export default PostDetails;