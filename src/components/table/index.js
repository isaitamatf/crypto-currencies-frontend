import React from "react";
import Moment from 'react-moment';

const Table = ({data}) => {
  const showData = () => {
    if (data && data.length > 0) {
      return data.map((d) => {
        return (
          <tr key={`row-${d.date}-${d.id}`}>
            <td>
              <Moment format="DD-MM-YYYY HH:mm">{d.date}</Moment>
            </td>
            <td>{d.currencyFrom.toUpperCase()}</td>
            <td>{parseFloat(d.amount1)}</td>
            <td>{d.currencyTo.toUpperCase()}</td>
            <td>{parseFloat(d.amount2)}</td>
            <td className={`table-td-${d.type.toLowerCase()}`}>{d.type}</td>
          </tr>
        );
      });
    }
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr className="table-header">
            <td>Date & Time</td>
            <td>Currency From</td>
            <td>Amount 1</td>
            <td>Currency To</td>
            <td>Amount 2</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {showData()}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
