import "./App.css";

import { createContext, useState } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";

export const ShoppingCartContext = createContext();

function App() {
  const [cart, setCart] = useState({});
  return (
    <ShoppingCartContext.Provider value={[cart, setCart]}>
        <AnimatedRoutes></AnimatedRoutes>
    </ShoppingCartContext.Provider>
  );
}

export default App;
