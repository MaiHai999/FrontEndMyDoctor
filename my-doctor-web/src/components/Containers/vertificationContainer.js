import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Vertification from "../UIComponents/vertification";
import { errorMessages } from "../../Config";



function VertificationContainer({ vertification }) {
  const [token, setToken] = useState("");
  const [tokenError, setTokenError] = useState("");

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  const validateToken = (token) => {
    if (token.trim() === "") {
      setTokenError("Token không được bỏ rỗng");
      return false;
    } else {
      setTokenError("");
      return true;
    }
  };


  // hàm kích hoạt khi nhấn nút
  const navigate = useNavigate();

  const onVertification = () => {
    const is_token = validateToken(token);

    if (is_token) {
      const data = {
        token: token.trim(),
      };

      vertification(data)
        .then((res) => {
          alert("Xác thực thành công");
          navigate("/login");
        })
        .catch((error) => {
          if (error.code === "ERR_NETWORK") {
            alert(errorMessages["ERR_NETWORK"]);
          } else {
            alert(errorMessages[error.response.status]);
          }

        });
    }
  };

  return (
    <Vertification
      onTokenChange={handleTokenChange}
      onVertification={onVertification}
      tokenError={tokenError}
    />
  );
}

export default VertificationContainer;
