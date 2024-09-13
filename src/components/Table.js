import React from "react";
import { useState } from "react";
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

  const handleStatusChange = (index, newStatus) => {
    const updatedIssues = issues.map((issue, i) =>
      i === index ? { ...issue, status: newStatus } : issue
    );
    setIssues(updatedIssues);
  };

  return (
    <div className="table-container">
      <table className="issue-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Department</th>
            <th>Priority</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue, index) => (
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
/*
const Table = () => {
  const issues = [
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
  ];

  return (
    <div className="table-container">
      <table className="issue-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Issue title</th>
            <th>Date reported</th>
            <th>Department</th>
            <th>Priority level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue, index) => (
            <tr key={index}>
              <td>{issue.name}</td>
              <td>{issue.title}</td>
              <td>{issue.date}</td>
              <td>{issue.department}</td>
              <td>{issue.priority}</td>
              <td>
                <button className="view-button">View</button>
                <span className="status">{issue.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="end-message">You have reached the end</div>
    </div>
  );
};

export default Table;*/
