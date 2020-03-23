import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideMenu from './components/menu/SideMenu';
import Header from './components/menu/Header';
import ProductList from './components/products/product-list/ProductList';
import ReviewList from './components/reviews/ReviewList';
import './css/util.css'
import 'antd/dist/antd.css';
import ListCommon from './components/shared/ListCommon';
import {Switch,Route} from 'react-router-dom';

const ProductListWrapper = ListCommon(ProductList, 'title_DESC',"Sách");
const ReviewListWrapper = ListCommon(ReviewList, 'createdAt_DESC',"Đánh giá");

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Header />
      <Switch>
        <Route path="/books" exact component={ProductListWrapper}/>
        <Route path="/reviews" exact component={ReviewListWrapper}/>
      </Switch>
    </div>
  );
}

export default App;
