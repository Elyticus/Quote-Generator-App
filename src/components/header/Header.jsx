import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Header(props) {
  const [adviceData, setAdviceData] = useState(
    "It's easy to sit up and take notice, what's difficult is getting up and taking action."
  );
  const [adviceId, setAdviceId] = useState("117");
  const [addMode, setAddMode] = useState(false);

  const toggleModes = () => {
    setAddMode(!addMode);
    const headerElement = document.querySelector("header");
    if (headerElement) {
      if (addMode) {
        headerElement.classList.remove("dark-header");
      } else {
        headerElement.classList.add("dark-header");
      }
    }
  };

  function handleChangeButton() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdviceData(data.slip.advice);
        setAdviceId(data.slip.id);
      });
  }

  return (
    <header
      className={props.isChecked ? "header-class" : ""}
      onClick={toggleModes}
    >
      <p className="header-title">
        Advice # <span id="advice-id">{adviceId}</span>
      </p>
      <p className={props.isChecked ? "dark-advice-text" : "advice-text"}>
        &quot;{adviceData}&quot;
      </p>
      <img
        className="pattern-divider"
        src={props.pattern}
        alt="Pattern Divider Desktop"
      />
      <button onClick={handleChangeButton} className="dice">
        <img src={props.dice} alt="Dice image" />
      </button>
    </header>
  );
}
