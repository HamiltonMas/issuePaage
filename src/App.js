import React from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <header className="header">
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
              <i className="fa-solid fa-filter" aria-hidden="true"></i>
              <p> Filter</p>
            </button>
            <button className="sort-button">
              <i className="fa-solid fa-list" aria-hidden="true"></i> Sort
            </button>
          </div>
        </div>
      </header>
      <Table />
    </div>
  );
}

export default App;
