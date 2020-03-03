import React from 'react';
import { Button } from 'antd';

function UserAddressItem(props) {
    const { fullName, phone, province, district, ward, address } = props.userAddress;

    const fullAddress = `${address}, ${ward.name}, ${district.name}, ${province.name}`;
    return (
        <div className="col-12 col-sm-6 m-b-16">
            <div className="card">
                <div className="card-body">
                    <h6 className="name  m-b-6">{fullName}</h6>
                    <p className="address fs-13" title={fullAddress}>
                        Địa chỉ: {fullAddress}         </p>
                    <p className="address fs-13">Việt Nam</p>
                    <p className="phone fs-13">Điện thoại: {phone}</p>
                    <p className="action">
                        <Button className="m-r-8" type="primary">
                            Giao đến địa chỉ này
                        </Button>
                        <Button className="m-r-8" type="default">Sửa</Button>
                        <Button type="default">Xóa</Button>
                    </p>
                </div>
            </div>
        </div>)
}

export default UserAddressItem;