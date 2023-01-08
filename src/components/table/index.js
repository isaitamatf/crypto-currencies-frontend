import React from "react";
import Moment from 'react-moment';

const Table = ({ data, sort, setSort }) => {
  const checkColumnSorted = (column) => {
    if (sort.search(column) > -1) {
      if (sort.search('-') > -1) {
        return 'down';
      }
      return 'up'
    }
  };

  const handleOnClick = (column) => {
    const columnChecked = checkColumnSorted(column);
    if (columnChecked) {
      if (columnChecked === 'down') {
        setSort(`${column}`);
      } else {
        setSort('');
      }
    } else {
      setSort(`${column}-`);
    }
  }

  const showSortImage = (column) => {
    let html = <></>;
    const columnChecked = checkColumnSorted(column);
    if (columnChecked) {
      html = <img alt={columnChecked} src={require(`../../assets/img/sort-${columnChecked}.png`)} />;
    }
    return html;
  }

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
            <td onClick={() => handleOnClick("date")}>
              {showSortImage("date")}
              Date & Time
            </td>
            <td onClick={() => handleOnClick("currencyFrom")}>
              {showSortImage("currencyFrom")}
              Currency From
            </td>
            <td onClick={() => handleOnClick("amount1")}>
              {showSortImage("amount1")}
              Amount 1
            </td>
            <td onClick={() => handleOnClick("currencyTo")}>
              {showSortImage("currencyTo")}
              Currency To
            </td>
            <td onClick={() => handleOnClick("amount2")}>
              {showSortImage("amount2")}
              Amount 2
            </td>
            <td onClick={() => handleOnClick("type")}>
              {showSortImage("type")}
              Type
            </td>
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
