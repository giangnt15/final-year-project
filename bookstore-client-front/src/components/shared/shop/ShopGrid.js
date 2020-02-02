import React from 'react';

function ShopGrid(props){

    return (
        
      <div className="page-shop-sidebar left--sidebar bg--white section-padding--lg">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
            <div className="shop__sidebar">
              <aside className="wedget__categories poroduct--cat">
                <h3 className="wedget__title">Product Categories</h3>
                <ul>
                  <li><a href="#">Biography <span>(3)</span></a></li>
                  <li><a href="#">Business <span>(4)</span></a></li>
                  <li><a href="#">Cookbooks <span>(6)</span></a></li>
                  <li><a href="#">Health &amp; Fitness <span>(7)</span></a></li>
                  <li><a href="#">History <span>(8)</span></a></li>
                  <li><a href="#">Mystery <span>(9)</span></a></li>
                  <li><a href="#">Inspiration <span>(13)</span></a></li>
                  <li><a href="#">Romance <span>(20)</span></a></li>
                  <li><a href="#">Fiction/Fantasy <span>(22)</span></a></li>
                  <li><a href="#">Self-Improvement <span>(13)</span></a></li>
                  <li><a href="#">Humor Books <span>(17)</span></a></li>
                  <li><a href="#">Harry Potter <span>(20)</span></a></li>
                  <li><a href="#">Land of Stories <span>(34)</span></a></li>
                  <li><a href="#">Kids' Music <span>(60)</span></a></li>
                  <li><a href="#">Toys &amp; Games <span>(3)</span></a></li>
                  <li><a href="#">hoodies <span>(3)</span></a></li>
                </ul>
              </aside>
              <aside className="wedget__categories pro--range">
                <h3 className="wedget__title">Filter by price</h3>
                <div className="content-shopby">
                  <div className="price_filter s-filter clear">
                    <form action="#" method="GET">
                      <div id="slider-range" />
                      <div className="slider__range--output">
                        <div className="price__output--wrap">
                          <div className="price--output">
                            <span>Price :</span><input type="text" id="amount" readOnly />
                          </div>
                          <div className="price--filter">
                            <a href="#">Filter</a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </aside>
              <aside className="wedget__categories poroduct--tag">
                <h3 className="wedget__title">Product Tags</h3>
                <ul>
                  <li><a href="#">Biography</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Cookbooks</a></li>
                  <li><a href="#">Health &amp; Fitness</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Mystery</a></li>
                  <li><a href="#">Inspiration</a></li>
                  <li><a href="#">Religion</a></li>
                  <li><a href="#">Fiction</a></li>
                  <li><a href="#">Fantasy</a></li>
                  <li><a href="#">Music</a></li>
                  <li><a href="#">Toys</a></li>
                  <li><a href="#">Hoodies</a></li>
                </ul>
              </aside>
              <aside className="wedget__categories sidebar--banner">
                <img src="images/others/banner_left.jpg" alt="banner images" />
                <div className="text">
                  <h2>new products</h2>
                  <h6>save up to <br /> <strong>40%</strong>off</h6>
                </div>
              </aside>
            </div>
          </div>
          <div className="col-lg-9 col-12 order-1 order-lg-2">
            <div className="row">
              <div className="col-lg-12">
                <div className="shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-between">
                  <div className="shop__list nav justify-content-center" role="tablist">
                    <a className="nav-item nav-link active" data-toggle="tab" href="#nav-grid" role="tab"><i className="fa fa-th" /></a>
                    <a className="nav-item nav-link" data-toggle="tab" href="#nav-list" role="tab"><i className="fa fa-list" /></a>
                  </div>
                  <p>Showing 1–12 of 40 results</p>
                  <div className="orderby__wrapper">
                    <span>Sort By</span>
                    <select className="shot__byselect">
                      <option>Default sorting</option>
                      <option>HeadPhone</option>
                      <option>Furniture</option>
                      <option>Jewellery</option>
                      <option>Handmade</option>
                      <option>Kids</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab__container">
              <div className="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">
                <div className="row">
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/1.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image" /></a>
                      <div className="hot__box">
                        <span className="hot-label">BEST SALLER</span>
                      </div>
                    </div>
                    <div className="product__content content--center">
                      <h4><a href="single-product.html">robin parrish</a></h4>
                      <ul className="prize d-flex">
                        <li>$35.00</li>
                        <li className="old_prize">$35.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/3.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image" /></a>
                      <div className="hot__box color--2">
                        <span className="hot-label">HOT</span>
                      </div>
                    </div>
                    <div className="product__content content--center">
                      <h4><a href="single-product.html">The Remainng</a></h4>
                      <ul className="prize d-flex">
                        <li>$35.00</li>
                        <li className="old_prize">$35.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/7.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/8.jpg" alt="product image" /></a>
                      <div className="hot__box">
                        <span className="hot-label">HOT</span>
                      </div>
                    </div>
                    <div className="product__content content--center">
                      <h4><a href="single-product.html">Lando</a></h4>
                      <ul className="prize d-flex">
                        <li>$35.00</li>
                        <li className="old_prize">$50.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/9.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/10.jpg" alt="product image" /></a>
                      <div className="hot__box">
                        <span className="hot-label">HOT</span>
                      </div>
                    </div>
                    <div className="product__content content--center">
                      <h4><a href="single-product.html">Doctor Wldo</a></h4>
                      <ul className="prize d-flex">
                        <li>$35.00</li>
                        <li className="old_prize">$35.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/11.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image" /></a>
                      <div className="hot__box">
                        <span className="hot-label">BEST SALER</span>
                      </div>
                    </div>
                    <div className="product__content content--center content--center">
                      <h4><a href="single-product.html">Animals Life</a></h4>
                      <ul className="prize d-flex">
                        <li>$50.00</li>
                        <li className="old_prize">$35.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/1.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/6.jpg" alt="product image" /></a>
                      <div className="hot__box">
                        <span className="hot-label">BEST SALER</span>
                      </div>
                    </div>
                    <div className="product__content content--center content--center">
                      <h4><a href="single-product.html">Olio Madu</a></h4>
                      <ul className="prize d-flex">
                        <li>$50.00</li>
                        <li className="old_prize">$35.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/3.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/8.jpg" alt="product image" /></a>
                      <div className="hot__box">
                        <span className="hot-label">BEST SALER</span>
                      </div>
                    </div>
                    <div className="product__content content--center content--center">
                      <h4><a href="single-product.html">Soad Humber</a></h4>
                      <ul className="prize d-flex">
                        <li>$50.00</li>
                        <li className="old_prize">$35.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/10.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image" /></a>
                      <div className="hot__box">
                        <span className="hot-label">BEST SALER</span>
                      </div>
                    </div>
                    <div className="product__content content--center content--center">
                      <h4><a href="single-product.html">Animals Life</a></h4>
                      <ul className="prize d-flex">
                        <li>$50.00</li>
                        <li className="old_prize">$35.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/7.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/3.jpg" alt="product image" /></a>
                      <div className="hot__box">
                        <span className="hot-label">BEST SALER</span>
                      </div>
                    </div>
                    <div className="product__content content--center content--center">
                      <h4><a href="single-product.html">Olio Madu</a></h4>
                      <ul className="prize d-flex">
                        <li>$50.00</li>
                        <li className="old_prize">$35.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/1.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/5.jpg" alt="product image" /></a>
                      <div className="hot__box">
                        <span className="hot-label">BEST SALER</span>
                      </div>
                    </div>
                    <div className="product__content content--center content--center">
                      <h4><a href="single-product.html">War Of Dragon</a></h4>
                      <ul className="prize d-flex">
                        <li>$50.00</li>
                        <li className="old_prize">$35.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/9.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image" /></a>
                      <div className="hot__box">
                        <span className="hot-label">BEST SALER</span>
                      </div>
                    </div>
                    <div className="product__content content--center content--center">
                      <h4><a href="single-product.html">New World</a></h4>
                      <ul className="prize d-flex">
                        <li>$50.00</li>
                        <li className="old_prize">$35.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html"><img src="images/books/5.jpg" alt="product image" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/books/8.jpg" alt="product image" /></a>
                      <div className="hot__box">
                        <span className="hot-label">BEST SALER</span>
                      </div>
                    </div>
                    <div className="product__content content--center content--center">
                      <h4><a href="single-product.html">Our World</a></h4>
                      <ul className="prize d-flex">
                        <li>$50.00</li>
                        <li className="old_prize">$35.00</li>
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                            <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                            <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                            <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__hover--content">
                        <ul className="rating d-flex">
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li className="on"><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                </div>
                <ul className="wn__pagination">
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#"><i className="zmdi zmdi-chevron-right" /></a></li>
                </ul>
              </div>
              <div className="shop-grid tab-pane fade" id="nav-list" role="tabpanel">
                <div className="list__view__wrapper">
                  {/* Start Single Product */}
                  <div className="list__view">
                    <div className="thumb">
                      <a className="first__img" href="single-product.html"><img src="images/product/1.jpg" alt="product images" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/product/2.jpg" alt="product images" /></a>
                    </div>
                    <div className="content">
                      <h2><a href="single-product.html">Ali Smith</a></h2>
                      <ul className="rating d-flex">
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li><i className="fa fa-star-o" /></li>
                        <li><i className="fa fa-star-o" /></li>
                      </ul>
                      <ul className="prize__box">
                        <li>$111.00</li>
                        <li className="old__prize">$220.00</li>
                      </ul>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                      <ul className="cart__action d-flex">
                        <li className="cart"><a href="cart.html">Add to cart</a></li>
                        <li className="wishlist"><a href="cart.html" /></li>
                        <li className="compare"><a href="cart.html" /></li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="list__view mt--40">
                    <div className="thumb">
                      <a className="first__img" href="single-product.html"><img src="images/product/2.jpg" alt="product images" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/product/4.jpg" alt="product images" /></a>
                    </div>
                    <div className="content">
                      <h2><a href="single-product.html">Blood In Water</a></h2>
                      <ul className="rating d-flex">
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li><i className="fa fa-star-o" /></li>
                        <li><i className="fa fa-star-o" /></li>
                      </ul>
                      <ul className="prize__box">
                        <li>$111.00</li>
                        <li className="old__prize">$220.00</li>
                      </ul>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                      <ul className="cart__action d-flex">
                        <li className="cart"><a href="cart.html">Add to cart</a></li>
                        <li className="wishlist"><a href="cart.html" /></li>
                        <li className="compare"><a href="cart.html" /></li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="list__view mt--40">
                    <div className="thumb">
                      <a className="first__img" href="single-product.html"><img src="images/product/3.jpg" alt="product images" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/product/6.jpg" alt="product images" /></a>
                    </div>
                    <div className="content">
                      <h2><a href="single-product.html">Madeness Overated</a></h2>
                      <ul className="rating d-flex">
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li><i className="fa fa-star-o" /></li>
                        <li><i className="fa fa-star-o" /></li>
                      </ul>
                      <ul className="prize__box">
                        <li>$111.00</li>
                        <li className="old__prize">$220.00</li>
                      </ul>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                      <ul className="cart__action d-flex">
                        <li className="cart"><a href="cart.html">Add to cart</a></li>
                        <li className="wishlist"><a href="cart.html" /></li>
                        <li className="compare"><a href="cart.html" /></li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="list__view mt--40">
                    <div className="thumb">
                      <a className="first__img" href="single-product.html"><img src="images/product/4.jpg" alt="product images" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/product/6.jpg" alt="product images" /></a>
                    </div>
                    <div className="content">
                      <h2><a href="single-product.html">Watching You</a></h2>
                      <ul className="rating d-flex">
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li><i className="fa fa-star-o" /></li>
                        <li><i className="fa fa-star-o" /></li>
                      </ul>
                      <ul className="prize__box">
                        <li>$111.00</li>
                        <li className="old__prize">$220.00</li>
                      </ul>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                      <ul className="cart__action d-flex">
                        <li className="cart"><a href="cart.html">Add to cart</a></li>
                        <li className="wishlist"><a href="cart.html" /></li>
                        <li className="compare"><a href="cart.html" /></li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Product */}
                  {/* Start Single Product */}
                  <div className="list__view mt--40">
                    <div className="thumb">
                      <a className="first__img" href="single-product.html"><img src="images/product/5.jpg" alt="product images" /></a>
                      <a className="second__img animation1" href="single-product.html"><img src="images/product/9.jpg" alt="product images" /></a>
                    </div>
                    <div className="content">
                      <h2><a href="single-product.html">Court Wings Run</a></h2>
                      <ul className="rating d-flex">
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li className="on"><i className="fa fa-star-o" /></li>
                        <li><i className="fa fa-star-o" /></li>
                        <li><i className="fa fa-star-o" /></li>
                      </ul>
                      <ul className="prize__box">
                        <li>$111.00</li>
                        <li className="old__prize">$220.00</li>
                      </ul>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                      <ul className="cart__action d-flex">
                        <li className="cart"><a href="cart.html">Add to cart</a></li>
                        <li className="wishlist"><a href="cart.html" /></li>
                        <li className="compare"><a href="cart.html" /></li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Product */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ShopGrid;
