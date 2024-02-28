import InputCustom from "../entity/InputCustom";
import ButtonCustom from "../entity/ButtonCustom";

function Login() {
  console.log("Vô được ");
  return (
    <div>
      <h1> hai mai</h1>
      <InputCustom
        type="text"
        values=""
        onChange={() => {}}
        placeholder="Nhập email"
      />

      <ButtonCustom type="button" onClick={() => console.log("Button clicked")}>
        Click me
      </ButtonCustom>
    </div>
  );
}

export default Login;
