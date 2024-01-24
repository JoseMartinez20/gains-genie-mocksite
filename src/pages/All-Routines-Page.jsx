import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ctaButton } from "../components/routinesPage/ctaButton";
import NavBar from "./NavBar";
import ProfileHeader from "../sections/dashboardPage/ProfileHeader";
import { LargeTitleStyle } from "../styles/postAuthStyles";
import AllRoutinesList from "../sections/routinesPage/AllRoutinesList";
import NewRoutinePage from "./New-Routine-Edit";
import OneRoutineView from "./One-Routine-View";

function AllRoutinesPage() {//({onNewRoutineButtonClick}) {
    const [view, setView] = useState("AllRoutines");

    const handleNewRoutineButtonClick = () => {
        setView("NewRoutine");
    };

    const handleListItemClick = () => {
        // MAKE MORE SPECIFCI TO ROUTINES
        setView("OneRoutineView")
    };
    return (
        <>
            <ProfileHeader/>
            <NavBar/>

            {view==="AllRoutines" && (
            // HERE IS FULL LIST OF YOUR ROUTINES
            <RoutinesPageLeftContainer>
                <Title>My Routines</Title>
                <AllRoutinesList handlerListItemClick={handleListItemClick}/>
                <NewRoutineButton onClick={handleNewRoutineButtonClick}>+ New Routine</NewRoutineButton>
            </RoutinesPageLeftContainer>
            )}

            {view==="NewRoutine" && (
            // HERE IS TO GO TO EDIT MODE TO CREATE A NEW ROUTINE
            <NewRoutinePage />

            )}
            {view==="OneRoutineView" && (
            // HERE IS THE TO GO TO ONE ROUTINE -- EDIT THIS TO BE MORE SPECIFIC TO ROUTINE
            <OneRoutineView />
            )}

        </>
    )
};

export default AllRoutinesPage;

export const RoutinesPageLeftContainer = styled.div.attrs({
    className: "Routines Container",
  })`
    display: "flex";
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

