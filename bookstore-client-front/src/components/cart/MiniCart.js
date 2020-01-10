import React from 'react';
import './cart.css';

function MiniCart(props){

    return (
           <div className="block-minicart minicart__active is-visible">
        <div className="minicart-content-wrapper">
          <div className="micart__close" onClick={props.toggleCart}>
            <span>close</span>
          </div>
          <div className="items-total d-flex justify-content-between">
            <span>3 items</span>
            <span>Cart Subtotal</span>
          </div>
          <div className="total_amount text-right">
            <span>$66.00</span>
          </div>
          <div className="mini_action checkout">
            <a className="checkout__btn" href="cart.html">Go to Checkout</a>
          </div>
          <div className="single__items">
            <div className="miniproduct">
              
            </div>
          </div>
          <div className="mini_action cart">
            <a className="cart__btn" href="cart.html">View and edit cart</a>
          </div>
        </div>
      </div>
    )
}

export {MiniCart as default };