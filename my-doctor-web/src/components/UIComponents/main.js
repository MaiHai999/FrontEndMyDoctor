
import ConversationContainer from "../Containers/conversationContainer";
import MessageContainer from "../Containers/messageContainer";
import "../../styles/main.css";

function MainUI() {
  return (
    <div className="main-style">
      <ConversationContainer />
      <MessageContainer/>
    </div>
  );
}

export default MainUI;
