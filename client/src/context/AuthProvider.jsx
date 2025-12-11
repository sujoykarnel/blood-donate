import React, { Children } from "react";
import AuthContext from "./AuthContext";
import { api } from "../api/api";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  

  const donorSignUp = (signUpData) => {
    console.log("Context:", signUpData);
    return api
      .post("/donors/signUp", signUpData, { withCredentials: true })
      .then((res) => {
        if (res.data) {
          setUser(res.data);
          console.log(res.data);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  const authInfo = { user, donorSignUp };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
