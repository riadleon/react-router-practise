import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home' >Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/about' >About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/friends' >Friends</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/post' >Posts</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/products' >products</NavLink>
            </nav>
            <h3>Reacting with React Router</h3>
        </div>
    );
};

export default Header;