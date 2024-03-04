import Login from "../UIComponents/login";
import React, { useState , useEffect } from 'react';
import * as service from "../../services/AuthServices";
import * as token from "../../entity/HandleToken"
import * as url from "../../Config";



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
  
      service.AuthServices(data).then(res=>{
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
 
  //hàm kích hoạt bấm nút login with gg
  const onLoginGG = (event) =>{
    service.AuthServicesGG().then(res =>{
      window.location.href = res.data.authorization_url ; 
    }).catch(error  =>{
      console.error('Error:', error);
      alert("Thất bại liên kết tài khoản Google");
    });

  };


  useEffect(() => {

    const pathname = window.location.pathname;
    if (pathname === "/callback"){
      const urlParams = new URLSearchParams(window.location.search);
      const param = urlParams.toString()
      const newURl = url.url_login_callback_gg + "?" + param;

      service.AuthServicesCallBackGG(newURl)
      .then(res =>{
        token.saveAccessToken(res.data.access_token)
        token.saveRefreshToken(res.data.refresh_token)
      }).catch(error =>{
        if(error.response.data.error === "Email already exists"){
          alert("Email đã được đăng kí vào hệ thống");
        } else{
          alert(error.response.data.error);
        }
      });

    }
  }, []);

  

  return (
    <Login
      onUsernameChange={handleUsernameChange}
      onPasswordChange={handlePasswordChange}
      onLogin={onLogin}
      usernameError = {usernameError} 
      passwordError = {passwordError}
      onLoginGG= {onLoginGG}
    />
  );
}

export default LoginContainer;
