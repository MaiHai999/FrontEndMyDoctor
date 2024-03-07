import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Regiter from "../UIComponents/regiter";
import LoaderCustom from "../../entity/LoaderCustom";
import { errorMessages } from "../../Config";
import "../../styles/login.css";

function RegiterContainer({
  isVisible,
  nameButton,
  serviceAPI,
  router,
  validateEmail,
  validatePassword,
  handleUsernameChange,
  handlePasswordChange,
  handlePasswordVerChange,
  validatePasswordVer,
  onLoginGG,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVer, setPasswordVer] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVerError, setPasswordVerError] = useState("");

  const [loading, setLoading] = useState(false);

  //hàm này khi bấm vào tạo tài khoản
  const navigate = useNavigate();

  const onRegiter = (event) => {
    const is_email = validateEmail(username, setUsernameError);
    const is_password = validatePassword(password, setPasswordError);
    const is_passwordVer = validatePasswordVer(
      passwordVer,
      password,
      setPasswordVerError
    );

    if (is_email && is_password && is_passwordVer) {
      setLoading(true);

      const data = {
        email: username.trim(),
        password: password,
      };

      serviceAPI(data)
        .then((res) => {
          setLoading(false);
          navigate(router);
        })
        .catch((error) => {
          setLoading(false);
          if (error.code === "ERR_NETWORK") {
            alert(errorMessages["ERR_NETWORK"]);
          } else {
            alert(errorMessages[error.response.status]);
          }
        });
    }
  };

  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <LoaderCustom loading={loading} />
        </div>
      ) : null}

      <div className={loading ? "blurred" : "page-container"}>
        <Regiter
          onUsernameChange={(event) => handleUsernameChange(event, setUsername)}
          onPasswordChange={(event) => handlePasswordChange(event, setPassword)}
          onPasswordChangeVer={(event) =>
            handlePasswordVerChange(event, setPasswordVer)
          }
          onRegiter={onRegiter}
          usernameError={usernameError}
          passwordError={passwordError}
          passwordErrorVer={passwordVerError}
          onLoginGG={onLoginGG}
          isVisible={isVisible}
          nameButton={nameButton}
        />
      </div>
    </>
  );
}

export default RegiterContainer;
