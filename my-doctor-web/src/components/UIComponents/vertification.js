import InputCustom from "../../entity/InputCustom";
import ButtonCustom from "../../entity/ButtonCustom";
import FormCustom from "../../entity/FormCustom";
import "../../styles/login.css";

function Vertification({
  onTokenChange,
  onVertification,
  tokenError,
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
            onChange={onTokenChange}
            placeholder="Nhập code xác thực"
          />

          {tokenError && <p className="error-message">{tokenError}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}></div>

        <ButtonCustom
          type="button"
          onClick={onVertification}
          className="button-singup"
        >
          Xác thực
        </ButtonCustom>

        <div class="separator"></div>

      </FormCustom>
    </div>
  );
}

export default Vertification;
