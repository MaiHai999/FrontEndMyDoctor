import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Conversation from "../UIComponents/conversation";
import Message from "../UIComponents/message";
import * as callAPI from "../../services/ConversationServices";
import { errorMessages } from "../../Config";
import "../../styles/main.css";
import * as url from "../../Config";
import * as hand_token from "../../entity/HandleToken";

function MainContainer() {
  const [isIntro, setIsIntro] = useState(true);
  const [messages, setMessages] = useState([]);
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  // hàm kích hoạt khi bấm nút login
  const navigate = useNavigate();

  //hàm xoá
  const onDelete = (index) => {
    callAPI
      .MessServicesDelConversation(index)
      .then((res) => {
        callAPI
          .MessServicesGetConversation()
          .then((res) => {
            setItems(res.data.map((item) => [item.id, item.title]));
            if (index === activeIndex) {
              setIsIntro(true);
            }
          })
          .catch((error) => {
            if (error.code === "ERR_NETWORK") {
              alert(errorMessages["ERR_NETWORK"]);
            } else {
              alert(errorMessages[error.response.status]);
            }
          });
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          alert(errorMessages["ERR_NETWORK"]);
        } else {
          alert(errorMessages[error.response.status]);
        }
      });
  };

  // call API
  useEffect(() => {
    callAPI
      .MessServicesGetConversation()
      .then((res) => {
        setItems(res.data.map((item) => [item.id, item.title]));
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          alert(errorMessages["ERR_NETWORK"]);
        } else {
          alert(errorMessages[error.response.status]);
        }
      });
  }, []);

  //hàm logout
  const onLogout = () => {
    callAPI
      .ServicesLogout()
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          alert(errorMessages["ERR_NETWORK"]);
        } else {
          alert(errorMessages[error.response.status]);
        }
      });
  };

  // hàm bấm nút new chat
  const onNewchat = () => {
    setIsIntro(true);
    setActiveIndex(-1);
  };

  //hàm này bấm enter
  const onEnter = (event, setMessage) => {
    if (event.key === "Enter") {
      const text = event.target.value;
      if (text.trim().length > 0) {
        event.preventDefault();
        setIsIntro(false);
        setMessage("");
        // callAPI.fetchData(text);
        fetchData(text);
      }
    }
  };

  const fetchData = async (message) => {
    try {
      const newMessage = { human: message, ai: "" };
      let updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      const lastMessage = updatedMessages[updatedMessages.length - 1];

      const token = hand_token.getAccessToken();
      const response = await fetch(`${url.url_chat}?human=${message}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok || !response.body) {
        throw response.statusText;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let data = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }

        const decodedChunk = decoder.decode(value, { stream: true });
        data = data + decodedChunk;
        lastMessage.ai = data;
        updatedMessages = [...updatedMessages]; 
        setMessages(updatedMessages);
      }
    } catch (error) {
      console.log(error);
    }finally{
      console.log("cuoi cung nhé");
    }
  };

  //hàm này nhấn vào
  const handleLiClick = (index) => {
    setActiveIndex(index);
    callAPI
      .MessServicesGetMess(index)
      .then((res) => {
        setIsIntro(false);
        setMessages(res.data);
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          alert(errorMessages["ERR_NETWORK"]);
        } else {
          alert(errorMessages[error.response.status]);
        }
      });
  };

  return (
    <div className="main-style">
      <Conversation
        onDelete={onDelete}
        items={items}
        onLogout={onLogout}
        onNewchat={onNewchat}
        handleLiClick={handleLiClick}
        activeIndex={activeIndex}
      />
      <Message handleKeyPress={onEnter} isIntro={isIntro} messages={messages} />
    </div>
  );
}

export default MainContainer;
