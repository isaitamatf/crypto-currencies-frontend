import React from "react";
import { Card, Table, Pagination, Filter } from '../../components';

/**
 * #@description History component
 * @param {boolean} isMobile Boolean that indicates if it is in responsive mode
 * @param {Array} data Array of history exchanges
 * @param {string} sort Column name by sort
 * @param {Function} setSort Function to change the sort column
 * @param {number} currentPage Value of the current page into the table
 * @param {Function} setCurrentPage Function that change the current page
 * @param {number} total Total number of rows
 * @returns {JSX}
 */
export const History = ({
  isMobile,
  data,
  sort,
  setSort,
  currentPage,
  setCurrentPage,
  total,
  setFilter,
}) => {
  /**
   * @description Function that show the cards when the screen is responsive
   * @returns {JSX}
   */
  const showCards = () => {
    const html = data.map((d) => {
      return <Card data={d} />;
    });
    return <div className="cards">{html}</div>;
  };
  return (
    <div className="history">
      <div className="history-header">
        <span className="heading-2">History</span>
      </div>
      <div className="history-container">
        <div className="history-container-row">
          <Filter setFilter={setFilter} />
        </div>
        <div className="history-container-row">
          {!isMobile ? (
            <>
              <Table data={data} sort={sort} setSort={setSort} />
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                total={total}
              />
            </>
          ) : (
            showCards()
          )}
        </div>
      </div>
    </div>
  );
};