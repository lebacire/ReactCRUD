import React, { useState, useEffect } from 'react';
import "antd/dist/antd.css";
import "./TicketForm.css"
import moment from 'moment';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    // message,
    Select,
    Row,
    Col,
    DatePicker,
    InputNumber
} from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const TicketForm = (props) => {

    useEffect(() => {
        console.log('test');
        props.form.setFields({
            issue: {
                value: ''
            },
            issue_description: {
                value: ''
            },
            business_impact: {
                value: ''
            },
            date_created: {
                value: moment(props.dateTime)
            },
            local_it_at: {
                value: moment(props.dateTime)
            },
            bridge_number: {
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

    // const onChange = (value, dateString) => {
    //     console.log('Selected Time: ', value);
    //     console.log('Formatted Selected Time: ', dateString);
    // }

    // const onOk = (value) => {
    //     console.log('onOk: ', value);
    // }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    return (
        <Form layout={formLayout} {...formItemLayout} >
            <Form.Item style={{ marginBottom: '10px' }} label="Issue">
                {getFieldDecorator('issue', {
                    rules: [{ required: true, message: 'Issue is a required field!' }],
                })(<Input allowClear />)}
            </Form.Item>
            <Form.Item
                style={{ marginBottom: '10px' }}
                label={
                    <span>
                        Issue Description&nbsp;
                <Tooltip title="Brief statement about the issue">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                    </span>
                }
            >
                {getFieldDecorator('issue_description', {
                    rules: [{ required: true, message: 'Issue Description is a required field!!', whitespace: true }],
                })(<TextArea rows={2} />)}
            </Form.Item>
            <Form.Item style={{ marginBottom: '10px' }} label="Business Impact">
                {getFieldDecorator('business_impact', {
                    rules: [{ required: true, message: 'Business Impact is a required field!!', whitespace: true }],
                })(<Input allowClear />)}
            </Form.Item>
            <Form.Item style={{ marginBottom: '10px' }} label="Issue Started At">
                <Row>
                    <Col span={16}>
                        {getFieldDecorator('date_created', config)(<DatePicker style={{ width: '100%' }} showTime placeholder="Select Time" />)}
                    </Col>
                    <Col span={8}>
                        <Select disabled defaultValue="1" onChange={handleChange}>
                            <Option value="1">PHT/MNL</Option>
                            <Option value="2">test/test</Option>
                        </Select>
                    </Col>
                </Row>

            </Form.Item>
            <Form.Item style={{ marginBottom: '10px' }} label="Local IT Involved At">
                <Row>
                    <Col span={16}>
                        {getFieldDecorator('local_it_at', config)(<DatePicker style={{ width: '100%' }} showTime placeholder="Select Time" />)}
                    </Col>
                    <Col span={8}>
                        <Select disabled defaultValue="1" onChange={handleChange}>
                            <Option value="1">PHT/MNL</Option>
                            <Option value="2">test/test</Option>
                        </Select>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item style={{ marginBottom: '10px' }} label="Bridge Number:">
                {getFieldDecorator('bridge_number')(<Input allowClear />)}
            </Form.Item>
            <Form.Item style={{ marginBottom: '0px' }} label="Site Impacted:">
                {getFieldDecorator('site_impacted')(<Select onChange={handleChange}>
                    <Option value="Spark">Spark</Option>
                    <Option value="CDO">CDO</Option>
                </Select>)}

            </Form.Item>
            <Row type="flex" justify="center">
                <Col span={8}>

                </Col>
                <Col span={8}>
                    <div style={{ textAlign: 'center', backgroundColor: '#decead', fontWeight: 'bold', borderRadius: '3px' }}>Affected</div>
                    <Form.Item style={{ marginBottom: '10px' }}>
                        {getFieldDecorator('affected')(<InputNumber style={{ width: '150%' }} min={0} />)}
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <div style={{ textAlign: 'center', backgroundColor: '#decead', fontWeight: 'bold', borderRadius: '3px' }}>Staffed</div>
                    <Form.Item style={{ marginBottom: '10px' }}>
                        {getFieldDecorator('staffed')(<InputNumber style={{ width: '150%' }} min={0} />)}
                    </Form.Item>
                </Col>
                <Col span={8}>

                </Col>
            </Row>

        </Form >
    )
}
const WrappedTicketForm = Form.create({ name: 'ticket-form' })(TicketForm);
export default WrappedTicketForm;