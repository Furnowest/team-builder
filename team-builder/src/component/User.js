import React from "react";

const User = props => {
  return (
    <div className="user">
      {props.users.map((user, i) => (
        <div className="user-card" key={i}>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
          <h2>{user.role}</h2>
         
        </div>
      ))}
    </div>
  );
};

export default User;
