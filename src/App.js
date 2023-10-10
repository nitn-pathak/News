import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Home from "./Components/Home";
import Protected from "./Components/Protected";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin navigate={navigate} />} />
        <Route path="/Signup" element={<Signup navigate={navigate} />} />
        <Route
          path="/home"
          element={<Protected Component={Home} />}
        />
      </Routes>
    </div>
  );
}

export default App;
