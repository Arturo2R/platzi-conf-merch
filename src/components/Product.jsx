import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product, handleAddToCart }) => (
  <div className="Products-item">
    <div className="Product-item-info">
      <img src={product.image} alt={product.title} />
      <h2>
        {product.title}
        <span>1 {product.price}</span>
      </h2>
      <p>{product.description}</p>
    </div>
    <button type="button" onClick={handleAddToCart(product)}>
      Comprar
    </button>
  </div>
);

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Product;
