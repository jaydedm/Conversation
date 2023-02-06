import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Menu } from "./Pages/Menu/Menu";
import { Admin } from "./Pages/Admin/Admin";
import { ReactElement } from "react";
import { NavButton } from "./components/navButton/NavButton";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/Theme";
import { History } from "./Pages/History/historyTimeline";

export const App = (): ReactElement => {
  const footerStyles: any = {
    bottom: "0",
    width: "100%",
    position: "absolute",
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Nav />
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/history" element={<History/>} />
          </Routes>
        </BrowserRouter>
        {/* <footer style={footerStyles}>
          <NavButton page="/admin" description="admin" secondary></NavButton>
        </footer> */}
      </ThemeProvider>
    </div>
  );
};
