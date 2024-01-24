import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { NormalTextStyle } from "../../styles/postAuthStyles";
import { ctaButton } from "../../components/routinesPage/ctaButton";
//import NavBar from "../../pages/NavBar";

function AllRoutinesList({ handlerListItemClick }) {
    return(
        <>
            <ListContainer>
                <ListItemContainer>
                    {/* <ListItemText onClick={handleListItemClick}>Arms Day</ListItemText> */}
                    <ListItemText onClick={handlerListItemClick}>Arms Day</ListItemText>
                    <RecordButton>Record</RecordButton>
                </ListItemContainer>
                <ListItemContainer>
                    <ListItemText onClick={handlerListItemClick}>Pull Day</ListItemText>
                    <RecordButton>Record</RecordButton>
                </ListItemContainer>
            </ListContainer>
        </>
    );
}
export default AllRoutinesList;

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
    justify-content: space-between;
    //background-color: rgba(217, 217, 217, 0.5);
`
const ListItemText = styled(NormalTextStyle).attrs({
    className: "Routines List Item Text",
})`
    height: 40px;
    width: 74%;
    margin: 0 0 0 12px;
    padding-left: 12px;
    align-items: center;
    background-color: rgba(217, 217, 217, 0.5);
    border-radius: 10px;
    cursor: pointer; 
`

const RecordButton = styled(ctaButton).attrs({
    className: "Record Button",
})`
    width: 17%;
    height: 60%;
    margin-right: 17px;
    position: relative;
    cursor: pointer; 
`
