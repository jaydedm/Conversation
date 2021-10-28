import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <img src={logo} className="App-logo" alt="logo" />
      <p>Welcome to Conversation, Chris and Dave!</p>
    </div>
  );
}

export default App;
