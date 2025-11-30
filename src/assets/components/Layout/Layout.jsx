import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import "./Layout.css";
import SideIcon from "../side-icon/SideIcon";


function Layout() {
  return (
    <>
      <div className="content-container">
        <Sidebar></Sidebar>
        <MainContent></MainContent>
        <SideIcon></SideIcon>
      </div>
    </>
  );
}

export default Layout;
