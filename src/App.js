import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
