import axios from "axios";
import * as url from "../Config";
import * as hand_token from "../entity/HandleToken";




export function MessServicesGetConversation(){
    const token = hand_token.getAccessToken();
    return axios.get(url.url_get_conversation, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
