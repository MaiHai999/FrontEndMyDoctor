import "../../styles/message.css";
import InputMessage from "../../entity/InputMessage";



function Message({handleKeyPress}) {
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
        <h3> Body đây nhé </h3>
      </div>

      <div className="footer-style">
        <InputMessage handleKeyPress={handleKeyPress}/>
      </div>
    </div>
  );
}

export default Message;
