import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Footer.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <p className="Footer-title">PlatziConf Merch</p>
      <p className="Footer-copy">Todos los derechos reservados</p>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
