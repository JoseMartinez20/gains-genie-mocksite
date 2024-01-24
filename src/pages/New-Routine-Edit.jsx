import React, { useEffect } from "react";
//import { useState } from "react";
import styled from "styled-components";
import { ctaButton } from "../components/routinesPage/ctaButton";
import NavBar from "./NavBar";
import ExercisePlan from "../components/routinesPage/ExercisePlan";
import { ButtonsContainer, RoutineContainer, RoutineNameContainer } from "../components/routinesPage/containers";
import ExercisesList from "../components/routinesPage/editRoutinesPage/ExercisesList";

function NewRoutinePage() {
    return (
        <>
            <NavBar/>
            <RoutineContainer>
                <ButtonsContainer>
                    <DeleteRoutineButton>Delete Routine</DeleteRoutineButton>
                    <DoneEditingButton>Done Editing</DoneEditingButton>
                </ButtonsContainer>
                <EditRoutineNewNameInput/>

                {/* EDIT THIS COMPONENT */}
                <ExercisePlan isEditing={true}/>

            </RoutineContainer>

            {/* EDIT COMPONENT BELOW SO THAT WHEN CLICK ON PLUSSIGN NEXT TO AN EXERCISE IT SHOWS IN EXERCISE PLAN */}
            <ExercisesList/>
        </>

    )
};

export default NewRoutinePage;


const EditRoutineNewNameInput = styled.input.attrs({
    className: "Edit Routine New Name Input",
    type: 'text',
    placeholder: 'Enter Routine Name',
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
    border: 1px solid #ccc; /* Add a border to make it visually distinct */
`

const DeleteRoutineButton = styled(ctaButton).attrs({
    className: "Delete Routine Button"
})`
    background-color: rgba(255, 169, 169, 1);
    color: black;
    display: flex;
    font-size: 14px;
    width: 46.7%; //113px
    height: 34px; 
    position: relative;
`

const DoneEditingButton = styled(ctaButton).attrs({
    className: "Done Editing Button"
})`
    background-color: rgba(217, 217, 217, 1);
    color: black;
    display: flex;
    font-size: 14px;
    width: 46.7%; //113px
    height: 34px; 
    position: relative;
`