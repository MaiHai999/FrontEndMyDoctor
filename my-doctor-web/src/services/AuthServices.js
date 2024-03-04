
import axios from "axios";
import * as url from "../Config";




export function AuthServices(data){
    return axios.post(url.url_login,data);
}

export function AuthServicesGG(){
    return axios.post(url.url_login_gg);
}


export function AuthServicesCallBackGG(url){
    return axios.get(url);
}
