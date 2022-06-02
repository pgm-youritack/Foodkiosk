import "./App.css";
import { Route, Routes } from "react-router-dom";
import Foodkiosk from "./pages/Foodkiosk";
import NotFound from "./pages/NotFound";
import Choose from "./pages/Choose";
import { ROUTES } from "./constants/routes";
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

function App() {
  const [cart, setCart] = useState();
  return (
    <ShoppingCartContext.Provider value={[cart,setCart]}>
      <Routes>
        <Route path={ROUTES.BASE} element={<Choose />}></Route>
        <Route path={ROUTES.KIOSK} element={<Foodkiosk />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ShoppingCartContext.Provider>
  );
}

export default App;
