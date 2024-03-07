import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../UIComponents/login";
import * as service from "../../services/AuthServices";
import * as token from "../../entity/HandleToken";
import { errorMessages } from "../../Config";

function LoginContainer({
  validateEmail,
  validatePassword,
  handleUsernameChange,
  handlePasswordChange,
  onLoginGG,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // hàm kích hoạt khi bấm nút login
  const navigate = useNavigate();

  const onLogin = (event) => {
    const is_email = validateEmail(username, setUsernameError);
    const is_password = validatePassword(password, setPasswordError);

    if (is_email && is_password) {
      const data = {
        email: username.trim(),
        password: password,
      };

      service
        .AuthServices(data)
        .then((res) => {
          token.saveAccessToken(res.data.access_token);
          token.saveRefreshToken(res.data.refresh_token);
          navigate("/");
        })
        .catch((error) => {
          if (error.code === "ERR_NETWORK") {
            alert(errorMessages["ERR_NETWORK"]);
          } else {
            if (error.response.status === 402) {
              setPasswordError(errorMessages[402]);
            } else if (error.response.status === 401) {
              setUsernameError(errorMessages[401]);
            } else if (error.response.status === 500) {
              alert(errorMessages[500]);
            }
          }
        });
    }
  };

  return (
    <Login
      onUsernameChange={(event) => handleUsernameChange(event, setUsername)}
      onPasswordChange={(event) => handlePasswordChange(event, setPassword)}
      onLogin={onLogin}
      usernameError={usernameError}
      passwordError={passwordError}
      onLoginGG={onLoginGG}
    />
  );
}

export default LoginContainer;
