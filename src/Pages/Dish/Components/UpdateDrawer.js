import React, { useState, useEffect } from 'react';
import "antd/dist/antd.css";
// import "./TicketForm.css"
import { Table, Timeline, Drawer, Divider, Collapse, Icon } from "antd";
import TicketForm from '../Components/UpdateTicketForm';
import InfoForm from '../AddUpdateTicket/UpdateInfoForm';

const { Panel } = Collapse;

const UpdateDrawer = (props) => {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    function callback(key) {
        console.log(key);
    }
    const customPanelStyle = {
        background: '#f7f7f7',
        borderRadius: 4,
        marginBottom: 24,
        border: 0,
        overflow: 'hidden',
    };
    const drawerHandler = (record) => {
        console.log(record)
        setDrawerUpdate(true);
        setTimeout(() => {
            console.log(refTicketForm);
            refTicketForm.current.setFields({
                issue: {
                    value: record.issue
                },
                issue_description: {
                    value: record.issue_description
                },
                business_impact: {
                    value: record.business_impact
                },
                date_created: {
                    value: record.date_created
                },
                local_it_at: {
                    value: record.local_it_at
                },
                bridge_number: {
                    value: record.bridge_number
                },
                site_impacted: {
                    value: record.site_impacted
                },
                affected: {
                    value: record.affected
                },
                staffed: {
                    value: record.staffed
                },
            });
        }, 100);
    }

    <Drawer
        title="Update Ticket"
        placement="right"
        width={720}
        closable={false}
        onClose={onClose}
        visible={props.drawerUpdate}
    >
        <TicketForm
            ref={refTicketForm}
            dataSource={dataSource}
            dateTime={dateTime}
            setDataSource={setDataSource}
        ></TicketForm>
        <Collapse
            bordered={false}
            // defaultActiveKey={['1']}
            onChange={callback}
            // expandIconPosition='right'
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
            <Panel style={customPanelStyle} header="Update Information" key="1">
                <InfoForm />
                <Button>Save Update</Button>
            </Panel>
        </Collapse>
        {/* <Divider>Timeline</Divider>
                <Timeline>
                    <Timeline.Item color="red">
                        <p>Create a services site 2015-09-01</p>
                        <p>Site: Spark</p>
                        <p>Affected: 1</p>
                        <p>Staffed: 12</p>
                    </Timeline.Item>
                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="red">
                        <p>Solve initial network problems 1</p>
                        <p>Solve initial network problems 2</p>
                        <p>Solve initial network problems 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item color="gray">
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item color="gray">
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                </Timeline> */}
    </Drawer>

}

export default UpdateDrawer;