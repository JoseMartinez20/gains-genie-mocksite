import React, { useEffect } from "react";
//import { useState } from "react";
import styled from "styled-components";
import { ctaButton } from "../components/routinesPage/ctaButton";
import NavBar from "./NavBar";
import { LargeTitleStyle } from "../styles/postAuthStyles";
import AllRoutinesList from "../sections/routinesPage/AllRoutinesList";

//Add logic on whether a routine is clicked, recoreded, or add new routine etc....
function RoutinesPage() {
    return (
        <>
            <NavBar/>
            <RoutinesPageLeftContainer>
                <Title>My Routines</Title>
                <AllRoutinesList/>
                <NewRoutineButton>+ New Routine</NewRoutineButton>
            </RoutinesPageLeftContainer>
        </>
    )
};

export default RoutinesPage

export const RoutinesPageLeftContainer = styled.div.attrs({
    className: "Routines Container",
  })`
    display: inline-flex;
    padding: 24px 0px;
    flex-direction: column;
    align-items: center;
    gap: 16px; //maybe change
    border-radius: 30px;
    background-color: white;
    position: absolute;
    left: 261px; //or 20% or something for dynamicness 
    top: 38px; //or 5% or something for dynamicness
    max-width: 588px;
    padding-left: 25px; //change for responsiveness
    padding-right: 25px; //change for responsiveness
    align-items: center;
`

const NewRoutineButton = styled(ctaButton).attrs({
    className: "New RoutineButton",
  })`
  font-size: 17px;
  width: 525px;
  height: 40px;
`;

const Title=styled(LargeTitleStyle).attrs({
    className: "All Routines Title",
})` 
    font-weight: normal;
`;

