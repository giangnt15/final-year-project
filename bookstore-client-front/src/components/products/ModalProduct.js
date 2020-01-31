import React from 'react';

function ModalProduct(props){

    return( <div className="modal-product">
    {/* Start product images */}
    <div className="product-images">
      <div className="main-image images">
        <img alt="big images" src="/images/product/big-img/1.jpg" />
      </div>
    </div>
    {/* end product images */}
    <div className="product-info">
      <h1>Simple Fabric Bags</h1>
      <div className="rating__and__review">
        <ul className="rating">
          <li><span className="ti-star" /></li>
          <li><span className="ti-star" /></li>
          <li><span className="ti-star" /></li>
          <li><span className="ti-star" /></li>
          <li><span className="ti-star" /></li>
        </ul>
        <div className="review">
          <a href="#">4 customer reviews</a>
        </div>
      </div>
      <div className="price-box-3">
        <div className="s-price-box">
          <span className="new-price">$17.20</span>
          <span className="old-price">$45.00</span>
        </div>
      </div>
      <div className="quick-desc">
        Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern look.
      </div>
      <div className="select__color">
        <h2>Select color</h2>
        <ul className="color__list">
          <li className="red"><a title="Red" href="#"></a></li>
          <li className="gold"><a title="Gold" href="#"></a></li>
          <li className="orange"><a title="Orange" href="#"></a></li>
          <li className="orange"><a title="Orange" href="#"></a></li>
        </ul>
      </div>
      <div className="select__size">
        <h2>Select size</h2>
        <ul className="color__list">
          <li className="l__size"><a title="L" href="#">L</a></li>
          <li className="m__size"><a title="M" href="#">M</a></li>
          <li className="s__size"><a title="S" href="#">S</a></li>
          <li className="xl__size"><a title="XL" href="#">XL</a></li>
          <li className="xxl__size"><a title="XXL" href="#">XXL</a></li>
        </ul>
      </div>
      <div className="social-sharing">
        <div className="widget widget_socialsharing_widget">
          <h3 className="widget-title-modal">Share this product</h3>
          <ul className="social__net social__net--2 d-flex justify-content-start">
            <li className="facebook"><a href="#" className="rss social-icon"><i className="zmdi zmdi-rss" /></a></li>
            <li className="linkedin"><a href="#" className="linkedin social-icon"><i className="zmdi zmdi-linkedin" /></a></li>
            <li className="pinterest"><a href="#" className="pinterest social-icon"><i className="zmdi zmdi-pinterest" /></a></li>
            <li className="tumblr"><a href="#" className="tumblr social-icon"><i className="zmdi zmdi-tumblr" /></a></li>
          </ul>
        </div>
      </div>
      <div className="addtocart-btn">
        <a href="#">Add to cart</a>
      </div>
    </div>
  </div>);

}

export {ModalProduct as default}