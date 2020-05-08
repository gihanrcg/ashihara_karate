import React, { Component } from 'react';
import './HeadeStyles.css'
import logo from '../../images/uclangrad2018.png'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixed-top  navbar-expand-lg navbar-light bg-base text-white">
                <a className="navbar-brand text-white" href="/">
                    <img src={logo} width="30" height="30" alt="brand" />
                    <span className="navbar-brand mb-0 h1">KAI KAN ASHIHARA KARATE</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <a className="nav-link1" href="/#introduction">Introduction</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link1" href="/#history">History</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link1 dropdown-toggle" href="_blank" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Members
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/coaches">Coaches</a>
                                <a className="dropdown-item" href="_blank">Active Members</a>
                                <a className="dropdown-item" href="_blank">Former Members</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link1" href="/gallery">Gallery</a>
                        </li>
                      
                        <li className="nav-item dropdown">
                            <a className="nav-link1 dropdown-toggle" href="_blank" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Social Media
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/fb">FaceBook</a>
                                <a className="dropdown-item" href="https://www.instagram.com/ashihara.kaikan.sl/">Instagram</a>
                                <a className="dropdown-item" href="/yt">YouTube</a>
                            </div>
                        </li>

                    </ul>

                </div>
            </nav>
        );
    }
}

export default Header;