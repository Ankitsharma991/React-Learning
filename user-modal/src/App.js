import React, { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id : Math.random().toString() }];
    });
  }; 

  return (
    <div>
      <h1 style={{color:"red", display:"flex", justifyContent:"center", marginTop:"50px"}}>Project 1 : User modal</h1>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
