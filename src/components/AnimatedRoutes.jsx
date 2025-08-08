import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

import { Featured } from "../Featured";
import { Dwellci } from "../Dwellci";
import Scene1 from "../components/Scene1.jsx";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Featured />} />
        <Route path="/Featured" element={<Featured />} />
        <Route path="/Dwellci" element={<Dwellci />} />
        <Route path="/Scene1" element={<Scene1 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
