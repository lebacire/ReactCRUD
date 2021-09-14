import React from 'react';
import "antd/dist/antd.css";
import {
    Form,
    // Input,
    // Tooltip,
    // Icon,
    // Cascader,
    Select,
    // Row,
    // Col,
    Checkbox,
    // Button,
    // AutoComplete,
} from 'antd';
const { Option } = Select;
const FormAddGroupLead = (form) => {
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };
    return (
        <Form layout="horizontal" >
            <Form.Item label="Employee" {...formItemLayout}>
                {/* <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="username.lastname"
                /> */}
                <Select showSearch placeholder="username.lastname">
                    <Option value="red">Red</Option>
                    <Option value="green">Green</Option>
                    <Option value="blue">Blue</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Status" {...formItemLayout}>
                <Checkbox></Checkbox>
            </Form.Item>
        </Form>
    )
}

export default FormAddGroupLead;