import React, { useState } from "react";
import './style.scss'

const Dropdown = (props) => {
  const {
    optionSelected,
    options,
    setOption
  } = props;
  const [ dropdownIsOpen, setDropdownIsOpen ] = useState(false);

  const showOptions = () => {
    if (dropdownIsOpen && options && options.length > 0) {
      return options.map((option) => {
        const { name, value } = option;
        const handleOnClick = () => {
          setOption(value);
          setDropdownIsOpen(false);
        };
        const optionSelectedFound = findOptionSelected();
        return (
          <div className={`dropdown-option ${optionSelectedFound && optionSelectedFound.value === option.value ? 'selected' : ''}`} onClick={handleOnClick} key={value}>
            <img alt={name} src={require(`../../assets/${value}.png`)} />
            <span>{name}</span>
          </div>
        );
      });
    }
  };

  const showOption = () => {
    const optionSelectedFound = findOptionSelected();
    if (optionSelectedFound) {
      return (
        <>
          <img
            alt={optionSelectedFound.name}
            src={require(`../../assets/${optionSelectedFound.value}.png`)}
          />
          <span>{optionSelectedFound.name}</span>
        </>
      );
    }
    return <span>Select</span>; 
  };

  const findOptionSelected = () => options.find((o) => o.value === optionSelected);

  return (
    <div className="dropdown">
      <div
        className="dropdown-label"
        onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
      >
        {showOption()}
      </div>
      <div className={`dropdown-arrow ${dropdownIsOpen ? 'opened' : ''}`}>
        <img alt="arrow" src={require("../../assets/arrow.png")} />
      </div>
      <div className="dropdown-options">{showOptions()}</div>
    </div>
  );
};

export { Dropdown };
