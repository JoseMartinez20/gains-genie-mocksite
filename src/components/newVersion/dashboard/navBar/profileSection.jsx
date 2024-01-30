import React from "react";
import styled from "styled-components";
import profileImage from "../../../../assets/stock-profile-image.png";
import { NewVersionText } from "../../../../styles/texStyles";

function ProfileSection({ firstName, lastName, userName }) {
  return (
    <Container>
      <NameBadge>
        <ProfileIcon src={profileImage} />
        <TextContainer>
          <Name>
            {firstName} {lastName}
          </Name>
          <UserName>@{userName}</UserName>
        </TextContainer>
      </NameBadge>
    </Container>
  );
}
export default ProfileSection;

const Container = styled.div.attrs({
  className: "ProfileSection Container",
})`
  padding-bottom: 12px;
`;

const NameBadge = styled.div.attrs({
  className: "NameBadge",
})`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
`;

const TextContainer = styled.div.attrs({
  className: "Text Container",
})``;

const Name = styled(NewVersionText).attrs({
  className: "User's Name",
})``;

const UserName = styled(NewVersionText).attrs({
  className: "User's userName",
})`
  opacity: 40%;
  font-size: 14px;
`;

const ProfileIcon = styled.img.attrs({
  className: "Profile Icon",
})`
  width: 30px;
`;
