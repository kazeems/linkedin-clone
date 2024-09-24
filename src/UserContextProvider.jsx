import { createContext, useState } from "react";

const UserContext = createContext({});

function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(() => {
    return JSON.parse(sessionStorage.getItem("userData")) || {};
  });

  const [isLogin, setIsLogin] = useState(false);

  const getLoginData = (data) => {
    setUserData(data);
    setIsLogin(true);
    sessionStorage.setItem("userData", JSON.stringify(data));
  };

  const logoutUser = () => {
    sessionStorage.removeItem("userData");
  };

  return (
    <UserContext.Provider
      value={{ userData, getLoginData, isLogin, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
