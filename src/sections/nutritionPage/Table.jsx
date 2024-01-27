import React from "react";
import "./styles.css";
import styled from "styled-components";

function NutritionTable({ props }) {
  const percentDailyValueRequirements = {
    fat: props.totalFat / 2000,
    saturated_fat: 20 / 2000,
    cholesterol: 300 / 2000,
    sodium: 2286 / 2000,
    carbohydrate: props.totalCarbs / 2000,
    sugar: 200 / 2000,
    protein: props.totalProtein / 2000,
    vitaminD: 20 / 2000,
    calcium: 1300 / 200,
    iron: 18 / 2000,
    potassium: 3917 / 2000,
  };

  let totalFatPercent = parseFloat(
    percentDailyValueRequirements.fat * props.calorieIntake
  );
  let totalCarbsPercent = parseFloat(
    percentDailyValueRequirements.carbohydrate * props.calorieIntake
  );
  let totalProteinPercent = parseFloat(
    percentDailyValueRequirements.protein * props.calorieIntake
  );

  return (
    <>
      <TableContainer>
        <div class="label">
          <header>
            <h1 class="bold">
              Nutrition Facts for
              {props.foodItem === "" ? (
                <em>
                  {" "}
                  <p> {String(" insert food item")} </p>{" "}
                </em>
              ) : (
                " " + props.foodItem
              )}
            </h1>
            <div class="divider"></div>
            <p>8 servings per container</p>
            <p class="bold">
              Serving size <span>2/3 cup (55g)</span>
            </p>
          </header>
          <div class="divider large"></div>
          <div class="calories-info">
            <div class="left-container">
              <h2 class="bold small-text">Amount per serving</h2>
              <p>Calories</p>
            </div>
            <span>
              {props.calories !== null ? (
                <p>{props.calories}</p>
              ) : (
                <p>Loading...</p>
              )}
            </span>
          </div>
          <div class="divider medium"></div>
          <div class="daily-value small-text">
            <p class="bold right no-divider">% Daily Value *</p>
            <div class="divider"></div>
            <p>
              <span>
                <span class="bold">Total Fat</span>
                <div style={{ display: "inline" }}>
                  {props.totalFat !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {" " + props.totalFat.toFixed(2)}
                      {props.totalFatUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}> 0{props.totalFatUnit}</p>
                  )}
                </div>
              </span>{" "}
              <span class="bold">
                {totalFatPercent !== 0 ? (
                  <p>{totalFatPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
              </span>
            </p>
            <p class="indent no-divider">
              Saturated Fat 1g <span class="bold">5%</span>
            </p>
            <div class="divider"></div>
            <p class="indent no-divider">
              <span>
                <i>Trans</i> Fat 0g
              </span>
            </p>
            <div class="divider"></div>
            <p>
              <span>
                <span class="bold">Cholesterol</span> 0mg
              </span>{" "}
              <span class="bold">0%</span>
            </p>
            <p>
              <span>
                <span class="bold">Sodium</span> 160mg
              </span>{" "}
              <span class="bold">7%</span>
            </p>
            <p>
              <span>
                <span class="bold">Total Carbohydrate</span>
                <div style={{ display: "inline" }}>
                  {props.totalCarbs !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {" " + props.totalCarbs.toFixed(2)}
                      {props.totalCarbsUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}>
                      {" "}
                      0{props.totalCarbsUnit}
                    </p>
                  )}
                </div>
              </span>{" "}
              <span class="bold">
                {totalCarbsPercent !== 0 ? (
                  <p>{totalCarbsPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
              </span>
            </p>
            <p class="indent no-divider">Dietary Fiber 4g</p>
            <div class="divider"></div>
            <p class="indent no-divider">Total Sugars 12g</p>
            <div class="divider double-indent"></div>
            <p class="double-indent no-divider">
              Includes 10g Added Sugars <span class="bold">20%</span>
            </p>
            <div class="divider"></div>

            <p>
              <span>
                <span class="bold">Protein</span>
                <div style={{ display: "inline" }}>
                  {props.totalProtein !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {" " + props.totalProtein.toFixed(2)}
                      {props.totalProteinUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}>
                      {" "}
                      0{props.totalProteinUnit}
                    </p>
                  )}
                </div>
              </span>{" "}
              <span class="bold">
                {totalProteinPercent !== 0 ? (
                  <p>{totalProteinPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
              </span>
            </p>

            <div class="divider large"></div>
            <p>
              Vitamin D 2mcg <span>10%</span>
            </p>
            <p>
              Calcium 260mg <span>20%</span>
            </p>
            <p>
              Iron 8mg <span>45%</span>
            </p>
            <p class="no-divider">
              Potassium 235mg <span>6%</span>
            </p>
          </div>
          <div class="divider medium"></div>
          <p class="note">
            * This % Daily Value (DV) tells you how much a nutrient in a serving
            of food contributes to a daily diet for your calorie intake of{" "}
            {props.calorieIntake + " "}
            calories.
          </p>
        </div>
      </TableContainer>
    </>
  );
}

const TableContainer = styled.div.attrs({
  className: "TableContainer",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  height: 650px;
  background-color: #ffffff;
  border-radius: 30px;
  margin-top: 5%;
`;

export default NutritionTable;
