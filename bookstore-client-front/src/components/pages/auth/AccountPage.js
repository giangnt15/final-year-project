import React from 'react';
import { Input, DatePicker, Radio, Button, Checkbox, Switch, Upload, Tabs } from 'antd';
import { DATE_VN } from '../../../constants';

const { TabPane } = Tabs;

function AccountPage(props) {

    return (
        <div className="p-t-120">
            <div className="container">
                <div className="row">
                    <Tabs defaultActiveKey="1" tabPosition={'top'} style={{maxHeight: 600}}>
                        {[...Array(30).keys()].map(i => (
                            <TabPane tab={`Thông tin tài khoản`} key={i} style={{padding: '0 0 50px 0'}}>
                            <div className="p-l-80 p-r-80 p-t-30">
                                    <h4>Thông tin tài khoản</h4>
                                    <br />
                                    <form className="d-flex flex-column" style={{ width: '80%' }} noValidate autoComplete="off">
                                        <div className="p-b-8"><label htmlFor="fullName">Họ và tên</label>
                                            <Input type="text" placeholder="Họ và tên" name="fullName" id="fullName" /></div>
                                        <div className="p-b-8"><label htmlFor="email">Email</label>
                                            <Input type="email" placeholder="Email" name="email" id="email" /></div>
                                        <div className="p-b-8"><label htmlFor="gender">Giới tính</label>
                                            <Radio.Group name="gender" id="gender">
                                                <Radio value={true}>Nam</Radio>
                                                <Radio value={false}>Nữ</Radio>
                                            </Radio.Group></div>
                                        <div className="p-b-8"><label htmlFor="birthdate">Ngày sinh</label>
                                            <DatePicker className="w-100" format={DATE_VN} id="birthdate" name="birthdate" /></div>
                                        <div className="p-b-8 d-flex">
                                            <Switch name="changePassword" id="changePassword" />
                                            <label htmlFor="changePassword" className="p-l-8">Đổi mật khẩu</label>
                                        </div>
                                        <Button htmlType="submit" className="w-50" type="primary">Lưu thay đổi</Button>
                                    </form>
                                </div>
                            </TabPane>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default AccountPage;