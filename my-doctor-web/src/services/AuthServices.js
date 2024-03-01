
import axios from "axios";
import {url_login} from "../Config";




function AuthServices(data){
    return axios.post(url_login,data);
}

export default AuthServices;