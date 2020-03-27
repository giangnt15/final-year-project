import React from 'react';
import { Collapse } from 'antd';
import useScroll from '../../custom-hooks/useScroll';

const { Panel } = Collapse;

function DetailCommon(props) {

    const { isCreating } = props;

    const isScrolled = useScroll(62);

    return (
        <div className="content-wrapper">
            <div className={`content-header m-b-20${isScrolled ? ' sticky' : ''}`}>
                <h3>{listName}</h3>
                <div className="pull-right">
                    <Button type="primary"><SaveOutlined /> Lưu</Button>
                    <Button className="m-l-8" type="primary"><SaveOutlined /> Lưu và tiếp tục sửa</Button>
                </div>
            </div>
            <div className="content-body">
                <Collapse defaultActiveKey={['1']}>
                    <Panel header={<span><i className="fa fa-info"></i>&nbsp;Thông tin sách</span>} key="1" showArrow={false}>

                    </Panel>
                    <Panel header={<span><i className="fa fa-info"></i>&nbsp;Giá</span>} key="2" showArrow={false}>

                    </Panel>
                    <Panel header={<span><i className="fa fa-info"></i>&nbsp;Kho hàng</span>} key="3" showArrow={false}>

                    </Panel>
                    <Panel header={<span><i className="fa fa-info"></i>&nbsp;Ảnh</span>} showArrow={false}>

                    </Panel>
                </Collapse>
            </div>
        </div >

    )

}

export default DetailCommon;