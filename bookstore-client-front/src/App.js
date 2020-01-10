import React, { Fragment } from 'react';
import Header from './components/shared/headers/Header';
import './App.css';
import './components/shared/headers/headers.css';
import './css/style.css';
import SlickSlider from './components/shared/slider/SlickSlider';
import ProductItem from './components/products/ProductItem';
import ProductSection from './components/products/ProductSection';
import ResponsiveDialog from './components/shared/dialog/CustomDialog';
import MainSlider from './components/shared/slider/MainSlider';
import BackToTop from './components/shared/BackToTop';
import BestSellerProductItem from './components/products/BestSellerProductItem';

class App extends React.Component {
  render(){
  return (
    <Fragment>
      <div id="back-to-top-anchor"></div>
      <Header />
      <SlickSlider settings={{slidesToShow: 1, dots: false, arrows: true,slidesToScroll: 1, autoplay: true}}>
        <MainSlider />
        <MainSlider />
      </SlickSlider>
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
      <ResponsiveDialog title="Thong tin san pham" />

      <ProductSection><SlickSlider  settings={{slidesToShow: 7, centerMode: true, 
        dots: false, arrows: true,slidesToScroll: 4, autoplay: true}}>
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
        <BestSellerProductItem />
      </SlickSlider>
      </ProductSection> 
      <BackToTop />
    </Fragment>
       
  );
}
}

export default App;
