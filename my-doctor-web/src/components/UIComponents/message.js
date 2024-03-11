import "../../styles/message.css";

function Message() {
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
        <h3> fotter nhé </h3>
      </div>
    </div>
  );
}

export default Message;
