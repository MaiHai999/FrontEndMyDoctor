import { Routes, Route } from "react-router-dom";

import LoginContainer from "./components/Containers/loginContainer";
import RegiterContainer from "./components/Containers/regiterContainer";
import VertificationContainer from "./components/Containers/vertificationContainer";
import * as loginGG from "./services/LoginGG"
import MainContainer from "./components/Containers/mainContrainer";
import * as validation from "./entity/ValidationForm";
import * as service from "./services/AuthServices";

function App() {
  // Trả về một phần tử JSX
  return (
    <Routes>
      <Route path="/" element={<MainContainer />} />
      <Route
        path="/login"
        element={
          <LoginContainer
            validateEmail={validation.validateEmail}
            validatePassword={validation.validatePassword}
            handleUsernameChange = {validation.handleUsernameChange}
            handlePasswordChange={validation.handlePasswordChange}
            onLoginGG={loginGG.OnLoginGG}
          />
        }
      />
      <Route
        path="/regiter"
        element={
          <RegiterContainer
            isVisible={true}
            nameButton={"Tạo tài khoản"}
            serviceAPI={service.AuthServicesRegister}
            router={"/vertification_register"}
            validateEmail={validation.validateEmail}
            validatePassword={validation.validatePassword}
            validatePasswordVer={validation.validatePasswordVer}
            handleUsernameChange = {validation.handleUsernameChange}
            handlePasswordChange={validation.handlePasswordChange}
            handlePasswordVerChange={validation.handlePasswordVerChange}
            onLoginGG={loginGG.OnLoginGG}

          />
        }
      />
      <Route path="/callback" element={<loginGG.CallbackGG/>} />
      <Route
        path="/vertification_register"
        element={
          <VertificationContainer
            vertification={service.AuthServicesVertificationRegister}
          />
        }
      />

      <Route
        path="/reset_password"
        element={
          <RegiterContainer
            isVisible={false}
            nameButton={"Lấy lại mật khẩu"}
            serviceAPI={service.AuthServicesResetPassWord}
            router={"/vertification_reset"}
          />
        }
      />

      <Route
        path="/vertification_reset"
        element={
          <VertificationContainer
            vertification={service.AuthServicesVertificationResetPassword}
          />
        }
      />
    </Routes>
  );
}

export default App;
