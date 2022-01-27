import "./App.css";
import { Nav } from "./components/Nav/Nav";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./pages/Home/Home"
import { Menu } from "./pages/Menu/Menu";
import { Admin } from "./pages/Admin/Admin";
import { ReactElement } from "react";
import { SignUp } from "./pages/SignUp/SignUp";

export const App = (): ReactElement => {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}
