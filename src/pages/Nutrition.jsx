import React, { useEffect, useCallback } from "react";
import { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar.jsx";
import NutritionTable from "../sections/nutritionPage/Table.jsx";
import ProfileHeader from "../sections/dashboardPage/ProfileHeader.jsx";

function Nutrition() {
  const quantity = 1;
  const [calories, setCalories] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalFatUnit, setTotalFatUnit] = useState("g");
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalCarbsUnit, setTotalCarbsUnit] = useState("g");
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalProteinUnit, setTotalProteinUnit] = useState("g");

  const [calorieIntake, setCalorieIntake] = useState(0);
  const [calorieIntakeSubmitted, setCalorieIntakeSubmitted] =
    useState(calorieIntake);
  const [foodItem, setFoodItem] = useState("'foodItem'");
  const [foodItemSubmitted, setFoodItemSubmitted] = useState(foodItem);

  const handleCalorieIntakeChange = (e) => {
    e.preventDefault(); // Add this line to prevent default form submission behavior
    setCalorieIntake(e.target.value);
  };

  const handleCalorieIntakeSubmit = useCallback(
    (e) => {
      e.preventDefault(); // Add this line to prevent default form submission behavior
      setCalorieIntakeSubmitted(calorieIntake);
    },
    [calorieIntake]
  );

  const handleFoodItemChange = (e) => {
    e.preventDefault(); // Add this line to prevent default form submission behavior
    setFoodItem(e.target.value);
  };

  const handleFoodItemSubmit = useCallback(
    (e) => {
      e.preventDefault(); // Add this line to prevent default form submission behavior
      setFoodItemSubmitted(foodItem);
    },
    [foodItem]
  );

  const percentDailyValueRequirements = {
    fat: 80 / 2000,
    saturated_fat: 20 / 2000,
    cholesterol: 300 / 2000,
    sodium: 2286 / 2000,
    carbohydrate: 285 / 2000,
    sugar: 200 / 2000,
    protein: 50 / 2000,
    vitaminD: 20 / 2000,
    calcium: 1300 / 200,
    iron: 18 / 2000,
    potassium: 3917 / 2000,
  };

  const parseUrl =
    "https://api.edamam.com/api/food-database/v2/parser?app_id=69b6377e&app_key=b00815c9e444fe1074bd5999bcf71044" +
    `&ingr=${foodItem}` +
    "&nutrition-type=cooking";
  const nutrientUrl =
    "https://api.edamam.com/api/food-database/v2/nutrients?app_id=69b6377e&app_key=b00815c9e444fe1074bd5999bcf71044";

  async function logNutrients() {
    const responseParse = await fetch(parseUrl);
    const dataParse = await responseParse.json();
    const foodId = dataParse.parsed[0].food.foodId;
    console.log("This is the food id", foodId);
    const params = {
      ingredients: [
        {
          quantity: quantity,
          measureURI:
            "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          qualifiers: [],
          foodId: foodId,
        },
      ],
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type based on your API requirements
      },
      body: JSON.stringify(params),
    };
    const responseNutrients = await fetch(nutrientUrl, requestOptions);
    const dataNutrients = await responseNutrients.json();
    return dataNutrients;
  }

  useEffect(() => {
    logNutrients()
      .then((data) => {
        setCalories(data.calories);
        setTotalFat(data.totalNutrients.FAT.quantity);
        setTotalFatUnit(data.totalNutrients.FAT.unit);
        setTotalCarbs(data.totalNutrients["CHOCDF.net"].quantity);
        setTotalCarbsUnit(data.totalNutrients["CHOCDF.net"].unit);
        setTotalProtein(data.totalNutrients.PROCNT.quantity);
        setTotalProteinUnit(data.totalNutrients.PROCNT.unit);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [foodItemSubmitted]);

  let props = {
    foodItem: foodItemSubmitted,
    totalFatUnit: totalFatUnit,
    totalCarbsUnit: totalCarbsUnit,
    totalProteinUnit: totalProteinUnit,
    calories: parseFloat(calories),
    calorieIntake: parseFloat(calorieIntakeSubmitted),
    totalFat: parseFloat(totalFat),
    totalCarbs: parseFloat(totalCarbs),
    totalProtein: parseFloat(totalProtein),
  };

  return (
    <NutritionSection>
      <ProfileHeader />
      <NutritionMinusHeader>
        <TableWithSubmit>
          <SearchPrompts>
            <form>
              <Search>
                <label>What type of food do you want to search?: </label>
                <input
                  type="text"
                  value={foodItem}
                  onChange={handleFoodItemChange}
                />
                <button onClick={handleFoodItemSubmit}> Submit </button>
                <br />
              </Search>
              <Search>
                <br />
                <label>How many calories do you eat in 1 day?: </label>
                <input
                  type="number"
                  value={calorieIntake}
                  id="calorie_amount_input"
                  onChange={handleCalorieIntakeChange}
                />
                <button
                  id="calorie_amount_button"
                  onClick={handleCalorieIntakeSubmit}
                >
                  Submit
                </button>
              </Search>
            </form>
          </SearchPrompts>
          <NutritionTable props={props} />
        </TableWithSubmit>
      </NutritionMinusHeader>
    </NutritionSection>
  );
}

const NutritionSection = styled.div.attrs({
  className: "NutritionSection",
})`
  display: flex;
  flex-direction: column;
`;

const NutritionMinusHeader = styled.div.attrs({
  className: "NutritionMinusHeader",
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 70%;
  margin-top: 2%;
`;

const TableWithSubmit = styled.div.attrs({
  className: "TableWithSubmit",
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SearchPrompts = styled.div.attrs({
  className: "SearchPrompts",
})`
  /* margin-left: auto;
  margin-right: auto; */
  width: 100%;
  height: 10%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px;
`;

const Search = styled.div.attrs({
  className: "Search",
})`
  text-align: center;
`;

export default Nutrition;
