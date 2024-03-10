import "../styles/conversation.css";
import { MdOutlineClear } from "react-icons/md";



function LiCustom({ index, content, handleDelete }) {
  return (
    <div className="outner-li">
      <li key={index} className="custom-li">
        <div className="inner-content-li">{content}</div>

        <button className="icon-delete" onClick={(event) => { handleDelete(); }} aria-label="Xoá">
          <MdOutlineClear />
        </button>
      </li>
    </div>
  );
}

export default LiCustom;
