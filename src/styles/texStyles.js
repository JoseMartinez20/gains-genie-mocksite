import styled from "styled-components";

export const LargeTitleStyle = styled.h1`
  font-size: 96px;
  line-height: 1.2;
  color: var(--largeTextColor);
  @media (max-width: 640px) {
    font-size: 48px;
  }
`;

export const TitleStyle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: var(--largeTextColor);
  @media (max-width: 640px) {
    font-size: 48px;
  }
`;

export const SmallTitle = styled.h3`
  font-size: 40px;
  letter-spacing: -2px;
  font-weight: 700;
  color: var(--largeTextColor);
  @media (max-width: 960px) {
    font-size: 24px;
  }
`;

export const SubtitleStyle = styled.h3`
  font-size: 30px;
  line-height: 150%;
  color: var(--largeTextColor);
  @media (max-width: 960px) {
    font-size: 20px;
  }
`;

export const NormalTextStyle = styled.p`
  font-size: 18px;
  letter-spacing: normal;
  line-height: 150%;
  color: var(--smallTextColor);
  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

export const LargeTextStyle = styled.p`
  font-size: 30px;
  line-height: 1.5;
  color: var(--smallTextColor);
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;
