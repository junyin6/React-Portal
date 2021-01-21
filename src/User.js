import React from "react";
import { UserContext } from "./UserContext";

function User() {
  return (
    <UserContext.Consumer>
      {(context) => (
        <div>
          <h1>User info</h1>
          <h3>{context.user.name}</h3>
          <button onClick={context.logout}>logout</button>
        </div>
      )}
    </UserContext.Consumer>
  );
}

export default User;
