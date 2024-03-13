import "../../styles/message.css";
import InputMessage from "../../entity/InputMessage";
import MessageLine from "../../entity/MessageLine";

function Message({ handleKeyPress }) {
  return (
    <div className="message-style">
      <div className="header-style">
        <h3 className="title-style"> My Doctor Plus </h3>

        <img
          src={process.env.PUBLIC_URL + "/logo.jpg"}
          alt="logo-user"
          className="rounded-sm"
        />
      </div>

      <div className="body-style">
        <MessageLine
          imageUrl={process.env.PUBLIC_URL + "/logo.jpg"}
          content={"hi"}
          isAI={false}
        />

        <MessageLine
          imageUrl={process.env.PUBLIC_URL + "/logo.jpg"}
          content={"bạn khoẻ chứ "}
          isAI={true}
        />
      </div>

      <div className="footer-style">
        <InputMessage handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default Message;
