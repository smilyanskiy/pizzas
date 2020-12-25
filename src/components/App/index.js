import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import Order from 'components/Order';
import Delivery from 'components/Delivery';
import MainProvider from 'core/providers';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const App = () => {
  return (
    <MainProvider>
      <Router>
        <Header />
          <Switch>
            <Route path="/order" component={Order} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/about" component={Main} />
            <Route exact path="/:category?" component={Main} />
          </Switch>
        <Footer />
      </Router>
    </MainProvider>
  );
}

export default App;
