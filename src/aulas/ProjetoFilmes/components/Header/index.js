import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/">Filmaria</Link>
            </div>
        );
    }
}

export default Header;