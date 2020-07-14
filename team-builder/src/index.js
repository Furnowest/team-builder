import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./component/Form";
import User from "./component/User";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
     <div className="header"><h1>User Data</h1></div> 
      <Form users={users} setUsers={setUsers} />
      <User users={users} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);