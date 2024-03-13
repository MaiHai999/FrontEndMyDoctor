import Conversation from "../UIComponents/conversation";
import * as callAPI from "../../services/ConversationServices";
import { errorMessages } from "../../Config";
import React, { useState } from "react";


function ConversationContainer() {
  const onDelete = (index) => {
    console.log(index);
  };

  const [items, setItems] = useState([]);

  callAPI
    .MessServicesGetConversation()
    .then((res) => {
        setItems(res.data.map((item) => item.title));
      
    })
    .catch((error) => {
        console.log(error)
      if (error.code === "ERR_NETWORK") {
        alert(errorMessages["ERR_NETWORK"]);
      } else {
        alert(errorMessages[error.response.status]);
      }
    });

    // console.log(items)


  return <Conversation onDelete={onDelete} items={items} />;
}

export default ConversationContainer;
