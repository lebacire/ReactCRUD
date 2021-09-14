import React, { useState } from "react";

import { Table } from "antd";

const columns = [
    {
        title: 'key',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'Issue',
        dataIndex: 'issue',
        key: 'issue',
    },
    {
        title: 'Description',
        dataIndex: 'issue_description',
        key: 'issue_description',
    },
    {
        title: 'Business Impact',
        dataIndex: 'business_impact',
        key: 'business_impact',
    },

    {
        title: 'Issue Started At',
        dataIndex: 'date_created',
        key: 'date_created',
    },
    {
        title: 'Local IT involved At',
        dataIndex: 'local_it_at',
        key: 'local_it_at',
    },
    {
        title: 'Bridge Number',
        dataIndex: 'bridge_number',
        key: 'bridge_number',
    },
    {
        title: 'Site Impacted',
        dataIndex: 'site_impacted',
        key: 'site_impacted',
    },

    {
        title: 'Affected',
        dataIndex: 'affected',
        skey: 'affected',
    },
    {
        title: 'Staffed',
        dataIndex: 'staffed',
        key: 'staffed',
    },

];




const ViewTicket = (props) => {
    // const [dataSource, setDataSource] = useState([
    //     {
    //         key: 1,
    //         issue: 'issue',
    //         issue_description: 'desc',
    //         business_impact: 'business_impact',
    //         date_created: '2019-09-29 00:00:00',
    //         local_it_at: '2019-09-30 00:00:00',
    //         bridge_number: 10,
    //         site_impacted: 'Spark',
    //         affected: 20,
    //         staffed: 50,

    //     },
    //     {
    //         key: 2,
    //         issue: 'issue 1',
    //         issue_description: 'desc 1',
    //         business_impact: 'business_impact 1',
    //         date_created: '2019-09-29 00:00:00',
    //         local_it_at: '2019-09-30 00:00:00',
    //         bridge_number: 11,
    //         site_impacted: 'Spark',
    //         affected: 0,
    //         staffed: 50,

    //     },
    // ]);
    return (
        <div>
            <Table bordered dataSource={props.dataSource} columns={columns} />
        </div>

    )
}

export default ViewTicket;