import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "../../App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Sidebar from "../../Layout/Sidebar";
import TopLayout from "../../Layout/TopLayout";
import BreadcrumbMenu from "../../Layout/BreadcrumbMenu";

import AddUpdateTicket from '../../Pages/Dish/AddUpdateTicket/AddUpdateTicket'
import CreateTicket from '../../Pages/Dish/CreateTicket/CreateTicket'
import OpenTicket from '../../Pages/Dish/OpenTicket/OpenTicket'
import UserMaintenance from '../../Maintenance/UserMaintenance/UserMaintenance'
import GroupLeadMaintenance from '../../Maintenance/GroupLeadMaintenance/GroupLead'
const { Content, Footer } = Layout;


const Mainpage = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [firstMenu, setFirstMenu] = useState();
    const [secondMenu, setSecondMenu] = useState();

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar setCollapsed={setCollapsed} collapsed={collapsed} setSecondMenu={setSecondMenu} setFirstMenu={setFirstMenu} />
            <Layout>
                <TopLayout collapsed={collapsed} setCollapsed={setCollapsed} />
                <BreadcrumbMenu firstMenu={firstMenu} secondMenu={secondMenu} />
                <Content className="content_app">


                    <Switch>
                        <Route path="/add-update-ticket" component={AddUpdateTicket} />
                        <Route path="/new-ticket" component={CreateTicket} />
                        <Route path="/open-ticket" component={OpenTicket} />
                        <Route path="/userAccount" component={UserMaintenance} />
                        <Route path="/groupLead" component={GroupLeadMaintenance} />
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Test CRUD © {new Date().getFullYear()}</Footer>
            </Layout>
        </Layout>
    );
}

export default Mainpage;