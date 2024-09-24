import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider.jsx";
import { useNavigate } from "react-router-dom";

function SignInWithGoogle() {
  const { getLoginData } = useContext(UserContext);
  const navigate = useNavigate();

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      if (result.user) {
        getLoginData(result.user);
        navigate("/feed");
      }
    });
  }
  return (
    <button onClick={googleLogin}>
      <img src="/images/google.svg" alt="" />
      Sign in with Google
    </button>
  );
}

export default SignInWithGoogle;
