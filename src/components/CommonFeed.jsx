import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { UserContext } from "../UserContextProvider.jsx";
import { useNavigate } from "react-router-dom";

function CommonFeed() {
  const { userData, getLoginData, logoutUser } = useContext(UserContext);
  const [loggingOut, setloggingOut] = useState(false);
  const navigate = useNavigate();

  console.log(userData);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      getLoginData(user);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      setloggingOut(true);

      await auth.signOut();
      logoutUser();
      Navigate("/");
    } catch (error) {
      console.error("Error logging out: ", error.message);
    }
  }

  return (
    <>
      <div>Your Linkedin Feed</div>
      <p className="text-green-900 text-xl">
        Welcome to your personal professional cloned LinkedIn,{" "}
        {userData?.displayName}
      </p>

      <p>Please bear with us, this page is under development</p>

      <button onClick={handleLogout}>
        Click here to <b>Logout</b>
      </button>

      {loggingOut && (
        <div>
          <p>Logging Out...</p>
        </div>
      )}
    </>
  );
}

export default CommonFeed;
