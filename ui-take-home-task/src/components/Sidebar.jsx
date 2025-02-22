import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h3>Dependencies</h3>
      <label>
        {" "}
        <input type="checkbox" />
        HTTPX
      </label>
      <br />
      <label>
        {" "}
        <input type="checkbox" />
        SQLA1chemy
      </label>
      <br />
      <label>
        {" "}
        <input type="checkbox" />
        Cart CRUD
      </label>
      <br />
      <h3>Database Configurations</h3>
      <input type="text" placeholder="Database User" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button>Save</button>
    </div>
  );
};

export default Sidebar;
