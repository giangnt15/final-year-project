import React from 'react';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export default function MiniCartItem(props) {
    const {cartItem, removeItemFromCart} = props;
    const { title, id, basePrice, qty, thumbnail } = cartItem;
    return (
        <div className="item01 d-flex mt--20">
            <div className="thumb">
                <NavLink to={`/book/${id}`}><img src={thumbnail} alt="product images" /></NavLink>
            </div>
            <div className="content">
                <h6><NavLink to={`/book/${id}`} className="text-ellipsis">{title}</NavLink></h6>
                <span className="prize"><NumberFormat value={basePrice*qty} displayType={'text'}
                      suffix="đ" thousandSeparator={true} /></span>
                <div className="product_prize d-flex justify-content-between">
                    <span className="qun"><NumberFormat value={qty} displayType={'text'}
                      prefix="SL: " thousandSeparator={true} /></span>
                    <ul className="d-flex justify-content-end">
                        {/* <li><a href="#"><i className="zmdi zmdi-settings" /></a></li> */}
                        <li onClick={removeItemFromCart}><a href="#"><i className="zmdi zmdi-delete" /></a></li>
                    </ul>
                </div>
            </div>
        </div>)
}