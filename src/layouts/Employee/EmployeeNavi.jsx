import React from 'react'
import { Menu,Input } from 'semantic-ui-react'

export default function EmployeeNavi() {
    return (
        <div style={{margin:'-18px'}}>
        <Menu size="huge" pointing secondary>
          
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search'
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
 
      </div>
    )
}
