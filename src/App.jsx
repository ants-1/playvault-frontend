import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/sign-up">Sign Up</Link>
      <h1 class="text-3xl text-blue-400 font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
