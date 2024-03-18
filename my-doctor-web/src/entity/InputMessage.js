import "../styles/EntityStyle.css";
import TextareaAutosize from "react-textarea-autosize";
import React, { useState } from 'react';


function InputMessage(props) {
  const { handleKeyPress } = props;
  const [message, setMessage] = useState('');


  return (
    <TextareaAutosize
      onKeyDown={(event) => {
        handleKeyPress(event , setMessage);
      }}
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      placeholder="Nhập tin nhắn"
      className="input-message-style"
      maxRows={5}
    />
  );
}

export default InputMessage;
