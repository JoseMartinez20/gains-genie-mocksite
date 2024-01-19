import styled from "styled-components";

export const H2 = styled.h3`
  font-size: 32px;
  letter-spacing: -2px;
  font-weight: 700;
  @media (max-width: 960px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  line-height: 150%;
  margin-block-start: 1em;
  margin-block-end: 1em;
  @media (max-width: 960px) {
    font-size: 20px;
  }
`;

export const NormalText = styled.p`
  font-size: 18px;
  letter-spacing: normal;
  line-height: 150%;
  @media (max-width: 960px) {
    font-size: 16px;
  }
`;
