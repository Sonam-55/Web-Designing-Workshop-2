import React from "react";

function App() {
  const users = [
    { id: 1, name: "Sonam", age: 20 },
    { id: 2, name: "Rahul", age: 22 },
    { id: 3, name: "Amit", age: 21 }
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;