import Login from "../UIComponents/login";
import React, { useState } from 'react';
import AuthServices from "../../services/AuthServices";
import * as token from "../../entity/HandleToken"


function LoginContainer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {
    if(email.length === 0){
      setUsernameError('Email không hợp lệ');
    }else{
      setUsernameError('');
    }
  };

  const validatePassword = (password) => {
    if (password.length === 0){
      setPasswordError('Mật khẩu không hợp lệ');
    }else{
      setPasswordError('');
    }
  };

  // hàm kích hoạt khi bấm nút login
  const onLogin = (event) => {
    
    validateEmail(username)
    validatePassword(password)

    if (username.length !== 0 && password.length !== 0){
      const data = {
        email: username,
        password: password
      };
  
      AuthServices(data).then(res=>{
        token.saveAccessToken(res.data.access_token)
        token.saveRefreshToken(res.data.refresh_token)


      })
      .catch(error =>{
        if (error.response.data.msg === "Incorrect password") {
          setPasswordError('Mật khẩu không đúng');
        }else{
          setUsernameError("Email bạn không được đăng kí trong hệ thống");
        }
        
      });
  

    }

  };
 
  //

  return (
    <Login
      onUsernameChange={handleUsernameChange}
      onPasswordChange={handlePasswordChange}
      onLogin={onLogin}
      usernameError = {usernameError} 
      passwordError = {passwordError}
    />
  );
}

export default LoginContainer;
