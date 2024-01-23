import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { TitleStyle, SubtitleStyle, NormalTextStyle } from "../../styles/postAuthStyles"
import trophy from "../../assets/trophy-icon.png"

function achievementsItem() {
    return (
        <>
            {/* <div>
                <Text>achievement</Text>
            </div> */}
            <ItemGroup>
                <img src={trophy}/>
                <Text>Bench Press</Text>
                <Text>Volume PR</Text>
                <Text>100</Text>
                <Date>1/22</Date>
            </ItemGroup>
        </>
    );
}

export default achievementsItem;

const ItemGroup = styled.div.attrs({
    className: "Achievements Item Group",
  })`
    display: flex;
    flex-direction: row;
    flex-basis: auto;
    //align-items: center;
    width: 347px;
    height: 29px;
    //flex-shrink: 0;
    //text-align: center;
  `;
const Text = styled(NormalTextStyle).attrs({
    className: "Achievement Text",
  })`
    flex-grow: 1;
    justify-content: center;
    //color: rgba(255, 255, 255, 0.8);
    //font-weight: 600;
    //align-self: end;
    margin: 0 0 0 0;
  `;
const Date = styled(NormalTextStyle).attrs({
    className: "Achievement Date",
})`
    flex-grow: 1;
    justify-content: center;
    margin: 0 0 0 0;
`;