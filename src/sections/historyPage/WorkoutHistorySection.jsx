import React, { useState } from "react";
import styled from "styled-components";
import {NormalTextStyle, TitleStyle } from "../../styles/postAuthStyles";


function WorkoutHistorySection() {
    const [showAddInfo, setShowAddInfo] = useState(false);
    const handleToggleChange = () => {
        setShowAddInfo(!showAddInfo);
    }
    return (
        <WorkoutHistoryContainer>
            <OneWorkoutContainer>
                {/* ADD ROUTINE NAME PROP FOR NAME BELOW */}
                <WorkoutName>Routine Name</WorkoutName>
                <ExercisesAndToggleContainer>
                    <div>
                        <BoldedText>All Exercises</BoldedText>
                        {/* ADD LIST OF EXERCISES IN ROUTINE BELOW */}
                        <NormalTextStyle>{'Bench Press, Bicep Curls, Lateral Raises, Squats'}</NormalTextStyle>
                    </div>

                    <div style={{display:"flex", alignItems: "center"}}>
                        {showAddInfo &&(
                        <svg 
                            style={{cursor:"pointer"}} 
                            xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none"
                            onClick={handleToggleChange}>
                            <path d="M8 14L0.205772 0.5L15.7942 0.5L8 14Z" fill="black"/>
                        </svg>)}
                        {!showAddInfo &&(
                        <svg 
                            style={{cursor:"pointer"}} 
                            xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none"
                            onClick={handleToggleChange}>
                            <path d="M8 0L15.7942 13.5H0.205771L8 0Z" fill="black"/>
                        </svg>
                        )}
                    </div>
                </ExercisesAndToggleContainer>
                
                <VolumeAndPRContainer>
                    <FlexBoxAndRow>
                        {/* REPLACE WITH CALCULATED TOTAL VOLUME */}
                        <BoldedText>Total Volume:&nbsp;</BoldedText><NormalTextStyle>{7600} lbs</NormalTextStyle>   
                    </FlexBoxAndRow>
                    <FlexBoxAndRow>
                        {/* REPLACE WITH NUMBER OF PRs */}
                        <BoldedText>Number of PRs:&nbsp;</BoldedText> <NormalTextStyle>{2}</NormalTextStyle>
                    </FlexBoxAndRow>
                </VolumeAndPRContainer>
                {showAddInfo &&(
                <AdditionalInfoContainer>
                    <BoldedText style={{height:24}}>Exercise Summary</BoldedText>
                    <FlexBoxAndRow style={{flexWrap:"wrap"}}>
                        <ExerciseSummary/>
                        <ExerciseSummary/>
                        <ExerciseSummary/>
                        <ExerciseSummary/>
                    </FlexBoxAndRow>
                </AdditionalInfoContainer>
                )}
            </OneWorkoutContainer>


        </WorkoutHistoryContainer>
    )
}
export default WorkoutHistorySection

function ExerciseSummary(){
    return (
    <ExerciseSummaryContainer>
        {/* EDIT NAME AND VALUES TO BE SPECIFIC TO THE EXERCISE */}
        <NormalTextStyle>{'Bench Press'}</NormalTextStyle>
        <ExerciseSummaryList>
            <li>Set {1}: {100} lbs x {5} reps</li>
            <li>Set {1}: {100} lbs x {5} reps</li>
            <li>Set {1}: {100} lbs x {5} reps</li>
        </ExerciseSummaryList>
    </ExerciseSummaryContainer>
    );
}

const FlexBoxAndRow = styled.div`
    display: flex;
    flex-direction: row; 
`

const WorkoutHistoryContainer = styled.div.attrs({
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
const OneWorkoutContainer = styled.div.attrs({
    className: "One Workout container"
})`
    border: 0.3px solid #000;
    width: 100%;
    //padding: 0 30px;
    //padding-left: 3.24%;
`
const ExercisesAndToggleContainer = styled.div.attrs({
    className: "ExercisesAndToggleContainer"
})`
    padding-left: 3.24%;
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    padding-right: 6%;
`
const VolumeAndPRContainer = styled.div.attrs({
    className: "Volume and PR container"
})`
    width: 100%;
    height: 23px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 12%;
    padding-left: 3.24%;
`
const AdditionalInfoContainer = styled.div.attrs({
})
`
    display: flex;
    flex-direction: column;
    border: 0.3px solid #000;
    border-style: solid hidden hidden hidden;
    width: 100%;
    //padding: 0 30px;
    padding: 0 3.24%;
    //height: 36px;
`

//EXERCISE SUMMARY Styles
// const ExerciseSummaryColumn = styled.div.attrs({
//     className:"Exercise Summary Container" 
// })`
//     display: flex; 
//     width: 50%; 
//     min-width: 166px;
//     flex-direction: column;
// `
const ExerciseSummaryContainer = styled.div.attrs({
    className: "Exercise Summary Container"
})`
    display: flex;
    width: 50%;
    min-width: 166px;
    flex-direction: column;
`

const ExerciseSummaryList = styled.ul.attrs({
    className: "Exercise Summary <ul>"
})`
    padding-left: 1.72%;
    list-style-position: inside;
    font-size: 14px;
    margin: 5px 0;
`


//TEXT STYLES
const WorkoutName = styled(TitleStyle).attrs({
    className: "Workout Name"
})`
    padding-left: 3.24%;
    display: flex;
    color: #4572A7; 
    position: relative;
    height: 36px;
    margin: 0px;
    align-items: center;
    
`

const BoldedText = styled(NormalTextStyle)`
    font-weight: bold;
`