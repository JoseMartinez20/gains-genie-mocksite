import React from "react";
import styled from "styled-components";
import logo from "../../../../assets/gym-genie-logo-smaller.png";

function LogoSection() {
  return (
    <Container>
      <Name>Gym Genie</Name>
      <Logo src={logo} />
    </Container>
  );
}
export default LogoSection;

const Container = styled.div.attrs({
  className: "Container",
})`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
`;

const Logo = styled.img.attrs({
  className: "Logo",
})`
  width: 30px;
`;

const Name = styled.h1.attrs({
  className: "Name",
})`
  font-size: 24px;
`;
