import "../styles/EntityStyle.css";
import TextareaAutosize from "react-textarea-autosize";

function InputMessage(props) {
  const { handleKeyPress } = props;

  return (
    <TextareaAutosize
      onKeyDown={(event) => {
        handleKeyPress(event);
      }}
      placeholder="Nhập tin nhắn"
      className="input-message-style"
      maxRows={5}
    />
  );
}

export default InputMessage;
