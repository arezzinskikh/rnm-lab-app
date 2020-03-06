import React, { useState, useEffect } from "react";

// SERVICES
import userService from "./services/userService";

function App() {
  const [users, setusers] = useState(null);

  useEffect(() => {
    if (!users) {
      getUsers();
    }
  });

  const getUsers = async () => {
    let res = await userService.getAll();
    console.log(res);
    setusers(res);
  };

  const renderUser = user => {
    return (
      <li key={user.id} className="list__item user">
        <a className="user__name" href="/">
          {user.first_name + " " + user.last_name}
        </a>
        <p className="user__title">{user.title}</p>
        <p className="user__age">Age: {user.age}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {users && users.length > 0 ? (
          users.map(user => renderUser(user))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

export default App;
