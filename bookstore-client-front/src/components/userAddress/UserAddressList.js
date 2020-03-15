import React, { Fragment, useState } from 'react';
import { Skeleton, Empty } from 'antd';
import UserAddressItem from './userAddressItem';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_ADDRESSES } from '../../api/userAddressApi';
import UserAddressDrawer from '../shared/UserAddressDrawer';

function UserAddressList(props) {

    const [drawerVisible, setDrawerVisible] = useState(false);
    const { error: errorGettingUserAddresses, refetch: refetchUserAddresses,
        loading: loadingUserAddresses, data: dataUserAddresses = {} } = useQuery(GET_USER_ADDRESSES);
    const [edittingAddress, setEdittingAddress] = useState({
        fullName: '',
        phone: '',
        address: '',
        province: '',
        district: '',
        id: '',
        ward: ''
    });
    return (
        <div className="d-flex w-100" >
            <div className="w-100">
                <h4>Địa chỉ giao hàng của tôi</h4>
                <br />
                <div className="row">
                    {loadingUserAddresses ? <Fragment>
                        <div className="col-12 col-sm-6 m-b-16">
                            <div className="card">
                                <div className="card-body">
                                    <Skeleton active />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 m-b-16">
                            <div className="card">
                                <div className="card-body">
                                    <Skeleton active />
                                </div>
                            </div>
                        </div>
                    </Fragment> : dataUserAddresses.getUserAddresses && dataUserAddresses.getUserAddresses.length ?
                            <Fragment> {dataUserAddresses.getUserAddresses.map(item => (
                                <UserAddressItem isFullWidth userAddress={item} key={item.id}
                                    setDrawerVisible={setDrawerVisible} refetchUserAddresses={refetchUserAddresses}
                                    checkingOut={false} setEdittingAddress={setEdittingAddress}
                                />
                            ))}    <div className={`col-12 m-b-16 col-sm-12`}>
                                    <div className="card" style={{
                                        borderStyle: 'dashed', cursor: 'pointer',
                                        alignItems: 'center', justifyContent: 'center'
                                    }} onClick={() => { setEdittingAddress(); setDrawerVisible(true) }}>
                                        <div className="card-body d-flex">
                                            <i className="fa fa-plus" style={{ color: "#7E7E7E", fontSize: 20 }}></i>&nbsp;
                                </div>
                                    </div>
                                </div></Fragment> : <div className="d-flex justify-content-center w-100">
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Bạn chưa có địa chỉ giao hàng nào" />
                            </div>}
                </div>
            </div>
            <UserAddressDrawer isCreating={!edittingAddress.id} edittingAddress={edittingAddress}
                drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible}
                refetchUserAddresses={refetchUserAddresses} />
        </div>
    )

}

export default UserAddressList;