import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Conversation from "../UIComponents/conversation";
import * as callAPI from "../../services/ConversationServices";
import { errorMessages } from "../../Config";





function ConversationContainer(props) {
  const {onNewchat} = props; 
  const [items, setItems] = useState([]);
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
    callAPI.ServicesLogout().then((res) =>{
      navigate("/login");

    }).catch((error) =>{
      if (error.code === "ERR_NETWORK") {
        alert(errorMessages["ERR_NETWORK"]);
      } else {
        alert(errorMessages[error.response.status]);
      }

    });
  };

  return <Conversation onDelete={onDelete} items={items} onLogout={onLogout} onNewchat={onNewchat} />;
}

export default ConversationContainer;
