import "../styles/EntityStyle.css";
import { IoIosLogOut } from "react-icons/io";


function ButtonLogout(props) {
  const { type, onClick, children, className } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button-user ${className}`}
    >
      <IoIosLogOut className="logout-icon-style"/>
      <div style={{marginLeft : "5px"}}>{children}</div>
    </button>
  );
}

export default ButtonLogout;
