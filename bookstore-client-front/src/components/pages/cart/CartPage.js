import React from 'react';
import { Card, Button, Empty } from 'antd';

import { connect } from 'react-redux';
import { withApollo } from '@apollo/react-hoc';
import { addSingleItemToCartAysnc } from '../../../redux/actions/cartAction';
import CartPageItem from './CartPageItem';
import NumberFormat from 'react-number-format';
import { NO_ITEM_IN_CART } from '../../../constants';

function CartPage(props) {
    const { cart } = props;
    return (
        <div className="container m-t-80 p-b-20 p-t-20" >
            <div className="row m-b-20">
                <div className="col-12 col-md-12">
                    <h6>Giỏ hàng</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <Card>
                        {cart.items&&cart.items.length?cart.items.map(item => (
                            <CartPageItem book={item} key={item.id} />
                        )):<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={NO_ITEM_IN_CART}/>}
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                    <Card>
                        <div className="d-flex m-b-20" style={{ justifyContent: 'space-between' }}><span>Tạm tính:</span>
                            <NumberFormat value={cart.cartSubTotal} displayType={'text'}
                                suffix="đ" thousandSeparator={true} /></div>
                                <hr />
                        <div className="d-flex m-t-20" style={{ justifyContent: 'space-between' }}><span>Thành tiền:</span>
                           <h5 style={{color: 'red'}}><NumberFormat value={cart.cartSubTotal} displayType={'text'}
                                suffix="đ" thousandSeparator={true} /></h5></div>
                    </Card>
                    <Button className="cart_page_checkout__btn">TIẾN HÀNH ĐẶT HÀNG</Button>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addSingleItemToCart: (item, qty) => {
            dispatch(addSingleItemToCartAysnc(ownProps.client, item, qty));
        }
    }
}

export default withApollo(connect(mapStateToProps, mapDispatchToProps)(CartPage));