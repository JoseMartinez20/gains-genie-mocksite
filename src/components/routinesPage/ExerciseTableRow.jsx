import React from "react";
import styled from "styled-components";
import { NormalTextStyle , LargeTitleStyle } from "../../styles/postAuthStyles";

function ExerciseTableRow() {
    return (
        <TableRowContainer>
            <TableRowNoSpaceContainer>
                <SetText>Set</SetText>
                <PreviousText>Previous</PreviousText>
                <WeightText>Lbs</WeightText>
            </TableRowNoSpaceContainer>
            <OtherText>Reps</OtherText>
            <OtherText>Rest Time</OtherText>
        </TableRowContainer>
    )
}

export default ExerciseTableRow

const TableRowContainer = styled.div.attrs({
    className: "Table Row Container"
})`
    display: flex;
    padding: 0px 0px;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: space-between;
    //position: relative;
    //left: 252px; //or 20% or something for dynamicness 
    //top: 12px; //or 5% or something for dynamicness
    width: 87%; //512px in figma
    height: 30px; 
`
const TableRowNoSpaceContainer = styled.div.attrs({
    className: "TableRow NoSpace Container"
})`
    display: flex;
    flex-direction: row;
    position: relative; 
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 56.25%; //288px
`
const SetText = styled(NormalTextStyle)`
    //position: relative;
    justify-content: center;
    /* flex: 1; */
    height: 30px;
    width: 13.542%; //7.42%; //39px
`
const PreviousText = styled(NormalTextStyle)`
    //position: relative;
    justify-content: center;
    /* flex: 1; */
    height: 30px;
    width: 64.238%; //36.13%; 185px
`
const WeightText = styled(NormalTextStyle)`
    justify-content: center;
    height: 30px;
    width: 22.22%; //
`
const OtherText = styled(NormalTextStyle)`
    justify-content: center;
    /* flex: 1; */
    height: 30px;
    width: 12.89%; //64px
    margin: 0;

`