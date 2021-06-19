import React from 'react';
import '../../styles/components/Layout.css';
import Footer from '../Footer';
import Header from '../Header';
// import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    {children}
    <Footer />
  </div>
);

// Layout.prototype = {
//   children: PropTypes.node,
// };

export default Layout;
