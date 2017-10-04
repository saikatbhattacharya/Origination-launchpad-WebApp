import React from 'react';
import mrcooper from '../images/mrcooper.png';

const Header = () => {
    return (
        <header className="card-panel header">
            <a href="/" tabIndex="-1" ><img alt="logo" className="logo" src={mrcooper} tabIndex="-1" /></a>
            <span className="slash"> \ </span>
            <span className="headerText">Launch Pad</span>
        </header>
    );
};


export default Header;