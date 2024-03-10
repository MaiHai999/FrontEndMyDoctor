import "../styles/EntityStyle.css";

function ButtonAccount(props) {
  const { type, onClick, children, className } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button-user ${className}`}
    >
      <img src={process.env.PUBLIC_URL + "/logo.jpg"} className="rounded-sm" />
      <div style={{marginLeft : "5px"}}>{children}</div>
    </button>
  );
}

export default ButtonAccount;
