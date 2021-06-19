import React from 'react';
import initialState from '../../initialState';
import Products from '../components/Products';

const Home = () => (
  <div>
    <Products products={initialState.products}>Home</Products>
  </div>
);

export default Home;
