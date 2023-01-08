import React from "react";
import { Card, Table } from '../../components';

const History = ({ isMobile, data, sort, setSort }) => {
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

export { History };
