import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [sortConfig] = useState({ key: null, direction: null });

  return (
    <div className="App">
      {/* Pass sortConfig to Table */}
      <Table sortConfig={sortConfig} />
    </div>
  );
}

export default App;
