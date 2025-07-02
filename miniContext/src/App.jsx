import Login from "./comps/login";
import Profile from "./comps/profile";
import UserContextProvider from "./context/UserContextProvider";

import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
