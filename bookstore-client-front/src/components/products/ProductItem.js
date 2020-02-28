import React, { Fragment } from 'react';
import './products.css';
import { NavLink, useHistory } from 'react-router-dom';
import { Popover } from 'antd';
import { FILTER_TYPE_AUTHOR, RESET_FILTERS } from '../../constants';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/actions/filtersActions';
import { addSingleItemToCart } from '../../redux/actions/cartAction';

function ProductItem(props) {
  const { id, thumbnail, basePrice, title, authors, description } = props.book;
  const { width, thumbHeight, changeFilter,addSingleItemToCart } = props;
  const history = useHistory();
  const productDialog = (<div id="express-buy-dialog" className="express-buy-l" >
    <div className="loading" style={{}} />
    <div className="content" id={105165} ng-show="productItem">
      <div className="t-view ng-binding">
        {title}
      </div>
      <div className="au-view">
        {/* ngRepeat: item in productItem.Authors */}
        {authors.map((item, index) => (
          <Fragment key={item.id} ><a onClick={() => {
            changeFilter(RESET_FILTERS);
            changeFilter(FILTER_TYPE_AUTHOR, item.id);
            history.push('/books');
          }}>{item.pseudonym}</a>{index !== authors.length - 1 && ','} </Fragment>
        ))}
        {/* <a href="/tac-gia/chu-viet-nga-auth43519/p1" ng-repeat="item in productItem.Authors" className="ng-binding ng-scope">{}</a>end ngRepeat: item in productItem.Authors */}
      </div>
      <div className="des-view ng-binding">
        <div className="product__info__main">
          <div className="product__overview">
            <div className="product_overview_content" style={{ height: 200 }} dangerouslySetInnerHTML={{ __html: description }}></div>
            <div className="fade-footer"><NavLink to={`/book/${id}`} className="read-more text-primary font-weight-bold">Xem thêm</NavLink></div></div>
        </div>
      </div>
      <div className="p-view">
        <span className="real-price ng-binding">67,000₫</span> &nbsp;&nbsp;
      <span className="price ng-binding" ng-show="productItem.DiscountPercent>0">79,000₫</span>
        <div className="discount-percent" ng-show="productItem.DiscountPercent>0">
          <label> Giảm giá </label>
          <span className="ng-binding">16 %</span>
        </div>
        <div className="clearfix" />
      </div>
      {/* <div className="gift-view ng-hide" ng-show="productItem.HasGift">
      <div className="l">
        <i className="fa fa-2x fa-gift" />
      </div>
      <div className="r ng-binding">
      </div>
      <div className="clearfix" />
    </div> */}
      <div className="vloader express-loading" style={{ display: 'none' }} />
      <form className="ng-pristine ng-valid" onSubmit={(e) => {
        e.preventDefault();
        addSingleItemToCart(props.book,1)
      }} >
        <input type="submit" className="btn-buy btn btn-bb add-to-cart" value="THÊM VÀO GIỎ HÀNG" />
        {/* <div className="pre-box ng-hide" ng-show="productItem.IsNotPublished && productItem.QuantityRemain==null && !productItem.IsOutOff">
        <small className="ng-binding">Sách này sắp phát hành </small>
        <br />
        <input type="submit" className="btn-pre btn btn-primary buy-now" defaultValue="Đặt hàng trước" />
      </div> */}
        {/* <div className="request-box ng-hide" ng-show="productItem.IsOutOff ">
        <small>Hàng này không còn </small>
        <br />
        <a className="btn btn-request btn-danger">
          <i className="fa fa-bullhorn" /> Báo tôi khi có hàng
        </a>
      </div> */}
      </form>
      <form action="/BookBuy/AddToFavorite" data-ajax-begin="AddToFavBegin" data-ajax-success="AddToFavSuccess" data-ajax="true" method="post" className="ng-pristine ng-valid">
        <input type="hidden" name="productid" className="productid" defaultValue={105165} />
        <a className="btn btn-default btn-fav">
          <i className="fa fa-heart" />
          Thêm vào yêu thích
      </a>
      </form>
    </div>
  </div>)
  return (
    <Popover content={productDialog} placement="left"> <div className="product product__style--3" style={{ width }}>
      <div className="col-12">
        {/* <div className="product__thumb" style={{height: 380}}> */}
        <div className="product__thumb" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: thumbHeight }}>
          <NavLink className="first__img" to={`/book/${id}`}><img src={thumbnail} alt="product image" /></NavLink>
          {/* <a className="second__img animation1" href="single-product.html"><img src={thumbnail} alt="product image" /></a> */}
          <div className="hot__box">
            <span className="hot-label">BEST SALLER</span>
          </div>
        </div>
        <div className="product__content content--center">
          <h4><NavLink to={`/book/${id}`}>{title}</NavLink></h4>
          <ul className="prize d-flex">
            <li>${basePrice}</li>
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
    </div></Popover>)
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: (type, value) => {
      dispatch(changeFilter(type, value));
    },
    addSingleItemToCart: (item, qty) => {
      dispatch(addSingleItemToCart(item, qty));
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductItem);