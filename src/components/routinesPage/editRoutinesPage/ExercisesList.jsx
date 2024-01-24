import React from "react";
import styled from "styled-components";
import { LargeTitleStyle, NormalTextStyle } from "../../../styles/postAuthStyles";
import PlusSign from "../../../assets/plus-sign.png";

function ExercisesList() {
    return (
        <ExercisesListContainer>
            <SearchBar>Search</SearchBar>
            <Title>Exercises</Title>
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
        </ExercisesListContainer>
    )
};

export default ExercisesList; 

function ExerciseItem() {
    const handlePlusClick = () => {
        // EDIT THIS TO ADD AN EXERCISE INSTEAD
        console.log("Should add an exercise.");
    };
    return (
        <ExerciseItemContainer>
            <NormalTextStyle>Bicep Curls</NormalTextStyle>
            <Img src={PlusSign} onClick={handlePlusClick}/>
        </ExerciseItemContainer>
    )
};

const ExercisesListContainer = styled.div.attrs({
    className: "Exercise Container"
})`
    display: flex;
    padding: 10px 0px;
    flex-direction: column;
    align-items: center;
    //gap: 11px; //maybe change
    border-radius: 10px;
    background-color: white;
    position: absolute;
    right: 25px;
    top: 58px;
    //left: 252px; //or 20% or something for dynamicness 
    //top: 12px; //or 5% or something for dynamicness
    width: 30.16%; //386px; 
    min-width: 350px; 
    max-height: 70.9%;
`
const SearchBar = styled.div.attrs({
    className: "Search Bar"
})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 94%;
    height: 28px;
    background-color: rgba(217, 217, 217, 0.50);
    border-radius: 10px;
    color: rgba(0, 0, 0, 0.40);
    padding-left: 20px;
`

const ExerciseItemContainer = styled.div.attrs({
    className: "Exercise Item Container"
})`
    display: flex;
    width: 92%;
    height: 32px; 
    padding: 0 4%;
    justify-content: space-between;
    align-items: center;
`

const Title = styled(LargeTitleStyle)`
    font-weight: Normal;
`
const Img = styled.img`
    cursor: pointer;
`