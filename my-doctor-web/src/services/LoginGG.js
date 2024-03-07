import * as url from "../Config";
import * as service from "./AuthServices";
import * as token from "../entity/HandleToken";
import { errorMessages } from "../Config";

export function CallbackGG() {
  const pathname = window.location.pathname;
  if (pathname === "/callback") {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.toString();
    const newURl = url.url_login_callback_gg + "?" + param;

    service
      .AuthServicesCallBackGG(newURl)
      .then((res) => {
        token.saveAccessToken(res.data.access_token);
        token.saveRefreshToken(res.data.refresh_token);
        window.location.href = "/";
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          alert(errorMessages["ERR_NETWORK"]);
        } else {
          alert(errorMessages[error.response.status]);
        }
        window.location.href = "/login";
      });
  }
  return null;
}

//hàm kích hoạt bấm nút login with gg
export const OnLoginGG = (event) => {
  service
    .AuthServicesGG()
    .then((res) => {
      window.location.href = res.data.authorization_url;
    })
    .catch((error) => {
      if (error.code === "ERR_NETWORK") {
        alert(errorMessages["ERR_NETWORK"]);
      } else {
        alert("Thất bại liên kết tài khoản Google");
      }
    });
};
