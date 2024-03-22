import "../styles/EntityStyle.css";
import TextareaAutosize from "react-textarea-autosize";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { FaRegStopCircle } from "react-icons/fa";

function InputMessage(props) {
  const { handleKeyPress, isSend ,sendStopEnvent} = props;
  const [message, setMessage] = useState("");

  return (
    <div style={{ position: "relative" }}>
      <TextareaAutosize
        onKeyDown={(event) => {
          handleKeyPress(event, setMessage);
        }}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Nhập tin nhắn"
        className="input-message-style"
        maxRows={5}
      />
      <button
        onClick={() => {sendStopEnvent(message , setMessage)}}
        className="button-send-style"
      >
        {isSend ? (
          <IoSend style={{ fontSize: "1.5em" }} />
        ) : (
          <FaRegStopCircle className="icon" />
        )}
      </button>
    </div>
  );
}

export default InputMessage;
