import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import '../styles/components/Products.css';
import Product from './Product';
import AppContext from '../context/AppContext';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((productes) => (
          <Product
            key={productes.id}
            product={productes}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

// Products.defaultProps = {
//   products: [{s},{s},],
// };

// Products.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default Products;
