import React from "react";
import "./styles.css";
import styled from "styled-components";

function NutritionTable({ props }) {

  const percentDailyValueRequirements = {
    fat: 80 / 2000,
    saturatedFat: 20 / 2000,
    transFat: 2.2 / 2000,
    cholesterol: 300 / 2000,
    sodium: 2286 / 2000,
    carbohydrate: 300 / 2000,
    fiber: 28 / 2000,
    sugar: 200 / 2000,
    protein: 50 / 2000,
    vitaminD: 20 / 2000,
    calcium: 1300 / 200,
    iron: 18 / 2000,
    potassium: 3917 / 2000,
  };

  //Actual nutrient size divided by the above ratio times calorie Intake

  function convertToPercent(fieldName, metric, calorieIntake = 2000) {
    console.log(fieldName, (percentDailyValueRequirements[metric] * calorieIntake));
    return ((props[fieldName]) / (percentDailyValueRequirements[metric] * calorieIntake)) * 100
  }

  let totalFatPercent = convertToPercent("totalFat", "fat", props.calorieIntake) 

  let totalSaturatedFatPercent = convertToPercent("totalSaturatedFat", "saturatedFat", props.calorieIntake);
  
  let totalTransFatPercent = convertToPercent("totalTransFat", "transFat", props.calorieIntake);

  let totalCholesterolPercent = convertToPercent("totalTransFat", "transFat", props.calorieIntake);

  let totalSodiumPercent = convertToPercent("totalSodium", "sodium", props.calorieIntake);

  let totalCarbsPercent = convertToPercent("totalCarbs", "carbohydrate", props.calorieIntake);

  let totalFiberPercent = convertToPercent("totalFiber", "fiber", props.calorieIntake);

  let totalSugarPercent =  convertToPercent("totalSodium", "sodium", props.calorieIntake);

  let totalProteinPercent = convertToPercent("totalProtein", "protein", props.calorieIntake);

  let totalVitaminDPercent = convertToPercent("totalVitaminD", "vitaminD", props.calorieIntake);

  let totalCalciumPercent = convertToPercent("totalCalcium", "calcium", props.calorieIntake);

  let totalIronPercent = convertToPercent("totalIron", "iron", props.calorieIntake);

  let totalPotassiumPercent = convertToPercent("totalPotassium", "potassium", props.calorieIntake);

  return (
    <>
      <TableContainer>
        <header>
        <h1 class="bold" style = {{textAlign: 'center'}}>
              {props.foodItem === "foodItem" ? (
                <em>
                  {" "}
                  <p> </p>{" "}
                </em>
              ) : (
                props.foodItem
              )}
        </h1>
        </header>
        <div class="label">
          <header>
            <p class="bold">
              Serving Size 
              {props.calories !== null ? (
                <span>{props.servingSize}g</span>
              ) : (
                <span>0g</span>
              )}
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
                <p></p>
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
              <span>
              <span> Saturated Fat </span>
              <div style={{ display: "inline" }}>
                  {props.totalSaturatedFat !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {props.totalSaturatedFat.toFixed(2)}
                      {props.totalSaturatedFatUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}> 0{props.totalSaturatedFatUnit}</p>
                  )}
              </div>
              </span>
               <span class="bold">
               {totalSaturatedFatPercent !== 0 ? (
                  <p>{totalSaturatedFatPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
                </span>
            </p>

            <div class="divider"></div>

            <p class="indent no-divider">
              <span>
              <span> Trans Fat </span>
              <div style={{ display: "inline" }}>
                  {props.totalTransFat !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {props.totalTransFat.toFixed(2)}
                      {props.totalTransFatUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}> 0{props.totalTransFatUnit}</p>
                  )}
              </div>
              </span>
               <span class="bold">
               {totalTransFatPercent !== 0 ? (
                  <p>{totalTransFatPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
                </span>
            </p>
            <div class="divider"></div>
            <p>
              <span>
                <span class="bold">Cholesterol</span> 
                <div style={{ display: "inline" }}>
                  {props.totalCholesterol !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {" " + props.totalCholesterol.toFixed(2)}
                      {props.totalCholesterolUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}> 0{props.totalCholesterolUnit}</p>
                  )}
              </div>
              </span>{" "}
              <span class="bold">
              {totalCholesterolPercent !== 0 ? (
                  <p>{totalCholesterolPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
              </span>
            </p>
            <p>
              <span>
                <span class="bold">Sodium</span> 
                <div style={{ display: "inline" }}>
                  {props.totalSodium !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {" " + props.totalSodium.toFixed(2)}
                      {props.totalSodiumUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}> 0{props.totalSodiumUnit}</p>
                  )}
              </div>
              </span>{" "}
              <span class="bold">
              {totalSodiumPercent !== 0 ? (
                  <p>{totalSodiumPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
              </span>
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



            <p class="indent no-divider">
              <span>
              <span> Dietary Fiber </span> 
              <div style={{ display: "inline" }}>
              {props.totalFiber !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {" " + props.totalFiber.toFixed(2)}
                      {props.totalFiberUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}>
                      {" "}
                      0{props.totalFiberUnit}
                    </p>
                  )}
                </div>
              </span> {" "}
              <span class="bold">
                {totalFiberPercent !== 0 ? (
                  <p>{totalFiberPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
              </span>
            </p>

            <div class="divider"></div>

            <p class="indent no-divider">
            <span>
              <span> Total Sugars </span> 
              <div style={{ display: "inline" }}>
              {props.totalSugar !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {" " + props.totalSugar.toFixed(2)}
                      {props.totalSugarUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}>
                      {" "}
                      0{props.totalSugarUnit}
                    </p>
                  )}
                </div>
              </span> {" "}
              <span class="bold">
                {totalSugarPercent !== 0 ? (
                  <p>{totalSugarPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
              </span>
            
            </p>
            {/* <div class="divider double-indent"></div>
            <p class="double-indent no-divider">
              Includes 10g Added Sugars <span class="bold">20%</span>
            </p> */}
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
            <span>
                <span>Vitamin D</span>
                <div style={{ display: "inline" }}>
                  {props.totalVitaminD !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {" " + props.totalVitaminD.toFixed(2)}
                      {props.totalVitaminDUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}>
                      {" "}
                      0{props.totalVitaminDUnit}
                    </p>
                  )}
                </div>
              </span>{" "}
              <span>
                {totalVitaminDPercent !== 0 ? (
                  <p>{totalVitaminDPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
              </span>
            </p>
            <p>
            <span>
                <span>Calcium</span>
                <div style={{ display: "inline" }}>
                  {props.totalCalcium !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {" " + props.totalCalcium.toFixed(2)}
                      {props.totalCalciumUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}>
                      {" "}
                      0{props.totalCalciumUnit}
                    </p>
                  )}
                </div>
              </span>{" "}
              <span>
                {totalCalciumPercent !== 0 ? (
                  <p>{totalCalciumPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
              </span>
            </p>
            <p>
            <span>
                <span>Iron</span>
                <div style={{ display: "inline" }}>
                  {props.totalIron !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {" " + props.totalIron.toFixed(2)}
                      {props.totalIronUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}>
                      {" "}
                      0{props.totalIronUnit}
                    </p>
                  )}
                </div>
              </span>{" "}
              <span>
                {totalIronPercent !== 0 ? (
                  <p>{totalIronPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
              </span>
            </p>
            <p class="no-divider">
            <span>
                <span>Potassium</span>
                <div style={{ display: "inline" }}>
                  {props.totalPotassium !== 0 ? (
                    <p style={{ display: "inline" }}>
                      {" " + props.totalPotassium.toFixed(2)}
                      {props.totalPotassiumUnit}
                    </p>
                  ) : (
                    <p style={{ display: "inline" }}>
                      {" "}
                      0{props.totalPotassiumUnit}
                    </p>
                  )}
                </div>
              </span>{" "}
              <span>
                {totalPotassiumPercent !== 0 ? (
                  <p>{totalPotassiumPercent.toFixed(2) + "%"}</p>
                ) : (
                  <p>0%</p>
                )}
              </span>
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

        {/* <QuantityPrompt>
            <h1> How Many? </h1>
            <QuantityInput>
            <input type = "number" placeholder = "1"/>
            </QuantityInput>
        </QuantityPrompt> */}
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
  max-width: 100%;
  max-height: 100%;
  background-color: #ffffff;
  border-radius: 30px;
  margin-top: 5%;
`;

const QuantityPrompt = styled.div.attrs({
    className: "QuantityPrompt",
  })`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

const QuantityInput = styled.div.attrs({
    className: "QuantityInput",
  })`
    max-width: 20%;
    max-height: 40%;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 3%;
  `;

export default NutritionTable;
