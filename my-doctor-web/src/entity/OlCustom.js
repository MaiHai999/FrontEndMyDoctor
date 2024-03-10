import "../styles/conversation.css";
import LiCustom from "./LiCustom";

function OlCustom(props) {

  const {items,onDelete} = props;

  return (
    <ol className="ol-style">
      {items.map((item, index) => (
        <LiCustom key={index} content={item} handleDelete={onDelete} />
      ))}
    </ol>
  );
}

export default OlCustom;
