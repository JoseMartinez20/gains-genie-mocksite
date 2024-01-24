import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { NormalTextStyle } from "../../styles/postAuthStyles";
import { ctaButton } from "../../components/routinesPage/ctaButton";

function AllRoutinesList() {
    return(
        <ListContainer>
            <ListItemContainer>
                <ListItemText>Arms Day</ListItemText>
                <RecordButton>Record</RecordButton>
            </ListItemContainer>
            <ListItemContainer>
                <ListItemText>Pull Day</ListItemText>
                <RecordButton>Record</RecordButton>
            </ListItemContainer>
        </ListContainer>
    );
}

export default AllRoutinesList

const ListContainer = styled.div.attrs({
    className: "RoutinesListContainer",
})`
    display: flex;
    width: 525px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`
const ListItemContainer = styled.div.attrs({ //add onClick property!
    className: "Routines List Item Container",
})`
    position: static;
    display: flex;
    flex-direction: row;
    height: 40px;
    width: 525px;
    border-radius: 10px;
    background-color: rgba(217, 217, 217, 0.5);
`
const ListItemText = styled(NormalTextStyle).attrs({
    className: "Routines List Item Text",
})`
    height: 40px;
    width: 75%;
    margin: 0 0 0 12px;
    align-items: center;
`

const RecordButton = styled(ctaButton).attrs({
    className: "Record Button",
})`
    width: 17%;
    height: 60%;
    margin-right: 17px;
    position: static;
`
