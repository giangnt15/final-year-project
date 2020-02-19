import React from 'react';
import './main.css';
import './util.css';

function LoginPage(props){

    return(<div>
        <div className="limiter">
          <div className="container-login100" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80")'}}>
            <div className="wrap-login100 p-l-70 p-r-70 p-t-50 p-b-33">
              <form className="login100-form validate-form flex-sb flex-w">
                <span className="login100-form-title p-b-53">
                  Sign In With
                </span>
                <a href="#" className="btn-face m-b-20">
                  <i className="fa fa-facebook-official" />
                  Facebook
                </a>
                <a href="#" className="btn-google m-b-20">
                  <img src="/images/icon-google.png" alt="GOOGLE" />
                  Google
                </a>
                <div className="p-t-31 p-b-9">
                  <span className="txt1">
                    Username
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Username is required">
                  <input className="input100" type="text" name="username" />
                  <span className="focus-input100" />
                </div>
                <div className="p-t-13 p-b-9">
                  <span className="txt1">
                    Password
                  </span>
                  <a href="#" className="txt2 bo1 m-l-5">
                    Forgot?
                  </a>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" />
                  <span className="focus-input100" />
                </div>
                <div className="container-login100-form-btn m-t-17">
                  <button className="login100-form-btn">
                    Sign In
                  </button>
                </div>
                <div className="w-full text-center p-t-55">
                  <span className="txt2">
                    Not a member?
                  </span>
                  <a href="#" className="txt2 bo1">
                    Sign up now
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>)

}

export default LoginPage;