import React, { useContext } from "react";
import { Layout, Row, Col, Avatar, Menu, Dropdown } from "antd";
import { AuthContext } from '../Pages/Login/auth-context';
const { Header } = Layout;

const TopHeader = (props) => {
    const authContext = useContext(AuthContext);
    const logoutHandler = () => {
        authContext.logout()
    }
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" onClick={() => logoutHandler()}>
                    Sign out
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <Header style={{ background: "#fff", padding: 0 }}>
            <Row>
                <Dropdown overlay={menu}>
                    <Col span={3} offset={15} style={{ float: 'right' }}>
                        <a className="ant-dropdown-link" >
                            <span style={{ fontSize: '13px', color: '#001529' }}>Hi, </span>
                            <span style={{ fontSize: '13px', color: '#001529' }}>Abel Eric </span>
                            <Avatar size="24" style={{ backgroundColor: '#87d068', margin: '0px 0px 0px 5px' }} icon="user" />
                        </a>
                    </Col>
                </Dropdown>

            </Row>
        </Header>
    )
}

export default TopHeader;