import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import Checkout from '../views/Checkout';
import Home from '../views/Home';
import Information from '../views/Information';
import NotFound404 from '../views/NotFound404';
import Payment from '../views/Payment';
import Success from '../views/Success';
import AppContext from '../context/AppContext';
import useInitalState from '../hooks/useInitalState';

const App = () => {
  const initialState = useInitalState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound404} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
