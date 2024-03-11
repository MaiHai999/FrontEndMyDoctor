import "../styles/conversation.css";
import { MdOutlineClear } from "react-icons/md";



function LiCustom(props) {
  const { index, content, handleDelete , isActive , handleInnerContentClick} = props;

  return (
    <div className="outner-li">

      <li key={index} className={isActive ? "custom-li-active" : "custom-li"} >
        <div className="inner-content-li" onMouseDown={handleInnerContentClick} >{content}</div>

        <button className="icon-delete" onClick={handleDelete} aria-label="Xoá">
          <MdOutlineClear />
        </button>
      </li>
    </div>
  );
}

export default LiCustom;
