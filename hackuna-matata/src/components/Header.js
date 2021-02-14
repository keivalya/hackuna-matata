import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__name">Hackuna Matata</h1>
        <ul className="header__links">
          <li>
            <Link className="header__link" to="#">
              Our Idea
            </Link>
          </li>
          <li>
            <Link className="header__link" to="#">
              The Problem
            </Link>
          </li>
          <li>
            <Link className="header__link" to="#">
              Launch App
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
