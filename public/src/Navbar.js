import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';




const NavBar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Doggy</div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>
        <div className="logout"><Link to="/login">Log Out
        </Link>
        </div>
    </header>
);

export default NavBar;


