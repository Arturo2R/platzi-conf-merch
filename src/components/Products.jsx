import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Products.css';
import Product from './Product';

const Products = ({ products }) => (
  <div className="Products">
    <div className="Products-items">
      {products.map((productes) => (
        <Product key={productes.id} product={productes} />
      ))}
    </div>
  </div>
);

Products.defaultProps = {
  products: [],
};

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
