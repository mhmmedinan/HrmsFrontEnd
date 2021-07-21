import React from 'react'
import { Link,NavLink} from 'react-router-dom'
import {Menu,Icon,Sidebar} from 'semantic-ui-react'
export default function EmployerCategories() {
    return (
        <div>
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
          to="/employer"
          style={{ color: "white"}}
          
        >
          <label style={{fontFamily:"initial",fontSize:"20px"}}>EMPLOYER PANEL</label>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/employer/AllJobAdverts"
          style={{ color: "white", marginTop: "4.5em", }}
          header
        >
          <Icon name="check" />
         <label style={{opacity:"0.8",fontFamily:"inherit"}}>İŞ İLANLARI</label> 
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/employer/employerProfile"
          style={{ color: "white", marginTop: "2em" }}
          header
        >
          <Icon name="user" />
          <label style={{opacity:"0.8",fontFamily:"inherit"}}>PROFİL</label> 
        </Menu.Item>

       
      </Sidebar>
        </div>
    )
}
