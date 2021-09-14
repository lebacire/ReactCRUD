import React, { useState, useRef } from "react";

import { Button, Modal, Tooltip, message, Spin } from "antd";
import moment from 'moment';
// import FormAdd from './AddUpdateFormModal';
// import ViewTicket from '../ViewTicket/ViewTicket'
import TicketForm from '../Components/TicketForm';

import TicketGrid from '../Components/TicketGrid';


var dateTime = new Date();
dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
const AddUpdateTicket = (props) => {

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const refTicketForm = useRef(null);
    // const [dataSource, setDataSource] = useState([]);
    const [spinLoading, setSpinLoading] = useState(false);
    // const [dataSource, setDataSource] = useState([
    //     {
    //         issue: 'issue',
    //         issue_description: 'desc',
    //         business_impact: 'business_impact',
    //         date_created: '2019-09-29 00:00:00',
    //         local_it_at: '2019-09-30 00:00:00',
    //         bridge_number: '10',
    //         site_impacted: 'Spark',
    //         affected: '20',
    //         staffed: '50',
    //     }
    // ]);
    const [dataSource, setDataSource] = useState([
        {
            key: 1,
            issue: 'issue',
            issue_description: 'desc',
            business_impact: 'business_impact',
            date_created: '2019-09-29 00:00:00',
            local_it_at: '2019-09-30 00:00:00',
            bridge_number: 10,
            site_impacted: 'Spark',
            affected: 20,
            staffed: 50,
            date_modified: '2019-10-03 00:00:00',
            created_by: 'abel.go',
            modified_by: 'abel.go',

        },
        {
            key: 2,
            issue: 'issue 1',
            issue_description: 'desc 1',
            business_impact: 'business_impact 1',
            date_created: '2019-09-29 00:00:00',
            local_it_at: '2019-09-30 00:00:00',
            bridge_number: 11,
            site_impacted: 'Spark',
            affected: 0,
            staffed: 50,
            date_modified: '2019-10-03 00:00:00',
            created_by: 'abel.go',
            modified_by: 'abel.go',

        },
    ]);
    const addTicketHandler = () => {
        setShowUpdateModal(true);
        setTimeout(() => {
            console.log(refTicketForm.current);
            dateTime = new Date();
            dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");

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
        }, 100);

    }
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

                        date_modified: values.local_it_at._i,
                        created_by: 'abel.go',
                        modified_by: 'abel.go',
                    }
                ]);
                setTimeout(() => {
                    message.success('Successfully created ticket ' + ticket_id, 5);
                    setSpinLoading(false);
                    setShowUpdateModal(false);
                }, 5000);
            }
            else {
                setSpinLoading(false);
            }

        });
    }
    const onCancelHandler = () => {
        setShowUpdateModal(false);
    }
    return (
        <div>
            <Button icon="plus" onClick={addTicketHandler} type="primary" style={{ marginBottom: 16 }}>New Ticket</Button>
            {/* <Table dataSource={dataSource} columns={columns} /> */}
            <TicketGrid dataSource={dataSource} />
            <Modal
                style={{ top: 20 }}
                title="New Ticket"
                visible={showUpdateModal}
                onOk={() => onSaveHandler()}
                onCancel={() => onCancelHandler()}
                okText='Save'
                mask='true'
            >
                <Spin size="large" spinning={spinLoading} tip="Loading...">

                    {/* <FormAdd setMode={setMode} setOkBtnClick={setOkBtnClick} showUpdateModal={showUpdateModal} mode={mode} okBtnClick={okBtnClick} dataSource={dataSource} setDataSource={setDataSource} ></FormAdd> */}
                    <TicketForm
                        ref={refTicketForm}
                        dataSource={dataSource}
                        dateTime={dateTime}
                        setDataSource={setDataSource}
                    ></TicketForm>
                </Spin>
            </Modal>


        </div>

    )
}

export default AddUpdateTicket;