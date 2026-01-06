import logo from "../asset/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="App logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
