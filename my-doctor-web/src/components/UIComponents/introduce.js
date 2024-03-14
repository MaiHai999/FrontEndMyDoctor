import "../../styles/introduce.css";

function Introduce() {
  return (
    <div className="intro-style">
      <img
        src={process.env.PUBLIC_URL + "/logo.jpg"}
        alt="Logo"
        className="logo-style"
      />

      <h5 className="title-style-intro">
        Xin chào! Tôi là Safa được huấn luyện để cung cấp các thông tin
        về y khoa.
      </h5>
    </div>
  );
}

export default Introduce;
