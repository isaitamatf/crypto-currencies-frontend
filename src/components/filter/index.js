import React, { forwardRef } from "react";
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Dropdown } from '../../components';
import { TYPES } from '../../services/constants';

/**
 * @description Filter component
 * @param {Function} onFilter Function that send the filter object
 * @param {string} type
 * @param {Function} setType
 * @param {string} fromDate
 * @param {Function} setFromDate
 * @param {string} toDate
 * @param {Function} setToDate
 * @returns {JSX}
 */
export const Filter = ({
  onFilter,
  type,
  setType,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
}) => {
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
      <img alt="calendar" src={require("../../assets/img/calendar.png")} />
    </div>
  ));
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
          optionSelected={type}
          setOption={setType}
          isMobile
        />
      </div>
      <div className="filter-row flex-end">
        <Button type="secondary" text="Filter" handleOnClick={onFilter} />
      </div>
    </div>
  );
};