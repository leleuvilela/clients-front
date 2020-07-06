import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  SettingsIcon,
} from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Vinicius Vilela</strong>
        </UserData>
      </Profile>

      <Icons>
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
