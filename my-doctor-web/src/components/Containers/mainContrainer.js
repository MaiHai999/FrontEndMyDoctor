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
  const [isSend, setIsSend] = useState(true);

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
            } else if (error.response.status) {
              alert(errorMessages[error.response.status]);
            } else {
              alert(errorMessages[500]);
            }
          });
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          alert(errorMessages["ERR_NETWORK"]);
        } else if (error.response.status) {
          alert(errorMessages[error.response.status]);
        } else {
          alert(errorMessages[500]);
        }
      });
  };

  const renderItem = () => {
    callAPI
      .MessServicesGetConversation()
      .then((res) => {
        res.data.sort((a, b) => {
          return (
            Date.parse(new Date(b.create_date)) -
            Date.parse(new Date(a.create_date))
          );
        });

        setItems(res.data.map((item) => [item.id, item.title]));
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_NETWORK") {
          alert(errorMessages["ERR_NETWORK"]);
        } else if (error.response.status) {
          alert(errorMessages[error.response.status]);
        } else {
          alert(errorMessages[500]);
        }
      });
  };

  // call API
  useEffect(() => {
    renderItem();
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
        } else if (error.response.status) {
          alert(errorMessages[error.response.status]);
        } else {
          alert(errorMessages[500]);
        }
      });
  };

  // hàm bấm nút new chat
  const onNewchat = () => {
    setIsIntro(true);
    setActiveIndex(-1);
    setMessages([]);
  };

  //hàm này bấm enter
  const onEnter = (event, setMessage) => {
    if (event.key === "Enter") {
      const text = event.target.value;
      if (text.trim().length > 0) {
        event.preventDefault();
        setMessage("");
        setIsIntro(false);
        fetchData(text);
      }
    }
  };

  const fetchData = async (message) => {
    let data = "";
    setIsSend(false);

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
        throw response;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

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
      alert(errorMessages[error.status]);
    } finally {
      // xử lý khi lỗi từ hệ thống mà dữ liệu trả về không lớn hơn không
      setIsSend(true);
      if (data.length > 0) {
        callAPI
          .MessServicesSave(activeIndex, message, data)
          .then((res) => {
            renderItem();
            setActiveIndex(res.data.index);
          })
          .catch((error) => {
            if (error.code === "ERR_NETWORK") {
              alert(errorMessages["ERR_NETWORK"]);
            } else if (
              "response" in error.response &&
              "status" in error.response
            ) {
              alert(errorMessages[error.response.status]);
            } else {
              alert(errorMessages[500]);
            }
          });
      } else {
        const newMessages = messages.slice(0, -1);
        setMessages(newMessages);
      }
    }
  };

  //hàm này là xử lý bấm send hay stop nhé
  const sendStop = (message, setMessage) => {
    if (message.trim().length > 0 && isSend) {
      setIsIntro(false);
      setMessage("");
      fetchData(message);
    } else if (isSend === false) {
      callAPI
        .MessServicesStop()
        .then((res) => {})
        .catch((error) => {
          if (error.code === "ERR_NETWORK") {
            alert(errorMessages["ERR_NETWORK"]);
          } else if (error.response.status) {
            alert(errorMessages[error.response.status]);
          } else {
            alert(errorMessages[500]);
          }
        });
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
        } else if (error.response.status) {
          alert(errorMessages[error.response.status]);
        } else {
          alert(errorMessages[500]);
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
      <Message
        handleKeyPress={onEnter}
        isIntro={isIntro}
        messages={messages}
        isSend={isSend}
        sendStopEnvent={sendStop}
      />
    </div>
  );
}

export default MainContainer;
