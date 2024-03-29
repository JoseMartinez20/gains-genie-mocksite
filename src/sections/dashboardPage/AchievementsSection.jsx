import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { TitleStyle, SubtitleStyle, NormalTextStyle } from "../../styles/postAuthStyles";
import Item from "../../components/dashboard/achievementsItem";

function Achievements() {
    return (
        <AchievementsContainer>
          <Title>Achievements</Title>
          <Subtitle>This week</Subtitle>
          {/* <Text> achievement #1 </Text> */}
          {/* <Text> achievement #2 </Text> */}
          <AchievementsGroup>
            <Item/>
            <Item/>
            <Item/>
          </AchievementsGroup>
        </AchievementsContainer>
    );
} 

export default Achievements;

const AchievementsContainer = styled.div.attrs({
    className: "Achievements Container",
  })`
    margin-top: 20%;
    /* float: center; */
    order: 2;
    background-color: white;
    width: 453px;
    height: 336px;
    border-radius: 30px;
  `;

  const AchievementsGroup = styled.div.attrs({
    className: "Achievements Group",
  })`
    align-items: center;
    margin: 15px 0px 0px 54px;
    width: 347px;
    height: 105.332px;
  `;


const Title = styled(TitleStyle).attrs({
    className: "Achievements Subtitle",
  })`
    margin: 17px 0px 5px 0px;
    //width: 220px;
  `;

const Subtitle = styled(SubtitleStyle).attrs({
    className: "Achievements Subtitle",
  })`
    /* margin: 0px 0px 0px 0px; */
    //width: 220px;
  `;
  
  const Text = styled(NormalTextStyle).attrs({
    className: "Achievements Text",
  })`
    //color: rgba(255, 255, 255, 0.8);
    //font-weight: 600;
    //align-self: end;
    //margin: 0 0 20px 20px;
  `;