import React, { useState, useEffect } from 'react';
import { Drawer, Button, Input, Form, message, Select } from 'antd';
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';
import { GET_PROVINCES, GET_DISTRICTS, GET_WARDS } from '../../api/userAddressApi';
import TextArea from 'antd/lib/input/TextArea';
const { Option } = Select;

function UserAddressDrawer(props) {

    const [inputs, setInputs] = useState({
        fullName: '',
        phone: '',
        address: '',
        province: '',
        district: '',
        ward: ''
    })



    const handleInputChanged = (e, e1, e2) => {
        console.log(e)
        // setInputs(prev=>({
        //     ...prev,
        //     []
        // }))
    }

    const { data: provinces = {}, loading: provinceLoading } = useQuery(GET_PROVINCES, {
        onError(error) {
            // message.error("")
            console.log(error)
        }
    });

    let [getDistricts, { loading: loadingDistricts, data: dataDistricts = {} }] = useLazyQuery(GET_DISTRICTS, {
        onError(error) {
            console.log(error)
        }
    })

    let [getWards, { loading: loadingWards, data: dataWards = {} }] = useLazyQuery(GET_WARDS, {
        onError(error) {
            console.log(error)
        }
    })

    useEffect(() => {
        if (inputs.province)
            getDistricts({
                variables: {
                    provinceId: inputs.province
                }
            })
        else {
            setInputs(prev => ({
                ...prev,
                district: ''
            }))
        }
    }, [inputs.province]);

    useEffect(() => {
        if (inputs.district)
            getWards({
                variables: {
                    districtId: inputs.district
                }
            })
        else {
            setInputs(prev => ({
                ...prev,
                ward: ''
            }))
        }
    }, [inputs.district]);

    const onClose = () => {
        // this.setState({
        //   visible: false,
        // });
    };

    return (
        <Drawer
            title="Thêm địa chỉ giao hàng mới"
            width={400}
            onClose={onClose}
            visible={true}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
                <div
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button
                        onClick={onClose}
                        style={{ marginRight: 8 }}
                    >
                        Cancel
            </Button>
                    <Button onClick={onClose} type="primary">
                        Submit
            </Button>
                </div>
            }
        >
            <Form layout="vertical" hideRequiredMark>

                <Form.Item
                    name="fullName"
                    label="Tên người nhận"
                    rules={[{ required: true, message: 'Tên người nhận không được để trống' }]}
                >
                    <Input placeholder="Nhập họ tên" />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[{ required: true, message: 'Số điện thoại không được để trống' }]}
                >
                    <Input placeholder="Nhập số điện thoại"
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    name="province"
                    label="Chọn tỉnh/thành phố"
                    rules={[{ required: true, message: 'Trường này không được để trống' }]}
                >
                    <Select name="province" loading={provinceLoading} value={inputs.province} onChange={(value) => {
                        setInputs(prev => ({ ...prev, province: value }))
                    }}>
                        <Option value="">Chọn tỉnh/thành phố</Option>
                        {provinces.getProvinces && provinces.getProvinces.length && provinces.getProvinces.map(item => (
                            <Option key={item.id} value={item.id}>{item.name}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="province"
                    label="Chọn quận/huyện"
                    rules={[{ required: true, message: 'Trường này không được để trống' }]}
                >
                    <Select loading={loadingDistricts} value={inputs.district} onChange={(value) => {
                        setInputs(prev => ({ ...prev, district: value }))
                    }}>
                        <Option value="">Chọn quận/huyện</Option>
                        {inputs.province && dataDistricts.getDistricts && dataDistricts.getDistricts.length && dataDistricts.getDistricts.map(item => (
                            <Option key={item.id} value={item.id}>{item.name}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="province"
                    label="Chọn phường/xã"
                    rules={[{ required: true, message: 'Trường này không được để trống' }]}
                >
                    <Select loading={loadingWards} value={inputs.ward} onChange={(value) => {
                        setInputs(prev => ({ ...prev, ward: value }))
                    }}>
                        <Option value="">Chọn phường/xã</Option>
                        {inputs.district && dataWards.getWards && dataWards.getWards.length && dataWards.getWards.map(item => (
                            <Option key={item.id} value={item.id}>{item.name}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="province"
                    label="Địa chỉ"
                    rules={[{ required: true, message: 'Trường này không được để trống' }]}
                >
                    <TextArea rows={3} placeholder="Ví dụ: Số 24, phố Bạch Mai" name="address" />
                </Form.Item>
            </Form>
        </Drawer>
    )
}

export default UserAddressDrawer;