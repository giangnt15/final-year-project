import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Button} from 'antd';

function ActivationEmailPage(props) {

    let userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
        try {
            userInfo = JSON.parse(userInfo);
            if (userInfo.isActive||!userInfo.email) {
                return <Redirect to="/" />
            }
        } catch{
            return <Redirect to="/" />
        }
    } else {
        return <Redirect to="/" />
    }

    return (
        <div className="d-flex justify-content-center p-t-100 w-100">
            <div className="card w-50">
                <div className="card-body d-flex flex-column align-items-center">
                    <h4>Kích hoạt tài khoản</h4>
                    <br />
                    <Button>Gửi email kích hoạt</Button>
                </div>
            </div>
        </div>
    )

}

export default ActivationEmailPage;