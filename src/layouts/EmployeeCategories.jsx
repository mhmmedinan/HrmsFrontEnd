import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

export default function EmployeeCategories() {
  return (
    <div>
      <Menu fluid compact icon="labeled" vertical>
        <Menu.Item as={Link} to={"/employee/jobadvertlists"}>
          <Icon name="list" />
          İş ilanları
        </Menu.Item>
      </Menu>
    </div>
  );
}
