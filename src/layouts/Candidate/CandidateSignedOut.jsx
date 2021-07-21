import { Dropdown,Menu} from "semantic-ui-react";
import React from "react";

export default function CandidateSignedOut() {
  return (
    <div>
      <Menu.Item>
        <Dropdown pointing="top left" text="İş Arayan">
        <Dropdown.Menu>
            <Dropdown.Item text="Giriş Yap" icon="sign-in"/>
            <Dropdown.Item text="Kayıt Ol" icon="signup"/>
        </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
