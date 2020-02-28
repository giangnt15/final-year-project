import React from 'react';
import './cart.css';
import MiniCartItem from './MiniCartItem';
import NumberFormat from 'react-number-format';

function MiniCart(props){

    const {items,cartTotalQty,cartSubTotal} = props.cart;

    return (
           <div className="block-minicart minicart__active is-visible">
        <div className="minicart-content-wrapper">
          <div className="micart__close" onClick={props.toggleCart}>
            <span>Đóng</span>
          </div>
          <div className="items-total d-flex justify-content-between">
            <span>{cartTotalQty} cuốn</span>
            <span>Tổng tiền</span>
          </div>
          <div className="total_amount text-right">
            <span><NumberFormat value={cartSubTotal} displayType={'text'}
                      suffix="đ" thousandSeparator={true} /></span>
          </div>
          <div className="mini_action checkout">
            <a className="checkout__btn">Go to Checkout</a>
          </div>
          <div className="single__items">
            <div className="miniproduct">
              {items.map(item=>(
                <MiniCartItem cartItem={item} key={item.id}/>
              ))}
            </div>
          </div>
          <div className="mini_action cart">
            <a className="cart__btn">View and edit cart</a>
          </div>
        </div>
      </div>
    )
}

export {MiniCart as default };