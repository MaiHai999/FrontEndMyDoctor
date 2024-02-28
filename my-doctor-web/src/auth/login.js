import InputCustom from "../entity/InputCustom";
import ButtonCustom from "../entity/ButtonCustom";
import FormCustom from "../entity/FormCustom";
import './login.css'

function Login() {
  console.log("Vô được ");
  return (
    <div className="login-container">
      <InputCustom
        type="text"
        values=""
        onChange={() => {}}
        placeholder="Nhập email"
      />

      <ButtonCustom type="button" onClick={() => console.log("Button clicked")}>
        Click me
      </ButtonCustom>

      <FormCustom>

      </FormCustom>
    </div>
  );
}

export default Login;
