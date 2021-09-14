import React, { useState, useRef } from "react";

// import TicketForm from '../Components/TicketForm';
import TicketForm from '../Components/UpdateTicketForm';
import InfoForm from '../AddUpdateTicket/UpdateInfoForm';
import { Table, Timeline, Drawer, Divider, Collapse, Icon } from "antd";
import moment from 'moment';
import { Button } from "antd/lib/radio";
const { Panel } = Collapse;




var dateTime = new Date();
dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
const TicketGrid = (props) => {
    const refTicketForm = useRef(null);
    const [dataSource, setDataSource] = useState([
        {
            key: 1,
            issue: 'issue',
            issue_description: 'desc',
            business_impact: 'business_impact',

            date_created: '2019-09-29 00:00:00',
            local_it_at: '2019-09-30 00:00:00',
            date_modified: '2019-10-03 00:00:00',
            created_by: 'abel.go',
            modified_by: 'abel.go',

            bridge_number: 10,
            site_impacted: 'Spark',
            affected: 20,
            staffed: 50,

        },
        {
            key: 2,
            issue: 'issue 1',
            issue_description: 'desc 1',
            business_impact: 'business_impact 1',
            date_created: '2019-09-29 00:00:00',
            local_it_at: '2019-09-30 00:00:00',
            date_modified: '2019-10-03 00:00:00',
            created_by: 'abel.go',
            modified_by: 'abel.go',
            bridge_number: 11,
            site_impacted: 'Spark',
            affected: 0,
            staffed: 50,

        },
    ]);
    const [drawerUpdate, setDrawerUpdate] = useState(false)
    const showDrawer = () => {
        setDrawerUpdate(true)
    };

    const onClose = () => {
        setDrawerUpdate(false)
    };
    const columns = [
        {
            title: 'Id',
            dataIndex: 'key',
            key: 'key',
        },
        // {
        //     title: 'Description',
        //     dataIndex: 'issue_description',
        //     key: 'issue_description',
        // },
        // {
        //     title: 'Business Impact',
        //     dataIndex: 'business_impact',
        //     key: 'business_impact',
        // },
        {
            title: 'Open On',
            dataIndex: 'date_created',
            key: 'date_created',
        },
        {
            title: 'Issue',
            dataIndex: 'issue',
            key: 'issue',
        },

        {
            title: 'Opened By',
            dataIndex: 'created_by',
            key: 'created_by',
        },
        {
            title: 'Last Update',
            dataIndex: 'date_modified',
            key: 'date_modified',
        },
        {
            title: 'Last Update By',
            dataIndex: 'modified_by',
            key: 'modified_by',
        },
        // {
        //     title: 'Local IT involved At',
        //     dataIndex: 'local_it_at',
        //     key: 'local_it_at',
        // },
        // {
        //     title: 'Bridge Number',
        //     dataIndex: 'bridge_number',
        //     key: 'bridge_number',
        // },
        // {
        //     title: 'Site Impacted',
        //     dataIndex: 'site_impacted',
        //     key: 'site_impacted',
        // },

        // {
        //     title: 'Affected',
        //     dataIndex: 'affected',
        //     skey: 'affected',
        // },
        // {
        //     title: 'Staffed',
        //     dataIndex: 'staffed',
        //     key: 'staffed',
        // },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, record) => <a onClick={() => drawerHandler(record)}>View / Update</a>,
        },
    ];

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
    return (
        <div>
            <Table
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            //console.log(record, rowIndex)
                        }, // click row
                        onDoubleClick: event => { }, // double click row
                        onContextMenu: event => { }, // right button click row
                        onMouseEnter: event => { }, // mouse enter row
                        onMouseLeave: event => { }, // mouse leave row
                    };
                }}
                bordered
                dataSource={dataSource}
                columns={columns}
            />
            <Drawer
                title="Update Ticket"
                placement="right"
                width={720}
                closable={false}
                onClose={onClose}
                visible={drawerUpdate}
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
        </div >

    )
}

export default TicketGrid;