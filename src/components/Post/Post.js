import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h3>{title}</h3>
            <p> <small> {body} </small> </p>


            {/* <Link to={`/post/${id}`}>Visit: {id}</Link> */}


            {/* <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link> */}


            <button onClick={handleNavigate}>Show Details</button>
        </div>
    );
};

export default Post;