import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider.jsx";

function SignInWithGoogle() {
  const { getLoginData } = useContext(UserContext);

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      if (result.user) {
        getLoginData(result.user);
        window.location.href = "/feed";
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
