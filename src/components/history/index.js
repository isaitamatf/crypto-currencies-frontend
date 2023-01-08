import React from "react";
import { Card, Table } from '../../components';

/**
 * #@description History component
 * @param {boolean} isMobile Boolean that indicates if it is in responsive mode
 * @param {Array} data Array of history exchanges
 * @param {string} sort Column name by sort
 * @param {Function} setSort Function to change the sort column
 * @returns {JSX}
 */
export const History = ({ isMobile, data, sort, setSort }) => {
  /**
   * @description Function that show the cards when the screen is responsive
   * @returns {JSX}
   */
  const showCards = () => {
    const html = data.map((d) => {
      return <Card data={d} />;
    });
    return (
      <div className="cards">
        {html}
      </div>
    )
  };
  return (
    <div className="history">
      <div className="history-header">
        <span className="heading-2">History</span>
      </div>
      <div className="history-container">
        <div className="history-container-row">Filter</div>
        <div className="history-container-row">
          {!isMobile ? (<Table data={data} sort={sort} setSort={setSort} />) : showCards()}
        </div>
      </div>
    </div>
  );
};