import "./App.css";
import Login from "./auth/login";

function App() {
  // Gọi hàm innerFunction() từ bên trong hàm App()
  Login();

  // Trả về một phần tử JSX
  return (
    <div>
      <h1>My App</h1>
      <Login />
    </div>
  );
}

export default App;
