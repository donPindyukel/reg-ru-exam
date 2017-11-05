import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './header.styles.scss';

export class Header extends Component {
    render() {
        return (
            <header>
                <nav className='nav'>
                    <ul className='nav__list'>
                        <li className="nav__list__item">
                            <NavLink exact to='/' 
                                className='nav__list__item__link'
                                activeClassName='active'
                            >
                            Home
                            </NavLink>
                        </li>
                        <li className="nav__list__item">
                            <NavLink to='/about'
                                className='nav__list__item__link'
                                activeClassName='active'
                            >
                            About
                            </NavLink>
                        </li>
                        <li className="nav__list__item">
                            <NavLink to='/whatever' 
                                className='nav__list__item__link'
                                activeClassName='active'
                            >
                            What ever
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}