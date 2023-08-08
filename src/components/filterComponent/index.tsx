import React, { forwardRef, useEffect } from "react";
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ButtonComponent, DropdownComponent } from '..';
import { TYPES } from '../../constants';

export type FilterComponentProps = {
  onFilter: any;
  type: any;
  setType: any;
  fromDate: any;
  setFromDate: any;
  toDate: any;
  setToDate: any;
  isMobile: any;
};

/**
 * @description Filter component
 * @param {Function} onFilter Function that send the filter object
 * @param {string} type
 * @param {Function} setType
 * @param {string} fromDate
 * @param {Function} setFromDate
 * @param {string} toDate
 * @param {Function} setToDate
 * @param {boolean} isMobile
 * @returns {JSX}
 */
const FilterComponent: React.FC<FilterComponentProps> = ({
  onFilter,
  type,
  setType,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  isMobile,
}) => {
  useEffect(() => {
    if (isMobile) {
      setType("all");
      onFilter();
    }
  }, [isMobile, setType, onFilter]);

  /**
   * @description Function that return the input for the datepicker
   * @returns {JSX}
   */
  /*
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
  */
  return (
    <div className="filter">
      <div className="filter-row">
        <label>From date</label>
        <Datepicker
          selected={fromDate}
          startDate={fromDate}
          endDate={toDate}
          onChange={(date: any) => setFromDate(date)}
          //customInput={<CustomDatepickerInput />}
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
          onChange={(date: any) => setToDate(date)}
          //customInput={<CustomDatepickerInput />}
          dateFormat="dd/MM/yyyy"
          selectsEnd
          minDate={fromDate}
        />
      </div>
      {isMobile ? (
        <></>
      ) : (
        <div className="filter-row">
          <label>Type</label>
          <DropdownComponent
            options={TYPES}
            optionSelected={type}
            setOption={setType}
            isMobile
          />
        </div>
      )}
      <div className="filter-row flex-end">
        <ButtonComponent
          type="secondary"
          text="Filter"
          handleOnClick={onFilter}
        />
      </div>
    </div>
  );
};

export { FilterComponent }