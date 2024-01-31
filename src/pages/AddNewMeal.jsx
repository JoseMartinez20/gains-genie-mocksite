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

function AddNewMeal( isAddingOrEditingMeal, ingredientsList ) {
  return (
    (isAddingOrEditingMeal && <NewMealLog ingredientsList = {ingredientsList}/>)
    (!isAddingOrEditingMeal && <AddNewMealButton/>)
  );
}