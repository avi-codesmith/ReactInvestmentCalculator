import { calculateInvestmentResults } from "../util/investment";

export default function Result({ inputValues }) {
  const results = calculateInvestmentResults({
    ...inputValues,
    duration: Number(inputValues.duration),
    expectedReturn: Number(inputValues.expectedReturn),
    annualInvestment: Number(inputValues.annualInvestment),
    initialInvestment: Number(inputValues.initialInvestment),
  });

  console.log(results);

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((arr) => {
            return (
              <tr key={arr.year}>
                <td>{arr.year}</td>

                <td>₹ {arr.valueEndOfYear.toFixed(0)}</td>

                <td>₹ {Math.floor(arr.interest)}</td>

                <td>
                  ₹{" "}
                  {Math.floor(
                    arr.valueEndOfYear -
                      (inputValues.initialInvestment +
                        arr.annualInvestment * arr.yearIndex)
                  )}
                </td>

                <td>
                  ₹{" "}
                  {Math.floor(
                    inputValues.initialInvestment +
                      arr.annualInvestment * arr.yearIndex
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
