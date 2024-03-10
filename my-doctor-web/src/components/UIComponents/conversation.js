import "../../styles/conversation.css";
import OlCustom from "../../entity/OlCustom";
import ButtonCustom from "../../entity/ButtonCustom";
import ButtonAccount from "../../entity/ButtonAccount";

function Conversation() {
  const onDelete = () => {
    console.log("okla");
  };

  const items = ["Item 1", "Item 2", "It456789"];

  return (
    <div className="conversation-style">
      <div className="container-title">
        <h3 className="style-title">Đoạn chat</h3>
        <ButtonCustom
          type="button"
          onClick={() => console.log("Button clicked")}
          className="button-add"
          children="+ New Chat"
        />
      </div>

      <div className="border-ol">
        <OlCustom items={items} onDelete={onDelete} />
      </div>

      <div className="footer">
        <div className="footer1">
          <ButtonAccount
            type="button"
            onClick={() => console.log("Button clicked")}
            children="Mai Hai"
          />
        </div>
      </div>
    </div>
  );
}

export default Conversation;
