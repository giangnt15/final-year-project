import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import SideMenu from './components/menu/SideMenu';
import Header from './components/menu/Header';
import ProductList from './components/products/product-list/ProductList';
import ReviewList from './components/reviews/ReviewList';
import './css/util.css'
import 'antd/dist/antd.css';
import ListCommon from './components/shared/ListCommon';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import CategoryList from './components/categories/CategoryList';
import CollectionList from './components/collections/CollectionList';
import UserList from './components/users/UserList';
import ProductDetail from './components/products/ProductDetail';
import Login from './components/auth/Login';
import PrivateRoute from './components/shared/PrivateRoute';

const ProductListWrapper = ListCommon(ProductList, 'title_DESC', "Sách");
const ReviewListWrapper = ListCommon(ReviewList, 'createdAt_DESC', "Đánh giá");
const CategoryListWrapper = ListCommon(CategoryList, 'createdAt_DESC', "Thể loại");
const CollecionListWrapper = ListCommon(CollectionList, 'createdAt_DESC', "Tuyển tập");
const UserListWrapper = ListCommon(UserList, 'createdAt_DESC', "Tuyển tập");

function App() {

  const history = useHistory();
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname.indexOf('/auth/login') < 0 && <Fragment>
        <SideMenu />
        <Header />
      </Fragment>}
      <div className="content-outer">
        <Switch>
          <Route path="/catalog/books" exact render={(props) => <PrivateRoute render={() => <ProductListWrapper onClickCreate={() => history.push('/catalog/book/create')} {...props} />} />} />
          <Route path="/catalog/reviews" exact render={(props) => <PrivateRoute render={() => <ReviewListWrapper onClickCreate={() => history.push('/catalog/review/create')} {...props} />} />}/>
          <Route path="/catalog/categories" exact render={(props) => <PrivateRoute render={() => <CategoryListWrapper onClickCreate={() => history.push('/catalog/category/create')} {...props} />} />} />
          <Route path="/catalog/collections" exact render={(props) => <PrivateRoute render={() => <CollecionListWrapper onClickCreate={() => history.push('/catalog/collection/create')} {...props} />} />} />
          <Route path="/catalog/book/create" exact render={(props) => <PrivateRoute render={() => <ProductDetail isCreating {...props} />} />} />
          <Route path="/catalog/book/edit/:id" exact render={(props) => <PrivateRoute render={() => <ProductDetail isCreating={false} {...props} />} />} />
          <Route path="/users/users" exact  render={(props) => <PrivateRoute render={() => <UserListWrapper onClickCreate={() => history.push('/users/user/create')} {...props} />} />}  />
          <Route path="/auth/login" exact render={(props)=> <Login  {...props}/>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
