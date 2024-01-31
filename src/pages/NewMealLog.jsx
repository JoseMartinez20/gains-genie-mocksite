import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import Ingredient from "./Ingredient";
import { Link } from "react-router-dom";
import logoImage from "../assets/gym-genie-logo-smaller.png";
import profileImage from "../assets/profile-icon.png";
import historyImage from "../assets/history-icon.png";
import routinesImage from "../assets/routine-icon.png";
import exercisesImage from "../assets/exercise-icon-updated.png";
import nutritionImage from "../assets/nutrition-icon.png";
import settingsImage from "../assets/settings-icon.png";

function AddNewMeal( ingredientsList ) {
  const [mealName, setMealName] = useState("");

  return (
    <AddNewMealContainer>
        {/* Style New Meal Label */}
        <h1>{mealName}</h1>
        <NametoCategoriesDivider/>
        <IngredientsTable>
            <IngredientCategoryContainer>
                <CategoryLabel> Item </CategoryLabel>
                <CategoryLabel> Protein (g) </CategoryLabel>
                <CategoryLabel> Carbs (g) </CategoryLabel>
                <CategoryLabel> Fats (g) </CategoryLabel>
                <CategoryLabel> Calories </CategoryLabel>
            </IngredientCategoryContainer>
            <CategorytoIngredientsDivider/>
            <IngredientsContainer>
                {ingredientsList.map((ingredient) => (
                    <Ingredient key={ingredient.id} name={ingredient.name}
                    protein={ingredient.protein} carbs={ingredient.carbs}
                    fats={ingredient.fats} calories={ingredient.calories} />
                ))}
            </IngredientsContainer>
        </IngredientsTable>
    </AddNewMealContainer>
  );
}

const AddNewMealContainer = styled.div.attrs({
    className: 'NewMealContainer',
})`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
    max-height: 20%;
    max-width: 20%;
    border-radius: 10%;
`;

const IngredientsTable = styled.div.attrs({
    className: 'IngredientInfoContainer'
})`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const IngredientCategoryContainer = styled.div.attrs({
    className: 'IngredientInfoContainer'
})`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
    margin-left: 20%;
`;

const IngredientsContainer = styled.table.attrs({
    className: 'IngredientsContainer',
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoryLabel = styled.div.attrs({
    className: 'NametoIngredientsDivider'
})`
    border-bottom: 1px solid #888989;
    margin: 2px 0;
`;

const NametoCategoriesDivider = styled.div.attrs({
    className: 'NametoIngredientsDivider'
})`
    border-bottom: 1px solid #888989;
    margin: 2px 0;
`;

const CategorytoIngredientsDivider = styled.div.attrs({
    className: 'CategorytoIngredientsDivider'
})`
    border-bottom: 1px solid #888989;
    margin: 2px 0;
`;

export default AddNewMeal;