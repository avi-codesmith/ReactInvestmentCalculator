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
      <Result inputValues={userInput} />
    </>
  );
}

export default App;
