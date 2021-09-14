import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;
let menuSelected = "1";
switch (window.location.pathname) {
    case "/":
        menuSelected = "1"
        break;
    case "/new-ticket":
        menuSelected = "1"
        break;
    case "/open-ticket":
        menuSelected = "2"
        break;
    case "/view-ticket":
        menuSelected = "3"
        break;
    default:
        break;
}
const sidebar = props => {
    const updateBreadcrumdHandler = (key) => {
        switch (key) {
            case "1":
                props.setFirstMenu("Dish")
                props.setSecondMenu("New Ticket")
                break;
            case "2":
                props.setFirstMenu("Dish")

                props.setSecondMenu("Open Tickets")
                break;
            case "3":
                props.setFirstMenu("Dish")

                props.setSecondMenu("Closed Tickets")
                break;
            default:
                break;
        }
    }
    return (
        <Sider
            // trigger={null}
            collapsible
            collapsed={props.collapsed}
            onCollapse={props.setCollapsed}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: "sticky",
                top: 0,
                left: 0
            }}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[menuSelected]}>
                <SubMenu
                    title={
                        <span>
                            <Icon type="plus-square" />
                            <span>Dish Ticket</span>
                        </span>
                    }
                >
                    <Menu.Item key="1" onClick={(event) => updateBreadcrumdHandler(event.key)}>
                        {" "}
                        <Icon type="plus" />
                        <span>Create</span>
                        <Link to="/new-ticket"></Link>

                    </Menu.Item>
                    <Menu.Item key="2" onClick={(event) => updateBreadcrumdHandler(event.key)}>
                        {" "}
                        <Icon type="folder-open" />
                        <span>Open</span>
                        <Link to="/open-ticket"></Link>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={(event) => updateBreadcrumdHandler(event.key)}>
                        {" "}
                        <Icon type="issues-close" />
                        <span>Closed</span>
                        <Link to="/view-ticket"></Link>
                    </Menu.Item>
                    <Menu.Item key="4" onClick={(event) => updateBreadcrumdHandler(event.key)}>
                        {" "}
                        <Icon type="issues-close" />
                        <span>User Maintenance</span>
                        <Link to="/userAccount"></Link>
                    </Menu.Item>
                    <Menu.Item key="5" onClick={(event) => updateBreadcrumdHandler(event.key)}>
                        {" "}
                        <Icon type="issues-close" />
                        <span>Group</span>
                        <Link to="/groupLead"></Link>
                    </Menu.Item>
                </SubMenu>
                {/* <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>Navigation One</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu> */}
            </Menu>
        </Sider >
    );
};
export default sidebar;
