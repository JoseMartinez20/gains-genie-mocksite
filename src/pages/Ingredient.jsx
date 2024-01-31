import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/gym-genie-logo-smaller.png";
import profileImage from "../assets/profile-icon.png";
import historyImage from "../assets/history-icon.png";
import routinesImage from "../assets/routine-icon.png";
import exercisesImage from "../assets/exercise-icon-updated.png";
import nutritionImage from "../assets/nutrition-icon.png";
import settingsImage from "../assets/settings-icon.png";

function Ingredient( name, protein, carbs, fats, calories ) {
  return (
    <IngredientContainer>
        <td> --- </td>
        <td> {name} </td>
        <td> {protein} </td>
        <td> {carbs} </td>
        <td> {fats} </td>
        <td> {calories} </td>
    </IngredientContainer>
  );
};

export default Ingredient;

const IngredientContainer = styled.tr.attrs({
    className: 'IngredientContainer',
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;