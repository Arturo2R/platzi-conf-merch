import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from '../views/Checkout';
import Home from '../views/Home';
import Information from '../views/Information';
import NotFound404 from '../views/NotFound404';
import Payment from '../views/Payment';
import Success from '../views/Success';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/checkout/information" component={Information} />
      <Route exact path="/checkout/payment" component={Payment} />
      <Route exact path="/checkout/success" component={Success} />
      <Route component={NotFound404} />
    </Switch>
  </BrowserRouter>
);

export default App;
