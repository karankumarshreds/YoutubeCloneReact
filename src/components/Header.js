import React, { Component } from 'react';
import './Header.css';
import HeaderLogo from './Header.png';
class Header extends Component {

    render() {
        return (
            <div>
                <h3 className="navbar">
                    <img src={HeaderLogo}
                        className="ui image" style={{ width: "90px" }}
                        alt="Logo" />
                </h3>
            </div>
        );
    };
};


export default Header;