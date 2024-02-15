import { useState } from "react";
import Header from "./components/header/Header";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    const modesElements = document.getElementsByClassName("modes");
    if (!isChecked) {
      document.body.classList.add("dark-class");
      for (let i = 0; i < modesElements.length; i++) {
        modesElements[i].classList.add("dark-title");
      }
    } else {
      document.body.classList.remove("dark-class");
      for (let i = 0; i < modesElements.length; i++) {
        modesElements[i].classList.remove("dark-title");
      }
    }
  };

  return (
    <div className="toggle-mode">
      <p className="modes">Switch Modes</p>
      <label className="switch">
        <input type="checkbox" onChange={handleCheckboxChange} />
        <span className="slider round"></span>
      </label>

      <Header
        isChecked={isChecked}
        pattern="/images/pattern-divider-desktop.svg"
        dice="/images/icon-dice.svg"
      />
    </div>
  );
}

export default App;
