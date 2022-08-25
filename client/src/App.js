import "./App.css";
import Home from "./Pages/Home";
import AddUser from "./Pages/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
