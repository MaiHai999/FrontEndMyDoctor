import Message from "../UIComponents/message";






function MessageContainer(props) {
  const {isIntro , onEnter} = props; 


  return <Message handleKeyPress={onEnter} isIntro={isIntro} />;
}

export default MessageContainer;
