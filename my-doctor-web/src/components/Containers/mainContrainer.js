import React, { useState } from "react";
import ConversationContainer from "./conversationContainer";
import MessageContainer from "./messageContainer";
import "../../styles/main.css";



function MainContainer() {
  const [isIntro, setIsIntro] = useState(true);

  // hàm bấm nút new chat
  const onNewchat = () => {
    setIsIntro(true);
  };

  //hàm này bấm enter
  const onEnter = (event) => {
    if (event.key === "Enter") {
      setIsIntro(false);
    }
  };

  return (
    <div className="main-style">
      <ConversationContainer onNewchat={onNewchat} />
      <MessageContainer isIntro={isIntro} onEnter={onEnter} />
    </div>
  );
}

export default MainContainer;
