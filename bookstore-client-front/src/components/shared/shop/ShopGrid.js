import React, { useEffect, useState } from 'react';
import ProductItem from '../../products/ProductItem';
import Pagination from '../pagination/Pagination';

function ShopGrid(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    props.getBooks({
      orderBy: "title_DESC",
      selection: `{
          id
          title
          basePrice
          description
          thumbnail
          images
          dimensions
          translator
          format
          isbn
          publishedDate
          availableCopies
          pages
          publisher{
            id
            name
          }
          authors{
            id
            pseudonym
          }
          categories{
            id
            name
          }
        }`,
      skip: (currentPage - 1) * 9,
      first: 9
    });
  }, [currentPage])

  const { books } = props;
  const renderProducts = () => {
    const listWrapper = document.querySelector(".shop__list__wrapper");
    if (listWrapper) {
      listWrapper.scrollIntoView();
    }
    return books.books.map((book, index) => {
      return (
        <div key={index}><ProductItem width={300} thumbHeight={360} book={book} /></div>
      )
    });
  }

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
                  <p>Hiển thị {(currentPage - 1) * 9 + 1} – {(currentPage - 1) * 9 + 9 >
                    books.totalCount ? books.totalCount : (currentPage-1) * 9 + 9} trên {books.totalCount} kết quả</p>
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
                  {renderProducts()}
                </div>
                <Pagination page={currentPage} goToPage={goToPage}
                  totalCount={books.totalCount} itemsPerPage={9} />
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
