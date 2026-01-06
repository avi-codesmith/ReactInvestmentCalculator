import { useState } from "react";

export default function UserInput() {
  useState({
    initialInvestment: 1000,
    annualInvestment: 10000,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <div id="user-input">
      <div class="input-group ">
        <div>
          <label>initial investment</label>
          <input />
        </div>
        <div>
          <label>annual investment</label>
          <input />
        </div>
      </div>
      <div class="input-group ">
        <div>
          <label> expected return</label>
          <input />
        </div>
        <div>
          <label>duration</label>
          <input />
        </div>
      </div>
    </div>
  );
}
