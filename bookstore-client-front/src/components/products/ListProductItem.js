import React from 'react';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';

function ListProductItem(props){
    const { id,thumbnail, basePrice, title } = props.book;
    const { width, thumbHeight } = props;
    return ( 
        <div className="list__view">
          <div className="thumb">
            <NavLink className="first__img" to={`/book/${id}`}><img src={thumbnail} alt="product images" /></NavLink>
            {/*<NavLink className="second__img animation1" to={`/book/${id}`}><img src="images/product/2.jpg" alt="product images" /></NavLink>*/}
          </div>
          <div className="content">
            <h2><NavLink to={"single-product.html"}>{title}</NavLink></h2>
            <ul className="rating d-flex">
              <li className="on"><i className="fa fa-star-o" /></li>
              <li className="on"><i className="fa fa-star-o" /></li>
              <li className="on"><i className="fa fa-star-o" /></li>
              <li className="on"><i className="fa fa-star-o" /></li>
              <li><i className="fa fa-star-o" /></li>
              <li><i className="fa fa-star-o" /></li>
            </ul>
            <ul className="prize__box">
              <li> <NumberFormat value={basePrice} displayType={'text'}
              suffix="đ" thousandSeparator={true} /> </li>
              <li className="old__prize"><NumberFormat value={basePrice} displayType={'text'}
              suffix="đ" thousandSeparator={true} /></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
            <ul className="cart__action d-flex">
              <li className="cart"><a href="cart.html">Add to cart</a></li>
              <li className="wishlist"><a href="cart.html" /></li>
              <li className="compare"><a href="cart.html" /></li>
            </ul>
          </div>
        </div>
        )
}

export default ListProductItem;