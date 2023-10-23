import React from "react";
import {Outlet} from 'react-router-dom';
import Links from "../Links/Links";

const Layout = props => {
    return <div>
        <Links/>
        <Outlet/>
    </div>
}

export default Layout
