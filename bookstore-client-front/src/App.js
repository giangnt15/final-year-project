import React, { Fragment, useState } from 'react';
import Header from './components/shared/headers/Header';
import 'antd/dist/antd.css';
import './App.css';
import './components/shared/headers/headers.css';
import BackToTop from './components/shared/BackToTop';
import Footer from './components/shared/footer/Footer';
import { Switch, Route, useHistory } from 'react-router-dom';
import ProductPage from './components/pages/products/ProductPage';
import HomePage from './components/pages/HomePage';
import NotFound404Page from './components/pages/NotFound404Page';
import ShopGridContainer from './containers/products/ShopGridContainer'
import LoginPage from './components/pages/auth/LoginPage';
import SignupPage from './components/pages/auth/SignupPage';
import './css/style.css';
import './components/pages/auth/util.css'
import AccountPage from './components/pages/auth/AccountPage';
import CartPage from './components/pages/cart/CartPage';
import CheckoutPage from './components/cart/CheckoutPage';
import PrivateRoute from './components/shared/PrivateRoute';

function App(props) {
    let history = useHistory();
    const isLoginPage = history.location.pathname.endsWith("/auth/login") || history.location.pathname.endsWith("/auth/signup") 
    return (
      <Fragment>
        <div id="back-to-top-anchor"></div>
        { !isLoginPage && <Header />}
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/home" exact component={HomePage}></Route>
          <Route path="/auth/login" exact component={LoginPage}></Route>
          <Route path="/auth/signup" exact component={SignupPage}></Route>
          <Route path="/auth/account" render={()=><PrivateRoute render={() => <AccountPage />} />}></Route>
          <Route path="/checkout/cart" exact render={()=><CartPage />}></Route>
          <Route path="/checkout" exact render={()=><PrivateRoute render={() => <CheckoutPage />} />}></Route>
          <Route path="/book/:id" component={ProductPage}></Route>
          <Route path="/books" exact render={(props) => <ShopGridContainer {...props} />}></Route>
          <Route component={NotFound404Page}></Route>
        </Switch>
        {!isLoginPage && <BackToTop />}
        {!isLoginPage && <Footer />}
      </Fragment>

    );
  }

export default App;
