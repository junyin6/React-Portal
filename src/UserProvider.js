import React, { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider(props) {
  const [id, setId] = useState("1234");
  const [name, setName] = useState("joe");
  const [email, setEmail] = useState("123@gmail.com");
  const logout = () => {
    setId(null);
    setName("");
    setEmail("");
  };
  return (
    <UserContext.Provider value={{ user: { id, name, email }, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;

// class UserProvider extends Component {
//     return(){
//       <UserContext.Provider>
//         {this.props.children}
//       </UserContext.Provider>
//     }
// }
