import { Link } from "react-router-dom";
import InputCustom from "../../entity/InputCustom";
import ButtonCustom from "../../entity/ButtonCustom";
import FormCustom from "../../entity/FormCustom";
import ACustom from "../../entity/ACustom";
import ImageCustom from "../../entity/ImgCustom";
import InputPasswordCustom from "../../entity/InputPasswordCustom";
import "../../styles/login.css";

function Login({
  onUsernameChange,
  onPasswordChange,
  onLogin,
  usernameError,
  passwordError,
  onLoginGG,
}) {
  return (
    <div className="login-container">
      <FormCustom>
        <img
          src={process.env.PUBLIC_URL + "/logo.jpg"}
          alt="Logo"
          className="form-logo"
        />

        <div className="list_input">
          <InputCustom
            type="text"
            values=""
            onChange={onUsernameChange}
            placeholder="Nhập email"
          />

          {usernameError && <p className="error-message">{usernameError}</p>}

          <InputPasswordCustom
            type="password"
            values=""
            onChange={onPasswordChange}
            placeholder="Mật khẩu"
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}></div>

        <ButtonCustom type="button" onClick={onLogin} className="button-login">
          Đăng nhập
        </ButtonCustom>

        <div style={{ margin: "10px" }}>
          <ACustom href="https://www.example.com" linkText="Quên mật khẩu?" />
        </div>

        <div style={{ width: "100%" }}>
          <Link to="/regiter">
            <ButtonCustom
              type="button"
              onClick={() => {}}
              className="button-singup"
            >
              Tạo tài khoản
            </ButtonCustom>
          </Link>
        </div>

        <div class="separator"></div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            width: "100%",
          }}
        >
          <ButtonCustom
            type="button"
            onClick={onLoginGG}
            className="button-link"
          >
            <ImageCustom
              src={process.env.PUBLIC_URL + "/google.png"}
              alt="Google Logo"
            />
            Tiếp tục với Google
          </ButtonCustom>

          <ButtonCustom
            type="button"
            onClick={() => console.log("Button clicked")}
            className="button-link"
          >
            <ImageCustom
              src={process.env.PUBLIC_URL + "/facebook.png"}
              alt="Facebook Logo"
            />
            Tiếp tục với Facebook
          </ButtonCustom>
        </div>
      </FormCustom>
    </div>
  );
}

export default Login;
