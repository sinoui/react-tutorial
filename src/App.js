import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

export default function App() {
  const [users, setUsers] = useState([]);

  const removeUser = index => {
    setUsers(users.filter((user, i) => i !== index));
  };

  const addUser = user => {
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <h1>React练习</h1>
      <div>添加有姓名和工作的人员到列表中。</div>
      <Table items={users} removeItem={removeUser} />
      <h2>添加人员</h2>
      <Form handleSubmit={addUser} />
    </div>
  );
}
