import { useState } from "react";
import "./styles/root.css";
import Cart from "./views/Cart/Cart";
import CartProvider from "./context/CartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <div className="App">
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
