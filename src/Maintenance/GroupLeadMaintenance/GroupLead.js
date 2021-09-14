import React, { useState } from "react";

import { Table, Button, Modal } from "antd";

import FormAdd from './GroupLeadForm';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];




const GroupLead = (props) => {

    const [GroupLeadModal, setGroupLeadModal] = useState(false);

    const [dataSource, setDataSource] = useState([
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ]);
    const addGroupLeadHandler = () => {
        setGroupLeadModal(!GroupLeadModal);
        setDataSource([
            ...dataSource,
            {
                key: '3',
                name: 'ikong',
                age: 32,
                address: '10 Downing Street',
            }

        ])
    }
    return (
        <div>
            <Button icon="plus" onClick={addGroupLeadHandler} type="primary" style={{ marginBottom: 16 }}>Add Group Leader</Button>
            <Table dataSource={dataSource} columns={columns} />
            <Modal
                title="Add Group Lead"
                visible={GroupLeadModal}
                onOk={() => setGroupLeadModal(!GroupLeadModal)}
                onCancel={() => setGroupLeadModal(!GroupLeadModal)}
                okText='Save'
            >
                <FormAdd></FormAdd>
            </Modal>
        </div>

    )
}

export default GroupLead;