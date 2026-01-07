import { useState } from "react";
import "./index.css";
import Header from "./component/header";
import UserInput from "./component/userInput";
import Result from "./component/result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 10000,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput =
    userInput.duration >= 1 &&
    userInput.expectedReturn >= 1 &&
    userInput.duration <= 100 &&
    userInput.expectedReturn <= 100 &&
    userInput.initialInvestment <= 10000000 &&
    userInput.annualInvestment <= 100000000;

  function handleInput(inputIdentifier, newValue) {
    setUserInput((prev) => ({
      ...prev,
      [inputIdentifier]: newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeFunc={handleInput} />
      {!isValidInput && <p id="warning">Please Enter Data Under The Limits!</p>}
      {isValidInput && <Result inputValues={userInput} />}
    </>
  );
}

export default App;
