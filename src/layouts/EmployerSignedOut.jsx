import React from "react";
import { Dropdown,Menu} from "semantic-ui-react";
export default function EmployerSignedOut() {
  return (
    <div>
      <Menu.Item>
        <Dropdown pointing="top left" text="İş Veren">
          <Dropdown.Menu>
            <Dropdown.Item text="Giriş Yap" icon="sign-in" />
            <Dropdown.Item text="Kayıt Ol" icon="signup" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
