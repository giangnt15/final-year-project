import React, { Fragment, useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { message, Table, Empty, Tag } from 'antd';
import { GET_ORDERS } from '../../../api/orderApi';
import { DATE_TIME_VN_24H, DATE_VN } from '../../../constants';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import { getOrderStatusText } from '../../../utils/common';
import { NavLink } from 'react-router-dom';

const columns = [
    {
        title: <b>Mã đơn hàng</b>,
        dataIndex: 'id',
        key: 'id',
        render: text => <NavLink to={`/auth/account/order/${text}`}>{text}</NavLink>,
    },
    {
        title: <b>Ngày đặt hàng</b>,
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: <b>Sản phẩm</b>,
        dataIndex: 'items',
        key: 'items',
    },
    {
        title: <b>Tổng tiền</b>,
        dataIndex: 'grandTotal',
        key: 'grandTotal',
    },
    {
        title: <b>Trạng thái đơn hàng</b>,
        key: 'orderStatus',
        dataIndex: 'orderStatus',
        render: orderStatus => <Tag>{orderStatus}</Tag>
    }
];

function OrderList(props) {

    const [currentPage,setCurrentPage] = useState(1);

    const [getOrders,{ error, loading, data }] = useLazyQuery(GET_ORDERS, {
        onError() {
            message.error("Có lỗi xảy ra khi lấy thông tin đơn hàng, vui lòng thử lại sau.");
        },
       
    });

    useEffect(()=>{
        getOrders({
            variables: {
                skip: (currentPage-1)*10,
                first: 10,
                orderBy: 'createdAt_DESC',
                selection: `{
                    id
                    items{
                        id
                        price
                        quantity
                        item{
                            id
                            title
                            thumbnail
                        }
                    }
                    grandTotal
                    shippingAddress{
                        id
                        fullName
                        phone
                        ward{
                            id
                            name
                        }
                        district{
                            id
                            name
                        }
                        province{
                            id
                            name
                        }
                        address
                    }
                    paymentMethod{
                        id
                        name
                    }
                    shippingMethod{
                        id
                        name
                    }
                    orderStatus
                    paymentStatus
                    createdAt
                }`
            }
        })
    },[currentPage]);

    const mapDataToTable = (orders) => {
        return orders.map(item => {
            return {
                key: item.id,
                id: item.id,
                orderStatus: getOrderStatusText(item.orderStatus),
                createdAt: moment(item.createdAt).format(DATE_VN),
                grandTotal: <NumberFormat value={item.grandTotal} displayType={'text'}
                    suffix="đ" thousandSeparator={true} />,
                items: <Fragment>{item.items.map(orderItem => <div key={orderItem.id}>{orderItem.item.title}</div>)}</Fragment>
            }
        });
    }

    return (
        <div className="d-flex w-100" >
            <div className="w-100">
                <h4>Đơn hàng của tôi</h4>
                <br />
                <Table loading={loading} columns={columns} size="middle" scroll
                    onChange={(page)=>setCurrentPage(page)}
                    pagination={{
                        pageSize: 10,
                        current: currentPage,
                        total: data && data.getOrders? data.getOrders.totalCount:10
                    }}
                    dataSource={data && data.getOrders ? mapDataToTable(data.getOrders.orders) : []} locale={{
                        emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Bạn không có đơn hàng nào" />
                    }}>

                </Table>
            </div>
        </div>
    )
}

export default OrderList;