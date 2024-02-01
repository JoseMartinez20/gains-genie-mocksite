import React, { useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar.jsx";
import NutritionTable from "../sections/nutritionPage/Table.jsx";
import ProfileHeader from "../sections/dashboardPage/ProfileHeader.jsx";
// import Auth from "../components/auth/auth.jsx";
import { db } from "../config/firebase.js";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ConfettiJS from "./confetti.jsx";
import { Button } from "../sections/landingPage/HeroSection.jsx";

function Nutrition() {
  const [editingMealIndex, setEditingMealIndex] = useState(-1);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [isMealNameConfirmed, setIsMealNameConfirmed] = useState(false);
  const [mealName, setMealName] = useState("");

  const [totalAllMealsCalories, setTotalAllMealsCalories] = useState(0);
  const [totalMealCalories, setTotalMealCalories] = useState(0);
  const [totalMealProtein, setTotalMealProtein] = useState(0);
  const [totalMealCarbs, setTotalMealCarbs] = useState(0);
  const [totalMealFats, setTotalMealFats] = useState(0);

  const [mealsList, setMealsList] = useState([]);
  const [calories, setCalories] = useState(0);
  const [servingSize, setServingSize] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalFatUnit, setTotalFatUnit] = useState("g");
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalCarbsUnit, setTotalCarbsUnit] = useState("g");
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalProteinUnit, setTotalProteinUnit] = useState("g");
  const [totalSaturatedFat, setTotalSaturatedFat] = useState(0);
  const [totalSaturatedFatUnit, setTotalSaturatedFatUnit] = useState("g");
  const [totalTransFat, setTotalTransFat] = useState(0);
  const [totalTransFatUnit, setTotalTransFatUnit] = useState("g");
  const [totalCholesterol, setTotalCholesterol] = useState(0);
  const [totalCholesterolUnit, setTotalCholesterolUnit] = useState("g");
  const [totalSodium, setTotalSodium] = useState(0);
  const [totalSodiumUnit, setTotalSodiumUnit] = useState("g");
  const [totalSugars, setTotalSugars] = useState(0);
  const [totalSugarsUnit, setTotalSugarsUnit] = useState("g");
  const [totalFibers, setTotalFibers] = useState(0);
  const [totalFibersUnit, setTotalFibersUnit] = useState("g");
  const [totalVitaminD, setTotalVitaminD] = useState(0);
  const [totalVitaminDUnit, setTotalVitaminDUnit] = useState("mg");
  const [totalCalcium, setTotalCalcium] = useState(0);
  const [totalCalciumUnit, setTotalCalciumUnit] = useState("mg");
  const [totalIron, setTotalIron] = useState(0);
  const [totalIronUnit, setTotalIronUnit] = useState("mg");
  const [totalPotassium, setTotalPotassium] = useState(0);
  const [totalPotassiumUnit, setTotalPotassiumUnit] = useState("mg");
  const [foodItem, setFoodItem] = useState("");
  const [foodItemSubmitted, setFoodItemSubmitted] = useState(foodItem);
  const [calorieIntake, setCalorieIntake] = useState(2000);
  const [calorieIntakeSubmitted, setCalorieIntakeSubmitted] =
    useState(calorieIntake);
  const [ingredientName, setIngredientName] = useState("ingredientName");
  const [ingredientNameSubmitted, setIngredientNameSubmitted] =
    useState(ingredientName);
  const [quantity, setQuantity] = useState(1);
  const [quantitySubmitted, setQuantitySubmitted] = useState(quantity);

  const auth = getAuth();
  const user = auth.currentUser;
  const mealsCollectionRef = collection(db, "meals");

  // State to track if the auth state is still loading.
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes and manage loading state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User is signed in:", currentUser.uid);
        getMealsList(currentUser.uid); // Call getMealsList here with the user UID
      } else {
        console.log("User is signed out");
      }
      setIsAuthLoading(false); // Move this inside to ensure it's set after checking auth
    });

    // Return unsubscribe function to call on cleanup
    return () => unsubscribe();
  }, []); // Ensure this runs only once on component mount

  const handleMealNameChange = (e) => {
    e.preventDefault();
    setMealName(e.target.value);
  };

  const handleCalorieIntakeChange = (e) => {
    setCalorieIntake(Number(e.target.value));
  };

  const handleCalorieIntakeSubmit = useCallback(
    (e) => {
      e.preventDefault(); // Add this line to prevent default form submission behavior
      setCalorieIntakeSubmitted(calorieIntake);
    },
    [calorieIntake]
  );

  const handleIngredientNameChange = (e) => {
    setIngredientName(e.target.value);
  };

  const handleIngredientNameSubmit = useCallback(
    (e) => {
      e.preventDefault(); // Add this line to prevent default form submission behavior
      setIngredientNameSubmitted(ingredientName);
    },
    [ingredientName]
  );

  const handleQuantityChange = (e) => {
    // e.preventDefault(); // Add this line to prevent default form submission behavior
    setQuantity(Number(e.target.value));
  };

  useEffect(() => {
    console.log("Ingredients List Updated:", ingredientsList);
  }, [ingredientsList]);

  useEffect(() => {
    console.log("Meals List Updated:", mealsList);
  }, [mealsList]);

  useEffect(() => {
    console.log("Meal Name Updated:", mealName);
  }, [mealName]);

  useEffect(() => {
    const totalCalories = mealsList.reduce((sum, meal) => {
      return sum + meal.totalCalories; // assuming meal.totalCalories holds the calorie value for a meal
    }, 0);
    setTotalAllMealsCalories(totalCalories);
  }, [mealsList]);

  // Fetch meals specific to the logged-in user
  const getMealsList = async () => {
    const querySnapshot = await getDocs(
      query(mealsCollectionRef, where("userId", "==", user.uid))
    );
    setMealsList(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  // }, [user, isAuthLoading]); // Depend on user and isAuthLoading state

  const deleteMealFromFirestore = async (mealId) => {
    const mealDocRef = doc(db, "meals", mealId);
    await deleteDoc(mealDocRef);
  };

  const deleteIngredient = useCallback(
    async (item) => {
      // Perform the async operation first
      if (editingMealIndex !== -1 && ingredientsList.length === 1) {
        await deleteMealFromFirestore(mealsList[editingMealIndex].id);
      }

      // Then update the state
      setIngredientsList((currentIngredientsList) => {
        const updatedList = currentIngredientsList.filter(
          (ingredient) => ingredient.id !== item.id
        );

        // If all ingredients are removed, reset the meal
        if (editingMealIndex !== -1 && updatedList.length === 0) {
          // Remove the meal from the meals list
          setMealsList((currentMealsList) =>
            currentMealsList.filter((_, index) => index !== editingMealIndex)
          );
          // Reset editing index and meal name
          setEditingMealIndex(-1);
          setMealName("");
          setIsMealNameConfirmed(false);
        }

        // Update the total values accordingly
        setTotalMealCalories((prevTotal) => prevTotal - item.calories);
        setTotalMealProtein((prevTotal) => prevTotal - item.protein);
        setTotalMealCarbs((prevTotal) => prevTotal - item.carbs);
        setTotalMealFats((prevTotal) => prevTotal - item.fats);

        return updatedList;
      });
    },
    [
      editingMealIndex,
      totalMealCalories,
      totalMealCarbs,
      totalMealFats,
      totalMealProtein,
      editingMealIndex,
    ]
  );

  const addToMeal = useCallback(
    (e) => {
      e.preventDefault();
      setIngredientsList((currentIngredientsList) => {
        const newIngredientsList = [...currentIngredientsList];
        for (let i = 0; i < quantity; i++) {
          newIngredientsList.push({
            id: uuidv4(),
            name: ingredientName,
            calories: calories,
            protein: totalProtein,
            carbs: totalCarbs,
            fats: totalFat,
          });
        }
        return newIngredientsList;
      });
      setTotalMealCalories(
        (currentCalories) => currentCalories + calories * quantity
      );
      setTotalMealCarbs((currentCarbs) => currentCarbs + totalCarbs * quantity);
      setTotalMealFats((currentFats) => currentFats + totalFat * quantity);
      setTotalMealProtein(
        (currentProtein) => currentProtein + totalProtein * quantity
      );
    },
    [
      ingredientName,
      calories,
      totalProtein,
      totalCarbs,
      totalFat,
      quantity,
      totalMealCalories,
      totalMealCarbs,
      totalMealFats,
      totalMealProtein,
    ]
  );

  const handleAddToRecord = (e) => {
    if (isMealNameConfirmed === false) {
      alert("Please set a meal name!");
    } else if (ingredientsList.length === 0) {
      alert("Please add some ingredients to your meal!");
    } else {
      addToRecord(e);
    }
  };

  const addToRecord = useCallback(
    async (e) => {
      e.preventDefault();

      if (!user || isAuthLoading) {
        alert("No user logged in or auth state is still loading.");
        return;
      }

      let filteredMealsList = mealsList.filter(
        (item) => item.name === mealName
      );

      if (filteredMealsList.length > 0 && mealName !== "") {
        alert("Please choose a new name!");
        return;
      }

      const meal = {
        name: mealName,
        ingredients: ingredientsList,
        totalCalories: totalMealCalories,
        totalCarbs: totalMealCarbs,
        totalFat: totalMealFats,
        totalProtein: totalMealProtein,
      };

      if (editingMealIndex === -1) {
        // Adding a new meal
        const docRef = await addDoc(mealsCollectionRef, {
          ...meal,
          userId: user?.uid,
          timestamp: new Date(),
        });
        setMealsList([...mealsList, { ...meal, id: docRef.id }]);
        console.log("Meals List", mealsList);
      } else {
        // Updating an existing meal
        const mealToUpdate = mealsList[editingMealIndex];
        const mealDocRef = doc(db, "meals", mealToUpdate.id);
        await updateDoc(mealDocRef, meal);
        setMealsList(
          mealsList.map((m, index) =>
            index === editingMealIndex ? { ...meal, id: mealToUpdate.id } : m
          )
        );
      }

      // Reset form
      setIngredientsList([]);
      setEditingMealIndex(-1);
      setMealName("");
      setIsMealNameConfirmed(false);
      setTotalMealProtein(0);
      setTotalMealCarbs(0);
      setTotalMealCalories(0);
      setTotalMealFats(0);
    },
    [
      mealsList,
      mealName,
      ingredientsList,
      totalMealCalories,
      totalMealCarbs,
      totalMealFats,
      totalMealProtein,
      editingMealIndex,
      user?.uid,
      mealsCollectionRef,
      user,
      isAuthLoading,
    ]
  );

  const startEditMeal = useCallback(
    (mealId) => {
      const index = mealsList.findIndex((meal) => meal.id === mealId);
      if (index === -1) return;
      setEditingMealIndex(index);
      const mealToEdit = mealsList[index];
      setMealName(mealToEdit.name);
      setIsMealNameConfirmed(true);
      setIngredientsList(mealToEdit.ingredients);
      setTotalMealCalories(mealToEdit.totalCalories);
      setTotalMealCarbs(mealToEdit.totalCarbs);
      setTotalMealFats(mealToEdit.totalFats);
      setTotalMealProtein(mealToEdit.totalProtein);
    },
    [mealsList]
  );

  const handleEditRecord = useCallback(() => {
    // Only update the record if a meal name is set and we are in edit mode
    if (!mealName || editingMealIndex === -1) {
      alert("Please set a meal name and make sure you are in edit mode!");
      return;
    }
    setMealsList((currentMealsList) => {
      const newList = [...currentMealsList];
      // Ensure the index is valid
      if (editingMealIndex >= 0 && editingMealIndex < newList.length) {
        newList[editingMealIndex] = {
          ...newList[editingMealIndex],
          name: mealName,
          ingredients: ingredientsList,
          totalCalories: totalMealCalories,
          totalCarbs: totalMealCarbs,
          totalFat: totalMealFats,
          totalProtein: totalMealProtein,
        };
      }
      return newList;
    });
    // Reset the editing index and form fields
    setEditingMealIndex(-1);
    setIngredientsList([]);
    setMealName("");
    setIsMealNameConfirmed(false);
    setTotalMealProtein(0);
    setTotalMealCarbs(0);
    setTotalMealCalories(0);
    setTotalMealFats(0);
  }, [mealName, ingredientsList, editingMealIndex]);

  const parseUrl =
    "https://api.edamam.com/api/food-database/v2/parser?app_id=69b6377e&app_key=b00815c9e444fe1074bd5999bcf71044" +
    `&ingr=${ingredientName}` +
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
          quantity: 1,
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
        setServingSize(data.totalWeight);
        setTotalFat(data.totalNutrients.FAT.quantity);
        setTotalFatUnit(data.totalNutrients.FAT.unit);
        setTotalCarbs(data.totalNutrients["CHOCDF.net"].quantity);
        setTotalCarbsUnit(data.totalNutrients["CHOCDF.net"].unit);
        setTotalProtein(data.totalNutrients.PROCNT.quantity);
        setTotalProteinUnit(data.totalNutrients.PROCNT.unit);
        setTotalSaturatedFat(data.totalNutrients.FASAT.quantity);
        setTotalSaturatedFatUnit(data.totalNutrients.FASAT.unit);
        setTotalTransFat(data.totalNutrients.FATRN.quantity);
        setTotalTransFatUnit(data.totalNutrients.FATRN.unit);
        setTotalCholesterol(data.totalNutrients.CHOLE.quantity);
        setTotalCholesterolUnit(data.totalNutrients.CHOLE.unit);
        setTotalSodium(data.totalNutrients.NA.quantity);
        setTotalSodiumUnit(data.totalNutrients.NA.unit);
        setTotalCarbs(data.totalNutrients["CHOCDF.net"].quantity);
        setTotalCarbsUnit(data.totalNutrients["CHOCDF.net"].unit);
        setTotalSugars(data.totalNutrients.SUGAR.quantity);
        setTotalSugarsUnit(data.totalNutrients.SUGAR.unit);
        setTotalFibers(data.totalNutrients.FIBTG.quantity);
        setTotalFibersUnit(data.totalNutrients.FIBTG.unit);
        setTotalVitaminD(data.totalNutrients.VITD.quantity);
        setTotalVitaminDUnit(data.totalNutrients.VITD.unit);
        setTotalCalcium(data.totalNutrients.CA.quantity);
        setTotalCalciumUnit(data.totalNutrients.CA.unit);
        setTotalIron(data.totalNutrients.FE.quantity);
        setTotalIronUnit(data.totalNutrients.FE.unit);
        setTotalPotassium(data.totalNutrients.K.quantity);
        setTotalPotassiumUnit(data.totalNutrients.K.unit);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [ingredientNameSubmitted]);

  let nutrient_props = {
    foodItem: foodItemSubmitted,
    totalFatUnit: totalFatUnit,
    totalCarbsUnit: totalCarbsUnit,
    totalProteinUnit: totalProteinUnit,
    totalSaturatedFatUnit: totalSaturatedFatUnit,
    totalTransFatUnit: totalTransFatUnit,
    totalCholesterolUnit: totalCholesterolUnit,
    totalSodiumUnit: totalSodiumUnit,
    totalSugarUnit: totalSugarsUnit,
    totalFiberUnit: totalFibersUnit,
    totalVitaminDUnit: totalVitaminDUnit,
    totalCalciumUnit: totalCalciumUnit,
    totalIronUnit: totalIronUnit,
    totalPotassiumUnit: totalPotassiumUnit,
    calories: calories,
    servingSize: servingSize,
    calorieIntake: calorieIntakeSubmitted,
    totalFat: totalFat,
    totalCarbs: totalCarbs,
    totalProtein: totalProtein,
    totalSaturatedFat: totalSaturatedFat,
    totalTransFat: totalTransFat,
    totalCholesterol: totalCholesterol,
    totalSodium: totalSodium,
    totalSugar: totalSugars,
    totalFiber: totalFibers,
    totalVitaminD: totalVitaminD,
    totalCalcium: totalCalcium,
    totalIron: totalIron,
    totalPotassium: totalPotassium,
  };

  return (
    <NutritionSection>
      {/* <ProfileHeader /> */}
      <NutritionMinusHeader>
        <TableWithSubmit>
          <QuestionPrompt>
            <CalorieQuestion>
              <label>What type of food do you want to search?: </label>
            </CalorieQuestion>
            <CalorieResponse>
              <input
                type="text"
                placeholder={ingredientName}
                onChange={handleIngredientNameChange}
              />
            </CalorieResponse>
            <button onClick={handleIngredientNameSubmit}> Submit </button>
            <br />
          </QuestionPrompt>
          <br />
          <QuestionPrompt>
            <CalorieQuestion>
              <label>What is your calorie goal? </label>
            </CalorieQuestion>
            <CalorieResponse>
              <input
                type="text"
                placeholder={calorieIntake}
                id="calorie_amount_input"
                onChange={handleCalorieIntakeChange}
              />
            </CalorieResponse>
            <button
              id="calorie_amount_button"
              onClick={handleCalorieIntakeSubmit}
            >
              Submit
            </button>
          </QuestionPrompt>

          <NutritionTable props={nutrient_props} />

          <QuantityPrompt>
            <h2> How Many? </h2>
            <QuantityInput>
              <form>
                <input
                  type="number"
                  placeholder="1"
                  onChange={handleQuantityChange}
                />
              </form>
            </QuantityInput>
          </QuantityPrompt>
          <AddToMealButton onClick={addToMeal}>Add to Meal</AddToMealButton>
        </TableWithSubmit>
        <IngredientsAndMeals>
          <TemporaryIngredientLog>
            {!isMealNameConfirmed && (
              <MealNameNotConfirmed>
                <input
                  type="text"
                  placeholder="Type Food Name..."
                  onChange={handleMealNameChange}
                />
                <NutritionButton
                  placeholder="Submit"
                  onClick={() => setIsMealNameConfirmed(true)}
                >
                  Submit
                </NutritionButton>
              </MealNameNotConfirmed>
            )}

            {isMealNameConfirmed && (
              <MealNameConfirmed>
                <h1>{mealName} </h1>
                <EditMealName
                  placeholder="Edit Meal Name"
                  onClick={() => setIsMealNameConfirmed(false)}
                />
              </MealNameConfirmed>
            )}
            <h2> Ingredients </h2>
            <table>
              <th> Name </th>
              <th> Protein(g) </th>
              <th> Carbs(g) </th>
              <th> Fats(g) </th>
              <th> Calories </th>
              {ingredientsList.map((ingredient) => (
                <tr key={ingredient.id}>
                  <td>{ingredient.name}</td>
                  <td> {Math.round(ingredient.protein * 100) / 100} </td>
                  <td> {Math.round(ingredient.carbs * 100) / 100} </td>
                  <td> {Math.round(ingredient.fats * 100) / 100} </td>
                  <td> {Math.round(ingredient.calories * 100) / 100} </td>
                  <td>
                    {" "}
                    <button
                      placeholder="Delete Ingredient"
                      onClick={() => {
                        deleteIngredient(ingredient);
                      }}
                    >
                      {" "}
                    </button>
                  </td>
                </tr>
              ))}
            </table>
            {editingMealIndex === -1 ? (
              <AddToRecordOrUpdateButton onClick={handleAddToRecord}>
                Add to Record
              </AddToRecordOrUpdateButton>
            ) : (
              <AddToRecordOrUpdateButton onClick={handleEditRecord}>
                Update Record
              </AddToRecordOrUpdateButton>
            )}
          </TemporaryIngredientLog>
          <TemporaryMealRecord>
            <h2> Meal Record </h2>
            <table>
              <th> Name </th>
              <th> Total Proteins(g) </th>
              <th> Total Carbs(g) </th>
              <th> Total Fats(g) </th>
              <th> Total Calories </th>
              {mealsList.map((meal) => (
                // <MealContainer>
                <tr key={meal.id}>
                  <td>{meal.name}</td>
                  <td> {Math.round(meal.totalProtein * 100) / 100} </td>
                  <td> {Math.round(meal.totalCarbs * 100) / 100} </td>
                  <td> {Math.round(meal.totalFat * 100) / 100} </td>
                  <td> {Math.round(meal.totalCalories * 100) / 100} </td>
                  <td>
                    {" "}
                    <EditMealButton
                      placeholder="Edit Meal"
                      onClick={() => {
                        startEditMeal(meal.id);
                      }}
                    >
                      {" "}
                    </EditMealButton>
                  </td>
                </tr>
                // </MealContainer>
              ))}
            </table>

            {/* {mealsList.map((meal) => (
              <MealContainer>
                <h5 key={meal.id}>{meal.name}</h5>
                <EditMealButton
                  placeholder="Edit Meal"
                  onClick={() => {
                    startEditMeal(meal.id);
                  }}
                ></EditMealButton>
              </MealContainer>
            ))} */}
          </TemporaryMealRecord>
        </IngredientsAndMeals>
        {/* <MealSection>
          {isAddingMeal && <AddNewMeal/>}
          {isEditingMeal && <EditMeal mealNameChosen = {mealNameChosen}/>}
          {!isAddingMeal && !isEditingMeal && <AddMealButton/>}
          {/* <MealRecord/> */}
        {/* </MealSection> */}
      </NutritionMinusHeader>
    </NutritionSection>
  );
}

const NutritionSection = styled.div.attrs({
  className: "NutritionSection",
})`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

const NutritionMinusHeader = styled.div.attrs({
  className: "NutritionMinusHeader",
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  margin-top: 2%;
`;

const QuestionPrompt = styled.div.attrs({
  className: "SearchPrompt",
})`
  /* background-color: #ffffff; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-radius: 5%;
  max-width: 100%;
  max-height: 30%;
`;

const CalorieQuestion = styled.div.attrs({
  className: "CalorieQuestion",
})`
  width: 40%;
  height: 100%;
  text-align: center;
  color: black;
  background-color: #ffffff;
  font-size: 20px;
  font-family: "Inter";
  font-weight: 400;
  word-wrap: break-word;
`;

const CalorieResponse = styled.div.attrs({
  className: "CalorieResponse",
})`
  width: 30%;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  color: rgba(0, 0, 0, 0.3);
  font-size: 20px;
  font-family: "Inter";
  font-weight: 400;
`;

const TableWithSubmit = styled.div.attrs({
  className: "TableWithSubmit",
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const AddToMealButton = styled.button.attrs({
  className: "AddToMeal",
})`
  width: 20%;
  height: 50%;
  text-align: center;
  background-color: #4572a7;
  color: white;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const AddToRecordOrUpdateButton = styled.button.attrs({
  className: "AddToRecord",
})`
  width: 20%;
  height: 50%;
  text-align: center;
  background-color: #4572a7;
  color: white;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
  font-size: 15px;
  font-family: Inter;
  font-weight: 400;
`;

const EditMealButton = styled.button.attrs({
  className: "EditMealButton",
})`
  background-color: #000000;
  max-width: 10%;
  max-height: 50%;
  border-radius: 5%;
  padding: 5%;
  margin-top: auto;
  margin-bottom: auto;
`;

const IngredientsAndMeals = styled.div.attrs({
  className: "IngredientsAndMeals",
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;
  max-height: 100%;
  padding-right: 5%;
`;

const TemporaryIngredientLog = styled.div.attrs({
  className: "Temp Ingredient Log",
})`
  background-color: #ffffff;
  max-width: 100%;
  max-height: 50%;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10%;
`;

const TemporaryMealRecord = styled.div.attrs({
  className: "Temp Meal Record",
})`
  background-color: #ffffff;
  margin-top: 10%;
  max-width: 100%;
  max-height: 50%;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
`;

const MealContainer = styled.div.attrs({
  className: "MealContainer",
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 5%;
  margin-left: 5%;
`;

const QuantityPrompt = styled.div.attrs({
  className: "QuantityPrompt",
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 100%;
  max-height: 20%;
  margin-top: 5%;
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

const MealNameConfirmed = styled.div.attrs({
  className: "MealNameConfirmed",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const EditMealName = styled.button.attrs({
  className: "SubmitMealName",
})`
  background-color: #000000;
  max-width: 100%;
  max-height: 100%;
`;

const MealNameNotConfirmed = styled.div.attrs({
  className: "MealNameNotConfirmed",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const SubmitMealName = styled.button.attrs({
  className: "SubmitMealName",
})`
  background-color: #000000;
  max-width: 50%;
  max-height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export default Nutrition;

const RecordButton = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `81.67px`,
  height: `24px`,
  left: `399px`,
  top: `8px`,
});

const RecordContainer = styled("div")({
  backgroundColor: `rgba(76, 120, 168, 1)`,
  borderRadius: `10px`,
  width: `81.67px`,
  height: `24px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Record = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `81.67px`,
  height: `20px`,
  position: `absolute`,
  left: `0px`,
  top: `2px`,
});

const NutritionButton = styled(Button)`
  animation: none;
`;
