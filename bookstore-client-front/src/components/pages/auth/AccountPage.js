import React, { Fragment, useState } from 'react';
import { Input, DatePicker, Radio, Button, Checkbox, Switch, Upload, Tabs } from 'antd';
import { DATE_VN } from '../../../constants';
import { connect } from 'react-redux';
import moment from 'moment';

const { TabPane } = Tabs;

function AccountPage(props) {

    const { user: userInfo = {} } = props.auth;
    const { username, email, birthdate, gender, fullName } = userInfo;
    const [showChangePassword, setShowChangePassword] = useState(false);

    const [accountInfo, setAccountInfo] = useState({
        username,
        email,
        birthdate,
        gender,
        fullName
    });

    const handleInputChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setAccountInfo(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleDateChange = (value, dateString) => {
        setAccountInfo(prev => ({
            ...prev,
            birthdate: moment(value).format("YYYY-MM-DD")
        }));
    }

    return (
        <div className="p-t-120">
            <div className="container">
                <div className="row">
                    <Tabs defaultActiveKey="accountInfo" tabPosition={'top'} style={{ width: '100%' }}>
                        <TabPane tab={`Thông tin tài khoản`} key={'accountInfo'} style={{ padding: '0 0 50px 0' }}>
                            <div className="p-l-80 p-r-80 p-t-30">
                                <h4>Thông tin tài khoản</h4>
                                <br />
                                <form className="d-flex flex-column" style={{ width: '80%' }} noValidate autoComplete="off">
                                    <div className="p-b-8"><label className="font-weight-bold" htmlFor="fullName">Họ và tên</label>
                                        <Input type="text" placeholder="Họ và tên" name="fullName" onChange={handleInputChange} value={accountInfo.fullName} id="fullName" /></div>
                                    <div className="p-b-8"><label className="font-weight-bold" htmlFor="email">Email</label>
                                        <Input type="email" placeholder="Email" disabled name="email" id="email" onChange={handleInputChange} value={accountInfo.email}/></div>
                                    <div className="p-b-8"><label className="font-weight-bold" htmlFor="username">Tên đăng nhập</label>
                                        <Input type="text" name="username" disabled id="username" onChange={handleInputChange} value={accountInfo.username}/></div>
                                    <div className="p-b-8"><label className="font-weight-bold" htmlFor="gender">Giới tính</label>
                                        <Radio.Group name="gender" id="gender" onChange={handleInputChange} value={accountInfo.gender}>
                                            <Radio value={true}>Nam</Radio>
                                            <Radio value={false}>Nữ</Radio>
                                        </Radio.Group></div>
                                    <div className="p-b-8"><label className="font-weight-bold" htmlFor="birthdate">Ngày sinh</label>
                                        <DatePicker className="w-100" onChange={handleDateChange} value={ moment(accountInfo.birthdate)} format={DATE_VN} id="birthdate" name="birthdate" /></div>
                                    <div className="p-b-8 d-flex">
                                        <Switch name="changePassword" id="changePassword" onChange={() => setShowChangePassword(prev => !prev)} />
                                        <label className="font-weight-bold" htmlFor="changePassword" className="p-l-8">Đổi mật khẩu</label>
                                    </div>
                                    {showChangePassword && <Fragment><div className="p-b-8"><label className="font-weight-bold" htmlFor="currentPassword">Mật khẩu hiện tại</label>
                                        <Input type="text" placeholder="Họ và tên" name="currentPassword" id="currentPassword" /></div>
                                        <div className="p-b-8"><label className="font-weight-bold" htmlFor="newPassword">Mật khẩu mới</label>
                                            <Input type="text" placeholder="Họ và tên" name="newPassword" id="newPassword" />
                                        </div>
                                        <div className="p-b-8"><label className="font-weight-bold" htmlFor="confirmNewPassword">Xác nhận mật khẩu mới</label>
                                            <Input type="text" placeholder="Họ và tên" name="confirmNewPassword" id="confirmNewPassword" />
                                        </div>
                                    </Fragment>}
                                    <Button htmlType="submit" className="w-50" type="primary">Lưu thay đổi</Button>
                                </form>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(AccountPage);