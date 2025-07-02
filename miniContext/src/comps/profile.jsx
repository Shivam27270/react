import React, { useContext } from "react";
import userContext from "../context/userContext";
import UserContextProvider from "../context/UserContextProvider";

function Profile() {
  const {user} = useContext(userContext);

  if (!user) return <div>Please Login</div>;
  return <div>Welcome {user.username}</div>;
}

export default Profile;
