import React from "react";
import './header.styles.css'

const Navbar = () => (
    <nav>
        <div className="header">
            <div className="logo">
            <a class="navbar-brand" href="index.html">Group<span>37</span></a>
            </div>
            <div className="list">
                <ul id="top-menu" class="nav navbar-nav navbar-right mu-main-nav">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="#mu-restaurant-menu">MENU</a></li>
                    <li><a href="#mu-contact">CONTACT</a></li>
                    <li><a href="#mu-about-us">ABOUT US</a></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;