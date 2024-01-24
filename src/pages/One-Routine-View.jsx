import React, { useEffect } from "react";
//import { useState } from "react";
import styled from "styled-components";
import { ctaButton } from "../components/routinesPage/ctaButton";
import NavBar from "./NavBar";
import ExercisePlan from "../components/routinesPage/ExercisePlan";

function OneRoutineView() {
    return (
        <>
            <NavBar/>
            <RoutineContainer>
                <ButtonsContainer>
                    <EditRoutineButton>Edit Routine</EditRoutineButton>
                    <RecordRoutineButton>Record Routine</RecordRoutineButton>
                </ButtonsContainer>
                <RoutineNameContainer>Arms Day</RoutineNameContainer>
                <ExercisePlan/>
            </RoutineContainer>

        </>
    )
};

export default OneRoutineView;

const RoutineContainer = styled.div.attrs({
    className: "Routines Container",
  })`
    display: flex;
    padding: 0px 0px;
    flex-direction: column;
    align-items: center;
    gap: 11px; //maybe change
    //border-radius: 30px;
    //background-color: white;
    position: absolute;
    left: 252px; //or 20% or something for dynamicness 
    top: 12px; //or 5% or something for dynamicness
    max-width: 588px;
    //padding-left: 25px; //change for responsiveness
    //padding-right: 25px; //change for responsiveness
`
const RoutineNameContainer = styled.div.attrs({
    className: "Routine Name Container",
})`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 568px;
    height: 44px;
    background-color: white;
    padding-left: 20px;
    border-radius: 10px;

    font-size: 20px;
`
const ButtonsContainer = styled.div.attrs({
    className: "Buttons Container"
})`
    display: flex;
    flex-direction: row;
    width: 41.3%; //243 px
    height: 34px;
    justify-content: space-around;

`

const EditRoutineButton = styled(ctaButton).attrs({
    className: "Edit Routine Button"
})`
    display: flex;
    font-size: 14px;
    width: 46.7%; //113px
    height: 34px; 
    position: relative;
`

const RecordRoutineButton = styled(ctaButton).attrs({
    className: "Record Routine Button"
})`
    display: flex;
    font-size: 14px;
    width: 46.7%; //113 px
    height: 34px; 
    position: relative;
`