import React, { useState, useEffect } from 'react';
import "antd/dist/antd.css";
import "./AddUpdateFormModal.css"
import moment from 'moment';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    // Button,
    message,
    Select,
    Row,
    Col,
    // Divider,
    AutoComplete,
    DatePicker,
    InputNumber
} from 'antd';
const { Option } = Select;
const { TextArea } = Input;
// const AutoCompleteOption = AutoComplete.Option;


const FormAddGroupLead = (props) => {
    // console.log(props)
    const [autoCompleteResult, setAutoCompleteResult] = useState(false);
    const [iconLoading, setIconLoading] = useState(false);
    let count = 1;

    useEffect(() => {
        console.log('mode = ' + props.mode)
        if (props.mode === 'Add') {
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
                    value: moment(dateTime)
                },
                local_it_at: {
                    value: moment(dateTime)
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
        }
        if (props.mode === 'Edit') {
            if (props.dataSource[0]) {
                props.form.setFields({
                    issue: {
                        value: props.dataSource[0].issue
                    },
                    issue_description: {
                        value: props.dataSource[0].issue_description
                    },
                    business_impact: {
                        value: props.dataSource[0].business_impact
                    },
                    date_created: {
                        value: moment(props.dataSource[0].date_created)
                    },
                    local_it_at: {
                        value: moment(props.dataSource[0].local_it_at)
                    },
                    bridge_number: {
                        value: props.dataSource[0].bridge_number
                    },
                    site_impacted: {
                        value: props.dataSource[0].site_impacted
                    },
                    affected: {
                        value: props.dataSource[0].affected
                    },
                    staffed: {
                        value: props.dataSource[0].staffed
                    },
                });
            }
        }
        if (props.mode === 'Reset') {
            props.form.resetFields()
        }
    }, [props.mode])

    useEffect(() => {
        console.log('okBtnClick = ' + props.okBtnClick)
        if (props.okBtnClick) {
            props.form.validateFields((err, values) => {
                console.log('err = ' + err);

                console.log(values);
                if (!err) {
                    console.log('Received values of form: ', values);
                    props.setDataSource([
                        ...props.dataSource,
                        {
                            key: Math.floor(Math.random() * 100),
                            issue: values.issue,
                            issue_description: values.issue_description,
                            business_impact: values.business_impact,
                            date_created: values.date_created._i,
                            local_it_at: values.local_it_at._i,
                            bridge_number: values.bridge_number,
                            site_impacted: values.site_impacted,
                            affected: values.affected,
                            staffed: values.staffed,
                        }
                    ]);
                    setTimeout(() => {
                        message.success('Successfully created ticket 12345!', 5);
                        props.setAddUpdateModal(false);
                        props.setOkBtnClick(false);
                        props.setMode('');
                    }, 2000);

                }
                else {
                    props.setOkBtnClick(false);
                }
                setIconLoading(false);
            });
        }
    }, [props.okBtnClick]);

    const enterIconLoading = () => {
        setIconLoading(true);
    };

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

    const onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    const onOk = (value) => {
        console.log('onOk: ', value);
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

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
                    <Form.Item >
                        {getFieldDecorator('affected')(<InputNumber style={{ width: '150%' }} min={0} />)}
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <div style={{ textAlign: 'center', backgroundColor: '#decead', fontWeight: 'bold', borderRadius: '3px' }}>Staffed</div>
                    <Form.Item >
                        {getFieldDecorator('staffed')(<InputNumber style={{ width: '150%' }} min={0} />)}
                    </Form.Item>
                </Col>
                <Col span={8}>

                </Col>
            </Row>

        </Form >
    )
}
const WrappedFormAddGroupLead = Form.create({ id: 'test', name: 'ikong' })(FormAddGroupLead);
export default WrappedFormAddGroupLead;