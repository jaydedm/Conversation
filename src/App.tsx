import "./App.css";
import { Nav } from "./components/Nav/Nav";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./Pages/Home/Home"
import { Menu } from "./Pages/Menu/Menu";
import { Admin } from "./Pages/Admin/Admin";
import { ReactElement } from "react";

export const App = (): ReactElement => {
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
