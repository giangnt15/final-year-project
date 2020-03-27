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
import { Switch, Route } from 'react-router-dom';
import CategoryList from './components/categories/CategoryList';
import CollectionList from './components/collections/CollectionList';
import UserList from './components/users/UserList';
import ProductDetail from './components/products/ProductDetail';

const ProductListWrapper = ListCommon(ProductList, 'title_DESC', "Sách");
const ReviewListWrapper = ListCommon(ReviewList, 'createdAt_DESC', "Đánh giá");
const CategoryListWrapper = ListCommon(CategoryList, 'createdAt_DESC', "Thể loại");
const CollecionListWrapper = ListCommon(CollectionList, 'createdAt_DESC', "Tuyển tập");
const UserListWrapper = ListCommon(UserList, 'createdAt_DESC', "Tuyển tập");

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Header />
      <div className="content-outer">
        <Switch>
          <Route path="/catalog/books" exact component={ProductListWrapper} />
          <Route path="/catalog/reviews" exact component={ReviewListWrapper} />
          <Route path="/catalog/categories" exact component={CategoryListWrapper} />
          <Route path="/catalog/collections" exact component={CollecionListWrapper} />
          <Route path="/catalog/book/create" exact render={(props)=><ProductDetail isCreating {...props} />} />
          <Route path="/users/users" exact component={UserListWrapper} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
