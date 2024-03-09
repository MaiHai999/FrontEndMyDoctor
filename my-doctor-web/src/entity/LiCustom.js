import "../styles/EntityStyle.css";
import { MdDeleteForever } from "react-icons/md";









function LiCustom({ index, content, handleDelete }) {
  return (
    <li key={index} className="custom-li">
      {content}

      <button className="icon-delete" onClick={handleDelete} aria-label="Xoá">
        <MdDeleteForever />
      </button>
    </li>
  );
}

export default LiCustom;
