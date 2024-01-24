import React from "react";
import styled from "styled-components";
import { NormalTextStyle , LargeTitleStyle } from "../../styles/postAuthStyles";
import ExerciseTableRow from "./ExerciseTableRow";


function ExercisePlan() {
    return (
    <>
        <ExerciseContainer>
            <ExerciseTitle>Bicep Curls</ExerciseTitle>
            <TitleSeperator/>
            <ExerciseTableRow/>
            {/* add title names above*/}

            <TableNameSeperator/>

            <ExerciseTableRow/>
            <ExerciseTableRow/>
        </ExerciseContainer>

        <ExerciseContainer>
            <ExerciseTitle>Lateral Raises</ExerciseTitle>
            <TitleSeperator/>
            <ExerciseTableRow/> 
            {/* add title names above*/}

            <TableNameSeperator/>
            
            <ExerciseTableRow/>
            <ExerciseTableRow/>
        </ExerciseContainer>
    </>
    )
};

export default ExercisePlan;

const ExerciseContainer = styled.div.attrs({
    className: "Exercise Container"
})`
    display: flex;
    padding: 0px 0px;
    flex-direction: column;
    align-items: center;
    //gap: 11px; //maybe change
    border-radius: 10px;
    background-color: white;
    //position: relative;
    //left: 252px; //or 20% or something for dynamicness 
    //top: 12px; //or 5% or something for dynamicness
    width: 588px;
`
const ExerciseTitle = styled(LargeTitleStyle).attrs({
    className: "Exercise Title"
})`
    height: 6%;
    width: 97%;
    position: relative;
    left: 1.5%;
    text-align: left;
    font-weight: normal;
`
const TitleSeperator = styled.hr.attrs({
    className: "Line"
})`
    width: 100%;
    position: relative; 
    stroke-width: 0.2px;
    stroke: #000;
    margin: 0px;
`
const TableNameSeperator = styled.hr.attrs({
    className: "Line for table!"
})`
    width: 89.29%;
    position: relative; 
    stroke-width: 0.2px;
    stroke: #000;
    margin: 0px;
`
