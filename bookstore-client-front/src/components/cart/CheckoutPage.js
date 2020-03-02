import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import CheckoutLoginStep from './CheckoutLogin';
import { connect } from 'react-redux';
import isTokenValid from '../../utils/tokenValidation';
import CheckoutAddress from './CheckoutAddress';

const { Step } = Steps;

const steps = [
    {
        title: 'Đăng nhập',
        content: <CheckoutLoginStep />,
    },
    {
        title: 'Địa chỉ giao hàng',
        content: <CheckoutAddress />,
    },
    {
        title: 'Thanh toán',
        content: 'Thanh toán',
    },
];

function CheckoutPage(props) {

    const {auth} = props;

    const tokenValid = isTokenValid(auth.token);

    const [current, setCurrent] = useState(tokenValid?1:0);

    const next = () => {
        setCurrent(prev => prev + 1)
    }

    const prev = () => {
        setCurrent(prev => prev - 1)
    }

    return (
        <div className="container m-t-100" style={{padding: '20px 0'}}>
            <div className="row">
                <div className="col-12">
                    <div style={{maxWidth: '75%', margin: 'auto'}}>
                        <Steps style={{color: 'red'}} labelPlacement="vertical"  size="small" current={current}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    </div>
                    <br></br>
                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action">
                        {current > 1 && (
                            <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                    </div>
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

export default connect(mapStateToProps, null)(CheckoutPage);