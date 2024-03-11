import Message from "../UIComponents/message";




function MessageContainer() {
  const onEnter = (event) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed");
    }
  };

  return <Message handleKeyPress={onEnter} />;
}

export default MessageContainer;
