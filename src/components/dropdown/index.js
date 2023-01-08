import React, { useState, useEffect, useRef } from "react";

/**
 * @description Function to be called when clicking outside the component
 * @param {Dropdown} ref Dropdown component reference
 * @param {boolean} dropdownIsOpen Boolean indicating if the dropdown is open
 * @param {Function} setDropdownIsOpen Function that opens and closes the dropdown
 */
function useOutsideAlerter(ref, dropdownIsOpen, setDropdownIsOpen) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownIsOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdownIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, dropdownIsOpen, setDropdownIsOpen]);
}

/**
 * @description Dropdown component
 * @param {boolean} isMobile Boolean that indicates if it is in responsive mode
 * @param {string} optionSelected
 * @param {Array} options Array of options
 * @param {Function} setOption
 * @returns {JSX}
 */
export const Dropdown = ({ isMobile, optionSelected, options, setOption }) => {
  // Hook opening and closing dropdown
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  // Dropdown reference
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, dropdownIsOpen, setDropdownIsOpen);
  /**
   * @description Function that show all the options
   * @returns {JSX}
   */
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
          <div
            className={`dropdown-option ${
              optionSelectedFound && optionSelectedFound.value === option.value
                ? "selected"
                : ""
            }`}
            onClick={handleOnClick}
            key={value}
          >
            {!isMobile ? (
              <img alt={name} src={require(`../../assets/img/${value}.png`)} />
            ) : (
              <></>
            )}
            <span>{name}</span>
          </div>
        );
      });
    }
  };
  /**
   * @description Function that show the option selected
   * @returns {JSX}
   */
  const showOption = () => {
    const optionSelectedFound = findOptionSelected();
    if (optionSelectedFound && !dropdownIsOpen) {
      return (
        <>
          {!isMobile ? (
            <img
              alt={optionSelectedFound.name}
              src={require(`../../assets/img/${optionSelectedFound.value}.png`)}
            />
          ) : (
            <></>
          )}
          <span>{optionSelectedFound.name}</span>
        </>
      );
    }
    return <span>Select</span>;
  };

  /**
   * @description Function that find the option selected from the main array
   * @returns {Object}
   */
  const findOptionSelected = () =>
    options.find((o) => o.value === optionSelected);

  return (
    <div className="dropdown" ref={wrapperRef}>
      <div
        className="dropdown-label"
        onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
      >
        {showOption()}
      </div>
      <div className={`dropdown-arrow ${dropdownIsOpen ? "opened" : ""}`}>
        <img alt="arrow" src={require("../../assets/img/arrow.png")} />
      </div>
      <div className="dropdown-options">{showOptions()}</div>
    </div>
  );
};