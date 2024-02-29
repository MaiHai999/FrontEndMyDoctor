import Login from "../UIComponents/login";
import React, { useState } from 'react';
import CallAPI from "../../utils/CallAPI";
import CreateRequestOptions from "../../utils/CreateRequestOptions";

function LoginContainer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  // Hàm xử lý sự kiện khi người dùng thay đổi username
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Hàm xử lý sự kiện khi người dùng thay đổi password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {
    return email.length === 0;
  };

  const validatePassword = (password) => {
    return password.length === 0;
  };

  const onLogin = (event) => {
    
    if (validateEmail(username)) {
      setUsernameError('Email không hợp lệ');
    }
    else{
      setUsernameError('');
    }
    if (validatePassword(password)) {
        setPasswordError('Mật khẩu không hợp lệ');
    }
    else{
      setPasswordError('');
    }

    const data = {
      email: username,
      password: password
    };

    const requestOptions = CreateRequestOptions(data);
    const url = "http://localhost:5000/auth/login";
    CallAPI(url,requestOptions).then(response => {
      console.log('Response JSON:', response.data);
  })
    


  };
 
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
