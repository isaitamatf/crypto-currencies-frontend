import React, {useState, forwardRef } from "react";
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Dropdown } from '../../components';
import { TYPES } from '../../services/constants';

/**
 * @description Filter component
 * @param {Function} setFilter Function that send the filter object
 * @returns {JSX}
 */
export const Filter = ({setFilter}) => {
  // Hook that set the type option
  const [optionSelected, setOptionSelected] = useState(TYPES[0].value);
  // Hook that set the from date
  const [fromDate, setFromDate] = useState(new Date());
  // Hook that set the to date 
  const [toDate, setToDate] = useState(new Date());
  /**
   * @description Function that return the input for the datepicker
   * @returns {JSX}
   */
  const CustomDatepickerInput = forwardRef(({ value, onClick }, ref) => (
    <div className="datepicker" onClick={onClick}>
      <input
        className="datepicker-input"
        type="text"
        ref={ref}
        defaultValue={value}
      />
      <img alt="calendar" src={require('../../assets/img/calendar.png')} />
    </div>
  ));

  /**
   * @description Function that send the filter information to the API
   */
  const handleOnClick = () => {
    setFilter({
      type: optionSelected,
      fromDate: new Date(fromDate).toISOString(),
      toDate: new Date(toDate).toISOString(),
    });
  }
  return (
    <div className="filter">
      <div className="filter-row">
        <label>From date</label>
        <Datepicker
          selected={fromDate}
          startDate={fromDate}
          endDate={toDate}
          onChange={(date) => setFromDate(date)}
          customInput={<CustomDatepickerInput />}
          dateFormat="dd/MM/yyyy"
          selectsStart
        />
      </div>
      <div className="filter-row">
        <label>To date</label>
        <Datepicker
          selected={toDate}
          startDate={fromDate}
          endDate={new Date()}
          onChange={(date) => setToDate(date)}
          customInput={<CustomDatepickerInput />}
          dateFormat="dd/MM/yyyy"
          selectsEnd
          minDate={fromDate}
        />
      </div>
      <div className="filter-row">
        <label>Type</label>
        <Dropdown
          options={TYPES}
          optionSelected={optionSelected}
          setOption={setOptionSelected}
          isMobile
        />
      </div>
      <div className="filter-row flex-end">
        <Button type="secondary" text="Filter" handleOnClick={handleOnClick} />
      </div>
    </div>
  );
}