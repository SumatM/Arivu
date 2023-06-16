import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
// import { signUp } from "../redux/auth/action";
// import { signInAuth } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const clientId =
  "715608412851-5267tsdhnetciohip2kkqfvb1savkno9.apps.googleusercontent.com"; // Replace with your actual client ID

const GoogleAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSuccess = async (response) => {
    const { credential } = response;
    const decodedToken = jwtDecode(credential);
    const userName = decodedToken.name;
    const userEmail = decodedToken.email;

    //   console.log('Google login successful');
    //   console.log('User email:', userEmail);

    const data = {
      email: userEmail,
      password: userEmail,
      fullName: userName,
    };

    try {
      const isUser = await axios.post(
        "https://deploying-eo0h.onrender.com/auth/signin",
        data
      );
      if (isUser) {
        // await dispatch(signInAuth(data));
        navigate("/dashboard");
      } else {
        throw Error;
      }
    } catch (error) {
      // await dispatch(signUp(data));
      navigate("/dashboard");
    }
  };

  const handleFailure = () => {
    console.log("Google login failed");
    // Handle the failed login response
  };

  // const handleClick = () => {
  //   // Manually trigger the Google sign-in process
  //   const googleButton = document.getElementById("google-login-button");
  //   if (googleButton) {
  //     googleButton.click();
  //   }
  // };

  return (
    <div>
      {/* <h2>Google Signup</h2> */}
      <GoogleOAuthProvider clientId={clientId}>
        {/* <button onClick={handleClick}></button> */}
        <GoogleLogin
          id="google-login-button" // Add an ID to the GoogleLogin component
          onSuccess={handleSuccess}
          onError={handleFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleAuth;
