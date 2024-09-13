import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <i className="fa-regular fa-clock" aria-hidden="true"></i>
        <div className="header-text">
          <h2>ALL ISSUES</h2>
          <p>See all issues you've been assigned to and worked on</p>
        </div>
      </div>
      <div className="header-right">
        <input type="text" className="search-input" placeholder="search" />
        <i className="fa fa-search search-icon" aria-hidden="true"></i>
        <div className="filter-sort-container">
          <button className="filter-button">
            <i className="fa fa-filter" aria-hidden="true"></i>
            <p> Filter</p>
          </button>
          <button className="sort-button">
            <i className="fa fa-sort" aria-hidden="true"></i> Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
