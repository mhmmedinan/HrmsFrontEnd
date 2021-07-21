import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Sidebar, Icon } from "semantic-ui-react";

export default function EmployeeCategories() {
  return (
    <div style={{ opacity: "0.9" }}>
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        vertical
        visible
        style={{ width: "280px" }}
      >
        <Menu.Item
          as={Link}
          to="/employee"
          style={{ color: "white"}}
          
        >
          <label style={{fontFamily:"initial",fontSize:"20px"}}>ADMİN PANEL</label>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/employee/jobAdvertLists"
          style={{ color: "white", marginTop: "4.5em", }}
          header
        >
          <Icon name="check" />
         <label style={{opacity:"0.8",fontFamily:"inherit"}}>ONAYLANACAK İŞ İLANLARI</label> 
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/employee/employerActiveUpdate"
          style={{ color: "white", marginTop: "2em" }}
          header
        >
          <Icon name="check" />
          <label style={{opacity:"0.8",fontFamily:"inherit"}}>ONAYLANACAK İŞVEREN BİLGİLERİ</label> 
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/employee/employeeProfile"
          style={{ color: "white", marginTop: "2em" }}
          header
        >
          <Icon name="user" />
          <label style={{opacity:"0.8",fontFamily:"inherit"}}>PROFİL</label> 
        </Menu.Item>

       
      </Sidebar>
    </div>
  );
}
