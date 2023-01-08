import React from "react";
import { Table } from '../../components';

const History = ({data}) => {
  return (
    <div className="history">
      <div className="history-header">
        <span className="heading-2">History</span>
      </div>
      <div className="history-container">
        <div className="history-container-row">
          Filter
        </div>
        <div className="history-container-row">
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export { History };
