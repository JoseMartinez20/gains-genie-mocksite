import React from "react";
import styled from "styled-components";
import Overview from "../../components/newVersion/dashboard/overview/Overview";

function DashboardJose() {
  return (
    <Container>
      <Overview />
    </Container>
  );
}
export default DashboardJose;

const Container = styled.div.attrs({
  className: "Dashboard Container",
})`
  color: black;
  display: flex;
`;
