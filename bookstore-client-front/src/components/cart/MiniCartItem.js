import React from 'react';

export default function MiniCartItem(props) {

    return (
        <div className="item01 d-flex mt--20">
            <div className="thumb">
                <a href="product-details.html"><img src="images/product/sm-img/3.jpg" alt="product images" /></a>
            </div>
            <div className="content">
                <h6><a href="product-details.html">Impulse Duffle</a></h6>
                <span className="prize">$40.00</span>
                <div className="product_prize d-flex justify-content-between">
                    <span className="qun">Qty: 03</span>
                    <ul className="d-flex justify-content-end">
                        <li><a href="#"><i className="zmdi zmdi-settings" /></a></li>
                        <li><a href="#"><i className="zmdi zmdi-delete" /></a></li>
                    </ul>
                </div>
            </div>
        </div>)
}