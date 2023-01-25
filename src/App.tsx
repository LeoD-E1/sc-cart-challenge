import { useState } from "react";
import Navbar from "./components/Navbar";
import "./styles/root.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
