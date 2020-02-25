import React from 'react';
import { Input, DatePicker, Radio, Button, Checkbox, Switch, Upload } from 'antd';
import { DATE_VN } from '../../../constants';

function AccountPage(props) {

    return (
        <div className="p-t-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
                        <div className="shop__sidebar">
                            <aside className="wedget__categories poroduct--cat">
                                <h3 className="wedget__title">Tài khoản</h3>
                                <ul>
                                    <li><a href="#">Thông tin tài khoản</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12 order-1 order-lg-2" style={{ border: '1px solid #D3CED2' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="p-t-30 p-l-40 p-r-20">
                                    <h4>Thông tin tài khoản</h4>
                                    <br />
                                        <Upload className='avatar-uploader' style={{width: 100, height: 100}}/>
                                    <form className="d-flex flex-column" style={{ width: 500 }} noValidate autoComplete="off">
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
                                        <Button htmlType="submit" className="w-25" type="primary">Lưu thay đổi</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage;