import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NewVersionText } from "../../../../styles/texStyles";
import chevron from "../../../../assets/chevron-right.svg";
import overviewIcon from "../../../../assets/profile-icon.png";
import historyIcon from "../../../../assets/history-icon.png";
import nutritionIcon from "../../../../assets/nutrition-icon.png";
import routinesIcon from "../../../../assets/routine-icon.png";
import exerciseIcon from "../../../../assets/exercise-icon.png";

const tabs = [
  {
    title: "Overview",
    icon: overviewIcon,
    chevron: chevron,
    link: "/dashboard",
  },
  { title: "History", icon: historyIcon, chevron: chevron, link: "/history" },
  {
    title: "Routines",
    icon: routinesIcon,
    chevron: chevron,
    link: "/routines",
  },
  {
    title: "Exercise",
    icon: exerciseIcon,
    chevron: chevron,
    link: "/exercise",
  },
  {
    title: "Nutrition",
    icon: nutritionIcon,
    chevron: chevron,
    link: "/nutrition",
  },
];

function PagesSection() {
  return (
    <Container>
      <SectionTitleContainer>
        <SectionTitle>Pages</SectionTitle>
      </SectionTitleContainer>
      {tabs.map((tab, index) => (
        <StyledLink to={tab.link}>
          <PageContainer key={index}>
            <Chevron src={tab.chevron} />
            <PageIcon src={tab.icon} />
            <PageTitle>{tab.title}</PageTitle>
          </PageContainer>
        </StyledLink>
      ))}
    </Container>
  );
}
export default PagesSection;

const Container = styled.div.attrs({
  className: "Container",
})``;

const SectionTitleContainer = styled.div.attrs({
  className: "SectionTitle Container",
})`
  padding: 4px 12px;
`;

const SectionTitle = styled(NewVersionText).attrs({
  className: "Section Title",
})`
  opacity: 40%;
`;

const PageContainer = styled.div.attrs({
  className: "Page Container",
})`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 4px 6px;
  border-radius: 12px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    cursor: pointer;
    background: rgba(28, 28, 28, 0.05);
  }
`;

const Chevron = styled.img.attrs({
  className: "Chevron Icon",
})`
  width: 24px;
  //Coloring the svg manually
  filter: invert(3%) sepia(1%) saturate(3257%) hue-rotate(352deg)
    brightness(95%) contrast(83%);
  opacity: 20%;
`;

const PageIcon = styled.img.attrs({
  className: "Page Icon",
})`
  width: 24px;
  height: 24px;
`;

const PageTitle = styled(NewVersionText).attrs({
  className: "Page Title",
})`
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    transform: translateX(3px);
  }
`;

const StyledLink = styled(Link).attrs({
  className: "Custom Link",
})`
  text-decoration: none;
`;
