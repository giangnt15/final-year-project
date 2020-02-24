import React from 'react';
import { TextField } from '@material-ui/core';

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
                    <div className="col-lg-9 col-12 order-1 order-lg-2" style={{border: '1px solid #D3CED2'}}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="p-t-30 p-l-40 p-r-20">
                                    <h4>Thông tin tài khoản</h4>
                                    <br/>
                                    <form className="d-flex flex-column" style={{ width: 400 }} noValidate autoComplete="off">
                                        <TextField label="Họ và tên" style={{marginBottom: 16}}
                                            variant="outlined" name="fullName" size="small" />
                                        <TextField label="Email" disabled variant="outlined"
                                            value="giangqwerty69@gmail.com" style={{marginBottom: 16}}
                                            name="email" size="small" type="email" />
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