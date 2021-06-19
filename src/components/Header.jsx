import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Header.css';

const Header = (props) => {
  return (
    <div className="Header">
      <h1 className="Header-title">PlatziConf Merch</h1>
      <div className="Header-checkout">Checkout</div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
