import InputCustom from "../../entity/InputCustom";
import ButtonCustom from "../../entity/ButtonCustom";
import FormCustom from "../../entity/FormCustom";
import ImageCustom from "../../entity/ImgCustom";
import InputPasswordCustom from "../../entity/InputPasswordCustom";
import "../../styles/login.css";

function Regiter({
  onUsernameChange,
  onPasswordChange,
  onPasswordChangeVer,
  onRegiter,
  usernameError,
  passwordError,
  passwordErrorVer,
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

          <InputPasswordCustom
            type="password"
            values=""
            onChange={onPasswordChangeVer}
            placeholder="Nhập lại mật khẩu"
          />
          {passwordErrorVer && (
            <p className="error-message">{passwordErrorVer}</p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}></div>

        
          <ButtonCustom
            type="button"
            onClick={onRegiter}
            className="button-singup"
          >
            Tạo tài khoản
          </ButtonCustom>
      

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

export default Regiter;
