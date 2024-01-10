import React, { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import { FcGoogle } from "react-icons/fc";
import styles from "./SignIn.module.css"; // Import the CSS module

function SignIn() {
  const { googleLoginHandler } = useContext(authContext);

  return (
    <main className={`h-screen flex items-center justify-center ${styles.background}`}>
      <div className={`w-full max-w-md p-6 bg-white rounded-md shadow-lg ${styles.signInBox}`}>
        <h1 className="mb-6 text-4xl font-bold text-gray-800">Welcome to TrackXpencer 👋</h1>

        <h3 className="text-2xl text-center text-gray-800 mb-4">Please sign in to continue</h3>

        <button
          onClick={googleLoginHandler}
          className={`flex items-center justify-center gap-2 p-3 mx-auto mt-6 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${styles.googleButton}`}
        >
          <FcGoogle className="text-2xl" /> Sign in with Google
        </button>
      </div>
    </main>
  );
}

export default SignIn;
