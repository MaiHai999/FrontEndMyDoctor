import "../../styles/message.css";
import InputMessage from "../../entity/InputMessage";
import MessageLine from "../../entity/MessageLine";
import Introduce from "./introduce";

function Message(props) {
  const {handleKeyPress, isIntro , messages} = props;


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
        {isIntro ? (
          <Introduce />
        ) : (
          <>
            {messages.map((message) => (
              <>
                <MessageLine
                  imageUrl={process.env.PUBLIC_URL + "/logo.jpg"}
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
