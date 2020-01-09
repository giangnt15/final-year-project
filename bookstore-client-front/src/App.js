import React, { Fragment } from 'react';
import Header from './components/shared/headers/Header';
import './App.css';
import './components/shared/headers/headers.css';
import './css/style.css';
import 'antd/dist/antd.css';
import {Carousel} from 'antd';
import MainSlider from './components/shared/slider/MainSlider';
import SearchBox from './components/shared/search/SearchBox';
import SlickSlider from './components/shared/slider/SlickSlider';
import ProductItem from './components/products/ProductItem';
import ProductSection from './components/products/ProductSection';
import ResponsiveDialog from './components/shared/dialog/CustomDialog';

class App extends React.Component {
  render(){
  return (
    <Fragment>
    
      <Header />
      <SearchBox />
      <MainSlider />
      <ProductSection><SlickSlider >
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />

      </SlickSlider>
      </ProductSection> 
      <ResponsiveDialog />

      <ProductSection><SlickSlider >
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />

      </SlickSlider>
      </ProductSection> 
    </Fragment>
       
  );
}
}

export default App;
