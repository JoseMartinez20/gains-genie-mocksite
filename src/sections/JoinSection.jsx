import React from "react";
import styled from "styled-components";

function JoinSection() {
  return (
    <div>
      <Title>
        Join The <span>Community</span>
      </Title>
      <Text>Thousands of gym goers have already joined Gym Genie</Text>
    </div>
  );
}
export default JoinSection;

const Title = styled.h1`
  margin: 50px 20px;
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  background: white;

  /* background: linear-gradient(104deg, var(--primary) 0%, var(--accent) 100%); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    background: linear-gradient(120deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Text = styled.h2`
  margin: 50px 20px;
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  background: white;
  /* background: linear-gradient(104deg, var(--primary) 0%, var(--accent) 100%); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
