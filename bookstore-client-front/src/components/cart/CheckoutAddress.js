import React from 'react';
import { Button } from 'antd';
import UserAddressDrawer from '../shared/UserAddressDrawer';

function CheckoutAddress(props) {
    return (
        <div>
            <h5>Địa chỉ giao hàng</h5>
            <p className="m-t-8 font-weight-bold" style={{ color: '#000' }}>Chọn một địa chỉ giao hàng có sẵn bên dưới: </p>
            <br />
            <div className="row">
                <div className="col-12 col-sm-6 m-b-16">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="name  m-b-6">Nguyen Truong Giang </h6>
                            <p className="address fs-13" title="Liên Ninh, Thanh Trì, Xã Liên Ninh, Huyện Thanh Trì, Hà Nội">
                                Địa chỉ: Liên Ninh, Thanh Trì, Xã Liên Ninh, Huyện Thanh Trì, Hà Nội          </p>
                            <p className="address fs-13">Việt Nam</p>
                            <p className="phone fs-13">Điện thoại: 0369735088</p>
                            <p className="action">
                                <Button className="m-r-8" type="primary">
                                    Giao đến địa chỉ này
                                </Button>
                                <Button className="m-r-8" type="default">Sửa</Button>
                                <Button type="default">Xóa</Button>
                            </p>
                        </div>
                    </div>
                </div>
               
            </div>
            <p className="m-t-8 fs-12" style={{ color: '#000' }}>Bạn muốn giao hàng tới một địa chỉ khác? <a className="text-primary">Thêm địa chỉ giao hàng mới</a></p>
            <UserAddressDrawer />
        </div>
    )
}

export default CheckoutAddress;