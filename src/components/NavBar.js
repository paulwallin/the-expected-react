import React from "react";
import logo from './expected_logo.svg'
import { Link } from 'react-router-dom';

const navBar = () => {    
      return (
        <nav className="nav">
          <div className="nav__container">
            <Link to="/" className="nav__brand">
                <img src={logo} className="app-logo" alt="logo" />
            </Link>

            <div className="nav__right">
              <ul className="nav__item-wrapper">
                <li className="nav__item">
                  <Link className="nav__link" to="/path1">Link 1</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }

export default navBar 