


import "../../styles/conversation.css"
import OlCustom from "../../entity/OlCustom";


function Conversation() {

    const onDelete = () => {
        console.log("okla");
    }

    const items = ['Item 1', 'Item 2', 'It456789'];



    return (
      <div className="conversation-style">
        <h1> hello</h1>
        <OlCustom items={items} onDelete={onDelete} />
        
      </div>
    );
  }
  
  export default Conversation;
  