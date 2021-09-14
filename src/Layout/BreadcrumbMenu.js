import React from 'react';
import { Breadcrumb, PageHeader } from "antd";

let menu1 = "";
let menu2 = "";
switch (window.location.pathname) {
    case "/":
        menu1 = "Dish";
        menu2 = "New Ticket";
        break;
    case "/new-ticket":
        menu1 = "Dish";
        menu2 = "New Ticket";
        break;
    case "/open-ticket":
        menu1 = "Dish";
        menu2 = "Open Tickets";
        break;
    case "/view-ticket":
        menu1 = "Dish";
        menu2 = "Closed Tickets";
        break;
    default:
        break;
}


const BreadcrumbMenu = (props) => {
    let firstMenu = (props.firstMenu) ? props.firstMenu : menu1
    let secondMenu = (props.secondMenu) ? props.secondMenu : menu2
    const routes = [
        {
            path: 'index',
            breadcrumbName: firstMenu,
        },
        {
            path: 'first',
            breadcrumbName: secondMenu,
        },
        // {
        //     path: 'second',
        //     breadcrumbName: 'Third-level Menu',
        // },
    ];
    return <PageHeader breadcrumb={{ routes }} />

    // if (secondMenu !== "") {
    //     return (
    //         <Breadcrumb style={{ margin: "16px 0px 0px 16px" }}>
    //             <Breadcrumb.Item>{firstMenu}</Breadcrumb.Item>
    //             <Breadcrumb.Item>{secondMenu}</Breadcrumb.Item>
    //         </Breadcrumb>
    //     )
    // }
    // else {
    //     return (
    //         <Breadcrumb style={{ margin: "16px 0px 0px 16px" }}>
    //             <Breadcrumb.Item>{firstMenu}</Breadcrumb.Item>
    //         </Breadcrumb>
    //     )
    // }


}


export default BreadcrumbMenu;