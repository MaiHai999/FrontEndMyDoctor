

import * as url from "../Config";
import * as service from "./AuthServices";
import * as token from "../entity/HandleToken"



function CallbackGG(){
    const pathname = window.location.pathname;
    if (pathname === "/callback"){
      const urlParams = new URLSearchParams(window.location.search);
      const param = urlParams.toString()
      const newURl = url.url_login_callback_gg + "?" + param;

      service.AuthServicesCallBackGG(newURl)
      .then(res =>{
        token.saveAccessToken(res.data.access_token)
        token.saveRefreshToken(res.data.refresh_token)
        window.location.href = "http://localhost:3000/regiter";
      }).catch(error =>{
        if(error.response.data.error === "Email already exists"){
          alert("Email đã được đăng kí vào hệ thống");
        } else{
          alert(error.response.data.error);
        }
        window.location.href = "http://localhost:3000/";

      });
    }
    return null;
}



export default CallbackGG;