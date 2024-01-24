import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ctaButton } from "../components/routinesPage/ctaButton";
import NavBar from "./NavBar";
import ExercisePlan from "../components/routinesPage/ExercisePlan";
import { RoutineContainer, ButtonsContainer, RoutineNameContainer } from "../components/routinesPage/containers";
import OneRoutineEdit from "./One-Routine-Edit";

function OneRoutineView() {
    // HERE IS TO VIEW ONE ROUTINE -- CAN GO INTO EDIT MODE HERE 
    const [isEditing, setIsEditing] = useState(false)
    const handleEditRoutineButton = () => {
        setIsEditing(true);
    }
    return (
        <>
        {!isEditing && (
        <>
        <NavBar/>
        <RoutineContainer>
            <ButtonsContainer>
                <EditRoutineButton onClick={handleEditRoutineButton}>Edit Routine</EditRoutineButton>
                
                {/* NEED TO INCLUDE FUNCTION FOR RECORD ROUTINE BUTTON */}
                <RecordRoutineButton>Record Routine</RecordRoutineButton>
            </ButtonsContainer>
            
            {/* NEED TO MAKE MORE SPECIFIC */}
            <RoutineNameContainer>Arms Day</RoutineNameContainer>
            
            {/* GOES TO SET AND REP RECORDS FOR AN EXERCISE -- NEED TO MAKE MORE SPECIFIC */}
            <ExercisePlan isEditing={isEditing}/>
        </RoutineContainer>
        </>
        )};

        {isEditing &&(<OneRoutineEdit/>)}
        </>
        
    )
};

export default OneRoutineView;


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