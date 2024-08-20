import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'; 

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to='/' className="navbar-brand">
                    <img src="DATAPRO.png" alt="Logo" className="logo" />
                </NavLink>
            </div>
            <div className={`navbar-menu ${isMenuActive ? 'active' : ''}`}>
                <ul className="navbar-list">
                <li>
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/awards" activeClassName="active">Scholarship & Awards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/examstructure" activeClassName="active">Exam Structure</NavLink>
                    </li>
                    <li>
                        <NavLink to="/samplequestion" activeClassName="active">Sample Question</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active" className='logmn'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" activeClassName="active">Register</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                {isMenuActive ? '✖' : '☰'}
            </div>
        </nav>
    );
};

export default Navbar;
