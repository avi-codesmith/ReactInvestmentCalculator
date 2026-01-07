import { useState } from "react";

export default function UserInput() {
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
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>initial investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleInput("initialInvestment", event.target.value)
            }
          />
        </div>
        <div>
          <label>annual investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleInput("annualInvestment", event.target.value)
            }
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label>expected return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleInput("expectedReturn", event.target.value)
            }
          />
        </div>
        <div>
          <label>duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleInput("duration", event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
