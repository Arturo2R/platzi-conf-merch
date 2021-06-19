import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product }) => (
  <div className="Products-item">
    <div className="Product-item-info">
      <img src={product.image} alt={product.title} />
      <h2>
        {product.title}
        <span>1 {product.price}</span>
      </h2>
      <p>{product.description}</p>
    </div>
    <button type="button">Comprar</button>
  </div>
);

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
