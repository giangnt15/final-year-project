import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOK } from '../../../api/bookApi';
import { Link, NavLink, useParams } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import './product-page.css';
import BookReviewSection from '../../reivews/BookReviewSection';
import { connect } from 'react-redux';
import isTokenValid from '../../../utils/tokenValidation';
import { GET_REVIEWS_BY_BOOK } from '../../../api/reviewApi';
import { message, Rate } from 'antd';

function ProductPage(props) {
  const { showReadMore, setShowReadMore } = useState(false);
  const { auth } = props;
  const { id: bookId } = useParams()
  const isAuthenticated = isTokenValid(auth.token);
  const { loading, error, data } = useQuery(GET_BOOK, {
    onError() {
      message.error('Có lỗi xảy ra, vui lòng thử tải lại trang.')
    },
    variables: {
      id: bookId
    }
  });
  const { loading: loadingBookReviews, data: dataBookReviews,
    error: errorBookReviews, refetch: refetchBookReviews } = useQuery(GET_REVIEWS_BY_BOOK, {
      variables: {
        bookId,
        orderBy: 'createdAt_DESC'
      }
    });

  const onReadMoreClick = (tab='description') => {
    document.querySelector(`.nav-item[href="#nav-${tab}"]`).click();
    document.querySelector('.product__info__detailed').scrollIntoView({
      behavior: 'smooth'
    });
  }

  if (loading) return (
    <div>Loading...</div>
  )

  const getTotalScore = (data) => {
    if (!data) return 0;
    return data.fiveStar * 5 + data.fourStar * 4 + data.threeStar * 3
      + data.twoStar * 2 + data.oneStar * 1;
  }

  const calculateReviewScore = (data) => {
    if (!data) return 0;
    const totalScore = getTotalScore(data);
    return Math.round((totalScore / data.totalCount) * 10) / 10;
  }
  
  const avgScore = calculateReviewScore(dataBookReviews?dataBookReviews.getBookReviewsByBook:undefined);

  const { id, title, basePrice, description, thumbnail, dimensions, translator, format, isbn, publishedDate, availableCopies, pages, publisher, authors, categories } = data.getBook;
  return (<div className="maincontent bg--white pt--80 pb--55">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-12">
          <div className="wn__single__product">
            <div className="row">
              <div className="col-lg-6 col-12">
                <img src={thumbnail} alt="Book image" />
              </div>
              <div className="col-lg-6 col-12">
                <div className="product__info__main">
                  <h1>{title}</h1>
                  <div className="book-brief-info d-flex justify-content">
                    <div className="book-authors">
                      Tác giả:&nbsp;
                      {authors.map((item, index) => (
                        <Fragment key={item.id} ><NavLink to="#" className="text-primary">{item.pseudonym}</NavLink>{index !== authors.length - 1 && ','} </Fragment>
                      ))}
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div className="book-format text-primary">
                      {format === "PaperBack" ? "Bìa mềm" : format === "HardCover" ? "Bìa cứng" : ""}
                    </div>
                  </div>
                  <div className="product-reviews-summary d-flex">
                    <Rate disabled value={avgScore} style={{color: '#FF5501', fontSize: 16}}/>
                    <a onClick={()=>onReadMoreClick('review')}>(Xem {dataBookReviews?dataBookReviews.getBookReviewsByBook.totalCount:0} đánh giá)</a>
                  </div>
                  <div className="price-box">
                    <span><NumberFormat value={basePrice} displayType={'text'}
                      suffix="đ" thousandSeparator={true} /></span>
                  </div>
                  <div className="product__overview">
                    <div className="product_overview_content" dangerouslySetInnerHTML={{ __html: description }}></div>
                    <div className="fade-footer">
                      <span onClick={()=>onReadMoreClick('description')}
                        className="read-more text-primary font-weight-bold">Xem thêm</span>
                    </div>
                  </div>
                  <div className="box-tocart d-flex">
                    <span>Số lượng: </span>
                    <input id="qty" className="input-text qty" name="qty" min={1} defaultValue={1} title="Qty" type="number" />
                    <div className="addtocart__actions">
                      <button className="tocart" type="submit" title="Add to Cart">Add to Cart</button>
                    </div>
                    <div className="product-addto-links clearfix">
                      <a className="wishlist" href="#" />
                      <a className="compare" href="#" />
                    </div>
                  </div>
                  <div className="product_meta">
                    <span className="posted_in">Thể loại:&nbsp;
                      {categories.map((item, index) => (
                      <Fragment key={item.id} ><NavLink to="#">{item.name}</NavLink>{index !== categories.length - 1 && ','} </Fragment>
                    ))}
                    </span>
                  </div>
                  <div className="product-share">
                    <ul>
                      <li className="categories-title">Share :</li>
                      <li>
                        <a href="#">
                          <i className="icon-social-twitter icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-tumblr icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-facebook icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-linkedin icons" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product__info__detailed">
            <div className="pro_details_nav nav justify-content-start" role="tablist">
              <a className="nav-item nav-link active" data-toggle="tab" href="#nav-description" role="tab">Mô tả</a>
              <a className="nav-item nav-link" data-toggle="tab" href="#nav-details" role="tab">Chi tiết</a>
              <a className="nav-item nav-link" data-toggle="tab" href="#nav-review" role="tab">Đánh giá</a>

            </div>
            <div className="tab__container">
              {/* Start Single Tab Content */}
              <div className="pro__tab_label tab-pane fade show active" id="nav-description" role="tabpanel">
                <div className="description__attribute" dangerouslySetInnerHTML={{ __html: description }}>
                </div>
              </div>
              {/* End Single Tab Content */}
              {/* Start Single Tab Content */}
              <div className="pro__tab_label tab-pane fade" id="nav-details" role="tabpanel">
                <div className="description__attribute">
                  <table className="table-book-details">
                    <tbody>
                      <tr>
                        <td><b>Nhà xuất bản</b></td>
                        <td className="text-align-right"><i>{publisher.name}</i></td>
                      </tr>
                      <tr>
                        <td><b>Ngày xuất bản</b></td>
                        <td className="text-align-right"><i>{moment(publishedDate).format('DD/MM/YYYY')}</i></td>
                      </tr>
                      <tr>
                        <td><b>Kích thước</b></td>
                        <td className="text-align-right"><i>{dimensions}</i></td>
                      </tr>
                      <tr>
                        <td><b>Số trang</b></td>
                        <td className="text-align-right"><i>{pages}</i></td>
                      </tr>
                      <tr>
                        <td><b>ISBN</b></td>
                        <td className="text-align-right"><i>{isbn}</i></td>
                      </tr>
                      <tr>
                        <td><b>Dịch giả</b></td>
                        <td className="text-align-right"><i>{translator}</i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* End Single Tab Content */}
              {/* Start Single Tab Content */}
              <div className="pro__tab_label tab-pane fade" id="nav-review" role="tabpanel">
                <BookReviewSection isAuthenticated={isAuthenticated} refetchBookReviews={refetchBookReviews}
                  loading={loadingBookReviews} data={dataBookReviews} error={errorBookReviews}
                  bookId={id} bookTitle={title} avgScore={avgScore} />
              </div>
              {/* End Single Tab Content */}
            </div>
          </div>
          <div className="wn__related__product pt--80 pb--50">
            <div className="section__title text-center">
              <h2 className="title__be--2">Related Products</h2>
            </div>
            <div className="row mt--60">
              <div className="productcategory__slide--2 arrows_style owl-carousel owl-theme">
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
                {/* Start Single Product */}
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
                {/* Start Single Product */}
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
                {/* Start Single Product */}
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
                {/* Start Single Product */}
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
                {/* Start Single Product */}
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
                {/* Start Single Product */}
              </div>
            </div>
          </div>
          <div className="wn__related__product">
            <div className="section__title text-center">
              <h2 className="title__be--2">upsell products</h2>
            </div>
            <div className="row mt--60">
              <div className="productcategory__slide--2 arrows_style owl-carousel owl-theme">
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
                {/* Start Single Product */}
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
                {/* Start Single Product */}
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
                {/* Start Single Product */}
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
                {/* Start Single Product */}
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
                {/* Start Single Product */}
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
                {/* Start Single Product */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);