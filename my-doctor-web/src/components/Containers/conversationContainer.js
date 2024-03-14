import Conversation from "../UIComponents/conversation";
import * as callAPI from "../../services/ConversationServices";
import { errorMessages } from "../../Config";
import React, { useState, useEffect } from "react";

function ConversationContainer() {
  const [items, setItems] = useState([]);

  //hàm xoá
  const onDelete = (index) => {
    console.log(index);
  };

  // call API
  useEffect(() => {
    callAPI
      .MessServicesGetConversation()
      .then((res) => {
        setItems(res.data.map((item) => [item.id , item.title]));
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_NETWORK") {
          alert(errorMessages["ERR_NETWORK"]);
        } else {
          alert(errorMessages[error.response.status]);
        }
      });
  }, []);

  return <Conversation onDelete={onDelete} items={items} />;
}

export default ConversationContainer;
