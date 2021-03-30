import React from "react";
import { NavLink } from 'react-router-dom'
import logo from '../expected_logo.svg'


const NavBar = () => (
<nav className="nav">
            <div className="nav__container">
              <NavLink to="/home" className="nav__brand">
                <img src={logo} className="nav__brand-logo" alt="logo" />
              </NavLink>
              <div className="nav__right">
                <ul className="nav__item-wrapper">
                  <li className="nav__item">
                    <NavLink to="/home" className="nav__link" activeClassName="nav__link--active">
                      home
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink to="/band" className="nav__link" activeClassName="nav__link--active">
                      band
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink to="/gigs" className="nav__link" activeClassName="nav__link--active">
                      gigs
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
)

export default NavBar