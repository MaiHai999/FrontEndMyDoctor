import "../styles/message.css";

function MessageLine(props) {
  const { imageUrl, content, isAI } = props;

  return (
    <div className={isAI ? "messline-style1" : "messline-style"}>
      <div className="avatar-style">
        <img
          src={imageUrl}
          alt="logo-user"
          className="rounded-sm"
          style={{ height: "25px", width: "25px" }}
        />
      </div>

      <div className="content-style">{content}</div>
    </div>
  );
}

export default MessageLine;
