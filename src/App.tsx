// import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav/Nav";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home"
import Menu from "./Pages/Menu/Menu";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
