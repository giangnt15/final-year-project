import React, { Fragment } from 'react';
import Header from './components/shared/headers/Header';
import './App.css';
import './components/shared/headers/headers.css';
import './css/style.css';
import SlickSlider from './components/shared/slider/SlickSlider';
import ProductItem from './components/products/ProductItem';
import ProductSectionContainer from './containers/products/ProductSectionContainer';
import ResponsiveDialog from './components/shared/dialog/CustomDialog';
import MainSlider from './components/shared/slider/MainSlider';
import BackToTop from './components/shared/BackToTop';
import BestSellerProductItem from './components/products/BestSellerProductItem';
import Footer from './components/shared/footer/Footer';

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
      <ProductSectionContainer isFullWidth>
      </ProductSectionContainer> 
      <ResponsiveDialog title="Thong tin san pham" />

      <ProductSectionContainer isFullWidth slickSettings={{slidesToShow: 7, centerMode: true, 
        dots: false,slidesToScroll: 4, autoplay: true}}>
      </ProductSectionContainer> 
      <BackToTop />
      <Footer />
    </Fragment>
       
  );
}
}

export default App;
