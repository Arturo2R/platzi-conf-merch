import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/Header.css';

const Header = (props) => (
  <div className="Header">
    <Link to="/">
      <h1 className="Header-title">PlatziConf Merch</h1>
    </Link>
    <div className="Header-checkout">
      <Link to="/checkout">
        <i className="fas fa-shopping-basket" />
      </Link>
    </div>
  </div>
);

Header.propTypes = {};

export default Header;
