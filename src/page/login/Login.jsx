import React from "react";
import GoogleLogin from "react-google-login";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";

import "./login.scss";

export const LoginButton = () => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    localStorage.setItem("User", JSON.stringify(res.profileObj));
    navigate("/");
  };
  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  return (
    <div className="login-container">
      <GoogleLogin
        clientId={process.env.REACT_APP_CLI_ID}
        buttonText="Login"
        render={(renderProps) => (
          <GoogleButton
            type="light"
            onClick={renderProps.onClick}
            style={{
              borderRadius: "50px",
              fontSize: "14px",
              color: "black",
              border: "1px solid rgba(0, 78, 194, 0.8)",
            }}
            className="google-button"
          />
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
