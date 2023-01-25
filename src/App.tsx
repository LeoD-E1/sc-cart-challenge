import { useState } from "react";
import "./styles/root.css";
import Cart from "./views/Cart/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Cart />
    </div>
  );
}

export default App;
