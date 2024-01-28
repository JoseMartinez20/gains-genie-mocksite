import React from "react";
import styled from "styled-components";
import {NormalTextStyle, TitleStyle } from "../../styles/postAuthStyles";

function MealHistorySection(){
    return (
        <MealHistoryContainer>
            <OneMealContainer>
                {/* REPLACE W MEAL NAME */}
                <MealName>Meal Name</MealName>
                <InfoContainer>
                    <NormalTextStyle><i>
                        {/* CHANGE WITH LIST OF INGREDIENTS */}
                        ingredients: {'eggs (scrambled), bacon, milk'}
                    </i></NormalTextStyle>
                </InfoContainer>

                {/* CHANGE WITH ACTUAL MACRO INFORMATION OF MEAL */}
                <InfoContainer>
                    <FlexBoxAndRow>
                        <BoldedText>calories:&nbsp;</BoldedText><NormalTextStyle>{200}</NormalTextStyle>
                    </FlexBoxAndRow>

                    <FlexBoxAndRow>
                        <BoldedText>protein:&nbsp;</BoldedText><NormalTextStyle>{2}g</NormalTextStyle>
                    </FlexBoxAndRow>

                    <FlexBoxAndRow>
                        <BoldedText>carbs:&nbsp;</BoldedText><NormalTextStyle>{20}g</NormalTextStyle>
                    </FlexBoxAndRow>

                    <FlexBoxAndRow>
                        <BoldedText>fats:&nbsp;</BoldedText><NormalTextStyle>{4}g</NormalTextStyle>
                    </FlexBoxAndRow>
                    
                </InfoContainer>

            </OneMealContainer>

        </MealHistoryContainer>
    )
}
export default MealHistorySection;

const FlexBoxAndRow = styled.div`
    display: flex;
    flex-direction: row; 
`
const MealHistoryContainer = styled.div.attrs({
    className: "Workout History Container"
})`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const OneMealContainer = styled.div.attrs({
    className: "One Meal Container"
    })`
        border: 0.3px solid #000;
        width: 100%;
    `

const MealName = styled(TitleStyle).attrs({
    className: "Meal Name"
})`
    padding-left: 3.24%;
    display: flex;
    color: #4572A7; 
    position: relative;
    height: 36px;
    margin: 0px;
    align-items: center;
`
const InfoContainer = styled.div.attrs({
    className: "Ingredient container"
})`
    width: 100%;
    height: 23px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3.24%;
`

const BoldedText = styled(NormalTextStyle)`
    font-weight: bold;
`