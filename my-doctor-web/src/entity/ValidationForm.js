



export const validateEmail = (email , setUsernameError) => {
  if (email.trim().length === 0) {
    setUsernameError("Email không hợp lệ");
    return false;
  } else {
    setUsernameError("");
    return true;
  }
};

export const validatePassword = (password , setPasswordError) => {
  if (password.length === 0) {
    setPasswordError("Mật khẩu không hợp lệ");
    return false;
  } else {
    setPasswordError("");
    return true;
  }
};


export const handleUsernameChange = (event , setUsername) => {
  setUsername(event.target.value);
};

export const handlePasswordChange = (event , setPassword) => {
  setPassword(event.target.value);
};


export const handlePasswordVerChange = (event , setPasswordVer) => {
  setPasswordVer(event.target.value);
};

export const validatePasswordVer = (passwordVer, password ,setPasswordVerError) => {
  if (passwordVer.length === 0) {
    setPasswordVerError("Không được bỏ trống");
    return false;
  } else if (password !== passwordVer) {
    setPasswordVerError("Mật khẩu không khớp");
    return false;
  } else {
    setPasswordVerError("");
    return true;
  }
};
