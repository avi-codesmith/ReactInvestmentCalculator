export default function UserInput({ userInput, onChangeFunc }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>initial investment (up to 10cr)</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeFunc("initialInvestment", event.target.value)
            }
          />
        </div>
        <div>
          <label>annual investment(up to 100cr)</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeFunc("annualInvestment", event.target.value)
            }
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label>expected return (1 - 100%)</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeFunc("expectedReturn", event.target.value)
            }
          />
        </div>
        <div>
          <label>duration(1 - 100years)</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeFunc("duration", event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
