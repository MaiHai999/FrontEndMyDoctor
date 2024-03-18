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

export const fetchData = async (message) => {
    try {
      const token = hand_token.getAccessToken();

      const response = await fetch(`${url.url_chat}?human=${message}` , {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok || !response.body) {
        throw response.statusText;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }

        const decodedChunk = decoder.decode(value, { stream: true });
        console.log(decodedChunk);
      }
    } catch (error) {
      console.log(error);
    }
  };