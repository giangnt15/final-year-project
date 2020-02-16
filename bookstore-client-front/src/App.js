import React, { Fragment } from 'react';
import Header from './components/shared/headers/Header';
import 'antd/dist/antd.css';
import './App.css';
import './components/shared/headers/headers.css';
import './css/style.css';
import BackToTop from './components/shared/BackToTop';
import Footer from './components/shared/footer/Footer';
import { Switch, Route } from 'react-router-dom';
import ProductPage from './components/pages/products/ProductPage';
import HomePage from './components/pages/HomePage';
import NotFound404Page from './components/pages/NotFound404Page';
import ShopGridContainer from './containers/products/ShopGridContainer'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div id="back-to-top-anchor"></div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/home" exact component={HomePage}></Route>
          <Route path="/book/:id" component={ProductPage}></Route>
          <Route path="/books" render={(props) => <ShopGridContainer {...props} />}></Route>
          <Route component={NotFound404Page}></Route>
        </Switch>
        <BackToTop />
        <Footer />
      </Fragment>

    );
  }
}

export default App;
