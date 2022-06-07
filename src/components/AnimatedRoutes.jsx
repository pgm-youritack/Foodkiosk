import React from "react";
import Foodkiosk from "../pages/Foodkiosk";
import NotFound from "../pages/NotFound";
import Choose from "../pages/Choose";
import { ROUTES } from "../constants/routes";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={ROUTES.BASE} element={<Choose />}></Route>
        <Route path={ROUTES.KIOSK} element={<Foodkiosk />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
