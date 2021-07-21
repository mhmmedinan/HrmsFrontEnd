import React from 'react'
import { NavLink} from "react-router-dom";
import { Menu, Card} from "semantic-ui-react";

export default function CandidateCategories() {
    return (
        <div style={{marginTop:"20em"}}>
        <Card.Group vertical color="black" as={Menu} style={{height:"40em",width:"20em",marginTop:"-270px"}}>
        <Menu.Item
          style={{ color: "black", marginTop: "2em" }}
          header
        >
          <label style={{opacity:"0.8",fontFamily:"inherit"}}>İŞ ARAYAN PANELİ</label> 
        </Menu.Item>
        <Menu.Item
        as={NavLink}
        to="/home/candidate/resumeInformations"
          style={{ color: "black", marginTop: "2em" }}
          header
        >
          <label style={{opacity:"0.8",fontFamily:"inherit"}}>ÖZGEÇMİŞ BİLGİLERİ</label> 
        </Menu.Item>

       
        </Card.Group>
      </div>
    )
}
