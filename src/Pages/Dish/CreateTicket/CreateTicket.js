import React, { useState, useRef } from "react";

import { Row, Col, Button, message, Spin } from "antd";

import TicketForm from '../Components/TicketForm';
import moment from 'moment';

var dateTime = new Date();
dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
const NewTicket = (props) => {
    const [dataSource, setDataSource] = useState([]);
    const [spinLoading, setSpinLoading] = useState(false);
    const refTicketForm = useRef(null);

    const onSaveHandler = (form) => {
        setSpinLoading(true);
        refTicketForm.current.validateFields((err, values) => {
            console.log('err = ' + err);

            console.log(values);
            if (!err) {
                console.log('Received values of form: ', values);
                let ticket_id = Math.floor(Math.random() * 100)
                setDataSource([
                    ...dataSource,
                    {
                        key: ticket_id,
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
                    message.success('Successfully created ticket ' + ticket_id, 5);
                    setSpinLoading(false);
                }, 5000);
            }
            else {
                setSpinLoading(false);
            }

        });
    }
    const onResetHandler = () => {
        dateTime = new Date();
        dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
        console.log(refTicketForm.current.resetFields());

        refTicketForm.current.setFields({
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

    return (
        <div>
            <Spin size="large" spinning={spinLoading} tip="Loading...">
                <TicketForm
                    ref={refTicketForm}
                    dataSource={dataSource}
                    dateTime={dateTime}
                    setDataSource={setDataSource}
                ></TicketForm>
            </Spin>


            <Row>
                <Col span={2} offset={20}>
                    <Button disabled={spinLoading} onClick={() => onResetHandler()} style={{ width: '100%', marginRight: '5px' }} type="danger" icon="close-circle">Reset</Button>
                </Col>
                <Col span={2}>
                    <Button disabled={spinLoading} onClick={() => onSaveHandler()} style={{ width: '100%', marginLeft: '5px' }} type="primary" icon="save">Save</Button>
                </Col>
            </Row>

        </div>
    )
}

export default NewTicket;