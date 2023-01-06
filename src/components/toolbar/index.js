import { Button, Dropdown } from '../index';

import "./style.scss"

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-header">
        <span>Exchange</span>
      </div>
      <div className="toolbar-container">
        <div className="toolbar-container-row">
          <label className="toolbar-container-row-label">Currency from</label>
          <Dropdown />
        </div>
        <div className="toolbar-container-row">
          <label className="toolbar-container-row-label">Amount</label>
          <input />
        </div>
        <div className="toolbar-container-row">
          <label className="toolbar-container-row-label">Currency to</label>
          <Dropdown />
        </div>
        <div className="toolbar-container-row">
          <label className="toolbar-container-row-label">Amount</label>
          <input />
        </div>
        <div className="toolbar-container-row">
          <Button
            backgroundColor="#49CD5E"
            color="#FFFFFF"
            text="Save"
          />
        </div>
      </div>
    </div>
  );
};

export { Toolbar };