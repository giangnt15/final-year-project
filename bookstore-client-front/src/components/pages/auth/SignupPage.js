import React from 'react';
import {NavLink} from 'react-router-dom';
import './main.css';
import './util.css';

function SignupPage(props){

    return(<div>
        <div className="limiter">
          <div className="container-login100" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80")'}}>
            <div className="wrap-login100 p-l-70 p-r-70 p-t-50 p-b-33">
              <div className="d-flex justify-content-center p-b-20">
                  <NavLink to="/"><img src="/images/logo/logo.png" height={50}/></NavLink> 
                  </div>
              <form className="login100-form validate-form flex-sb flex-w">
                <span className="login100-form-title p-b-20">
                  Đăng ký
                </span>
                <div className="p-t-20 p-b-9">
                  <span className="txt1">
                    Email
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Username is required">
                  <input className="input100" type="email" name="email" />
                  <span className="focus-input100" />
                </div>
                <div className="p-t-20 p-b-9">
                  <span className="txt1">
                    Tên người dùng
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Username is required">
                  <input className="input100" type="text" name="username" />
                  <span className="focus-input100" />
                </div>
                <div className="p-t-13 p-b-9">
                  <span className="txt1">
                    Mật khẩu
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" />
                  <span className="focus-input100" />
                </div>
                <div className="p-t-13 p-b-9">
                  <span className="txt1">
                    Xác nhận khẩu
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="passConfirmation" />
                  <span className="focus-input100" />
                </div>
                <div className="container-login100-form-btn m-t-17">
                  <button className="login100-form-btn">
                    Đăng ký
                  </button>
                </div> 
                <div className="w-full text-center p-t-55">
                  <span className="txt2 p-r-4">
                    Đã có tài khoản?
                  </span>
                  <NavLink to="/auth/login" className="txt2 bo1">
                    Đăng nhập
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>)

}

export default SignupPage;