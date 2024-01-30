import styled from "styled-components";
import NavBar from "./NavBar";
import {
  LargeTitleStyle,
  NormalTextStyle,
  TitleStyle,
} from "../styles/postAuthStyles";
import MealHistorySection from "../sections/historyPage/MealHistorySection";
import WorkoutHistorySection from "../sections/historyPage/WorkoutHistorySection";

function HistoryPage() {
  return (
    <FlexBoxAndRow>
      {/* <NavBar /> */}
      <HistoryDayContainer>
        <Title>Saturday, January 3rd</Title>

        {/* WORKOUT HISTORY */}
        <Subtitle>Workout History</Subtitle>
        <WorkoutHistorySection />

        {/* MEALS HISTORY */}
        <Subtitle>Meal History</Subtitle>
        <MealHistorySection />
        <MealHistorySection />
      </HistoryDayContainer>
    </FlexBoxAndRow>
  );
}
export default HistoryPage;

const FlexBoxAndRow = styled.div.attrs({
  className: "FlexBoxAndRow",
})`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;
const HistoryDayContainer = styled.div.attrs({
  className: "History Day Container",
})`
  background-color: white;
  position: relative;
  left: 25%;
  color: black;
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  padding-top: 10px;
  gap: 7px;
  align-items: center;
`;

//TEXT STYLES BELOW!
const Title = styled(LargeTitleStyle)`
  color: #4572a7;
  margin: 15px 0px;
`;
const Subtitle = styled(TitleStyle)`
  display: flex;
  font-weight: normal;
  padding: 0 30px;
  position: relative;
  width: 100%;
  margin: 10px 0 13px 0;
`;
