import React, { useState, useMemo } from "react";
import Header from "./Header";
import { sortAndFilterData } from "./Sort";
import "./Table.css";

const Table = () => {
  const [issues, setIssues] = useState([
    {
      name: "John Doe",
      title: "Internal Issue",
      date: "19/08/2024",
      department: "IT Support",
      priority: "High",
      status: "Pending",
    },
    {
      name: "Themba Zwane",
      title: "Access Issue",
      date: "19/08/2024",
      department: "HR",
      priority: "High",
      status: "Ongoing",
    },
    {
      name: "Andile Zondo",
      title: "Connectivity Issue",
      date: "15/08/2024",
      department: "IT Support",
      priority: "High",
      status: "Ongoing",
    },
    {
      name: "Sara Smith",
      title: "Low Disk Space",
      date: "11/08/2024",
      department: "IT Support",
      priority: "Medium",
      status: "Done",
    },
    {
      name: "John Doe",
      title: "Maintenance Request Setup",
      date: "02/08/2024",
      department: "HR",
      priority: "Low",
      status: "Done",
    },
    {
      name: "Leon Jones",
      title: "Request",
      date: "28/07/2024",
      department: "IT Support",
      priority: "Medium",
      status: "Done",
    },
    {
      name: "John Doe",
      title: "Internal Issue",
      date: "19/07/2024",
      department: "IT Support",
      priority: "High",
      status: "Done",
    },
    {
      name: "John Doe",
      title: "Internal Issue",
      date: "05/07/2024",
      department: "IT Support",
      priority: "Low",
      status: "Done",
    },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [filters, setFilters] = useState({
    date: "",
    status: "",
    department: "",
    urgency: "",
  });
  const [searchTerm, setSearchTerm] = useState(""); // Add search term state

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleSortOption = (sortOption) => {
    switch (sortOption) {
      case "date-old-new":
        setSortConfig({ key: "date", direction: "ascending" });
        break;
      case "date-new-old":
        setSortConfig({ key: "date", direction: "descending" });
        break;
      case "alphabetically":
        setSortConfig({ key: "name", direction: "ascending" });
        break;
      default:
        break;
    }
  };

  const handleFilter = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter.key]: filter.value,
    }));
  };

  const handleSearch = (term) => {
    setSearchTerm(term); // Update search term state
  };

  const filteredAndSortedIssues = useMemo(() => {
    // Apply search filter first
    const searchFilteredIssues = issues.filter((issue) =>
      issue.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Then sort and filter data
    return sortAndFilterData(searchFilteredIssues, sortConfig, filters);
  }, [issues, sortConfig, filters, searchTerm]);

  const handleStatusChange = (index, newStatus) => {
    const updatedIssues = issues.map((issue, i) =>
      i === index ? { ...issue, status: newStatus } : issue
    );
    setIssues(updatedIssues);
  };

  return (
    <div className="table-container">
      <Header
        handleSort={handleSortOption}
        handleFilter={handleFilter}
        handleSearch={handleSearch} // Pass search handler to Header
      />

      <table className="issue-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("title")}>Title</th>
            <th onClick={() => handleSort("date")}>Date</th>
            <th onClick={() => handleSort("department")}>Department</th>
            <th onClick={() => handleSort("priority")}>Priority</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedIssues.map((issue, index) => (
            <tr key={index}>
              <td>{issue.name}</td>
              <td>{issue.title}</td>
              <td>{issue.date}</td>
              <td>{issue.department}</td>
              <td>{issue.priority}</td>
              <td>
                <button className="view-button">View</button>
              </td>
              <td>
                <select
                  value={issue.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  className="status"
                >
                  <option value="Pending">Pending</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Done">Done</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="end-message">End of Issues List</div>
    </div>
  );
};

export default Table;
