
import axios from "axios";
import * as url from "../Config";




export function AuthServices(data){
    return axios.post(url.url_login,data);
}

export function AuthServicesGG(){
    return axios.post(url.url_login_gg);
}

export function AuthServicesRegister(data){
    return axios.post(url.url_register,data);
}

export function AuthServicesVertificationRegister(data){
    return axios.post(url.url_vertification_register,data);
}


export function AuthServicesResetPassWord(data){
    return axios.post(url.url_reset_password,data);
}

export function AuthServicesVertificationResetPassword(data){
    return axios.post(url.url_vertification_reset,data);
}


export function AuthServicesCallBackGG(url){
    return axios.get(url);
}

