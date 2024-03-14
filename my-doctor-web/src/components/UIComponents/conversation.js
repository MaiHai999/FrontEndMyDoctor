import "../../styles/conversation.css";
import OlCustom from "../../entity/OlCustom";
import ButtonCustom from "../../entity/ButtonCustom";
import ButtonLogout from "../../entity/ButtonLogout";


function Conversation(props) {
  const { onDelete, items , onLogout , onNewchat } = props;

  return (
    <div className="conversation-style">
      <div className="container-title">
        <h3 className="style-title">Đoạn chat</h3>
        <ButtonCustom
          type="button"
          onClick={onNewchat}
          className="button-add"
          children="+ New Chat"
        />
      </div>

      <div className="border-ol">
        <OlCustom items={items} onDelete={onDelete} />
      </div>

      <div className="footer">
        <div className="footer1">
          <ButtonLogout
            type="button"
            onClick={onLogout}
            children="Đăng xuất"
          />
        </div>
      </div>
    </div>
  );
}

export default Conversation;
