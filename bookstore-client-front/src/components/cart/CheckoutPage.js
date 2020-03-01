import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import CheckoutLoginStep from './CheckoutLogin';

const { Step } = Steps;

const steps = [
    {
        title: 'Đăng nhập',
        content: <CheckoutLoginStep />,
    },
    {
        title: 'Địa chỉ giao hàng',
        content: 'Địa chỉ giao hàng',
    },
    {
        title: 'Thanh toán',
        content: 'Thanh toán',
    },
];

function CheckoutPage(props) {

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(prev => prev + 1)
    }

    const prev = () => {
        setCurrent(prev => prev - 1)
    }

    return (
        <div className="container m-t-100">
            <div className="row">
                <div className="col-12">
                    <div style={{maxWidth: '75%', margin: 'auto'}}>
                        <Steps style={{color: 'red'}} labelPlacement="vertical"  size="small" current={current}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    </div>
                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                        )}
                        {current > 0 && (
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

export default CheckoutPage;