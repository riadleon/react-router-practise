import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/home' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/friends' >Friends</Link>
                <Link to='/post' >Posts</Link>
                <Link to='/products' >products</Link>
            </nav>
            <h3>Reacting with React Router</h3>
        </div>
    );
};

export default Header;