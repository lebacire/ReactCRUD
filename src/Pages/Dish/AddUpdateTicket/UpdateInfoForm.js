import React, { useState, useEffect } from 'react';
import "antd/dist/antd.css";
// import "./TicketForm.css"
import {
    Form,
    Input,
    Tooltip,
    Icon,
    // message,
    Checkbox,
    Select,
    Row,
    Col,
    DatePicker,
    InputNumber,
    Button
} from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const InfoForm = (props) => {

    useEffect(() => {
        props.form.setFields({
            issue_description: {
                value: ''
            },
            site_impacted: {
                value: ''
            },
            affected: {
                value: 0
            },
            staffed: {
                value: 0
            },
        });

    }, []);
    const { getFieldDecorator } = props.form;

    const [formLayout, setFormLayout] = useState('vertical');

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    return (
        <Form layout={formLayout} {...formItemLayout} >
            <Form.Item
                style={{ marginBottom: '0px' }}
                label={
                    <span>
                        Update&nbsp;
                        <Tooltip title="Bried information on the update">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                    </span>
                }
            >
                {getFieldDecorator('issue_description', {
                    rules: [{ required: true, message: 'Issue Description is a required field!!', whitespace: true }],
                })(<TextArea rows={2} />)}
            </Form.Item>
            <Form.Item style={{ marginBottom: '0px' }} label="Site Impacted:">
                {getFieldDecorator('site_impacted')(<Select onChange={handleChange}>
                    <Option value="Spark">Spark</Option>
                    <Option value="CDO">CDO</Option>
                </Select>)}
            </Form.Item >
            <Row type="flex" justify="center">
                <Col span={8}>

                </Col>
                <Col span={8}>
                    <div style={{ textAlign: 'center', backgroundColor: '#decead', fontWeight: 'bold', borderRadius: '3px' }}>Affected</div>
                    <Form.Item style={{ marginBottom: '0px' }}>
                        {getFieldDecorator('affected')(<InputNumber style={{ width: '150%' }} min={0} />)}
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <div style={{ textAlign: 'center', backgroundColor: '#decead', fontWeight: 'bold', borderRadius: '3px' }}>Staffed</div>
                    <Form.Item style={{ marginBottom: '0px' }}>
                        {getFieldDecorator('staffed')(<InputNumber style={{ width: '150%' }} min={0} />)}
                    </Form.Item>
                </Col>
                <Col span={8}>
                </Col>
            </Row>
            <Form.Item style={{ marginBottom: '0px' }}>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: false,
                })(<Checkbox>Close on reply</Checkbox>)}
            </Form.Item>
        </Form >
    )
}
const WrappedTicketForm = Form.create({ name: 'ticket-form' })(InfoForm);
export default WrappedTicketForm;