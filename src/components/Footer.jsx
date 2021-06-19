import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Footer.css';

const Footer = (props) => {
  return (
    <footer>
      <p className="Footer-title">PlatziConf Merch</p>
      <p className="Footer-copy">Todos los izquierdos reservados</p>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
