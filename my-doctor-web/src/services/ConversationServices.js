import axios from "axios";
import * as url from "../Config";
import * as hand_token from "../entity/HandleToken";

export function MessServicesGetConversation() {
  const token = hand_token.getAccessToken();
  return axios.get(url.url_get_conversation, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function MessServicesDelConversation(id_conversation) {
  const token = hand_token.getAccessToken();
  return axios.get(
    `${url.url_del_conversation}?id_conversation=${id_conversation}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export function MessServicesGetMess(id_conversation) {
  const token = hand_token.getAccessToken();
  return axios.get(
    `${url.url_get_message}?id_conversation=${id_conversation}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export function ServicesLogout() {
  const token = hand_token.getAccessToken();
  return axios.get(url.url_logout, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function MessServicesSave(id_conversation , human , ai) {
  const token = hand_token.getAccessToken();
  return axios.get(
    `${url.url_save}?id_conversation=${id_conversation}&human=${human}&ai=${ai}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

