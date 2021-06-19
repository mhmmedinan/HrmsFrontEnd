import React from 'react'
import { Link } from 'react-router-dom'
import {Menu,Icon} from 'semantic-ui-react'
export default function EmployerCategories() {
    return (
        <div>
             <Menu fluid compact icon="labeled"  vertical>
        <Menu.Item  as={Link} to={"/employer/jobadvertadd"}>
            <Icon name="add" />
            İş ilanı ekle      
        </Menu.Item>

        <Menu.Item as={Link} to={"/employer/alljobadverts"}>
        <Icon name="list" />
            İş ilanları    
        </Menu.Item>
      </Menu>
        </div>
    )
}
