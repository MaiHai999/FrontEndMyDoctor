import "../../styles/message.css";
import InputMessage from "../../entity/InputMessage";
import MessageLine from "../../entity/MessageLine";
import Introduce from "./introduce";
import * as url from "../../Config";

function Message(props) {
  const { handleKeyPress, isIntro, messages } = props;

  return (
    <div className="message-style">
      <div className="header-style">
        <h3 className="title-style"> My Doctor Plus </h3>

        <img src={url.url_get_avatar} alt="logo-user" className="rounded-sm" />
      </div>

      <div className="body-style">
        {isIntro ? (
          <Introduce />
        ) : (
          <>
            {messages.map((message) => (
              <>
                <MessageLine
                  imageUrl={url.url_get_avatar}
                  content={message.human}
                  isAI={false}
                />
                <MessageLine
                  imageUrl={process.env.PUBLIC_URL + "/logo.jpg"}
                  content={message.ai}
                  isAI={true}
                />
              </>
            ))}
          </>
        )}
      </div>

      <div className="footer-style">
        <InputMessage handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default Message;
