import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

import { Home } from "../Home";
import { Featured } from "../Featured";
import { Dwellci } from "../Dwellci";
import { Fabrication } from "../Fabrication";
import { Architecture } from "../Architecture";
import { Multimedia } from "../Multimedia";
import { About } from "../About";

import Scene1 from "../components/Scene1.jsx";
import Longboard from "../components/Longboard.jsx";

{
  /* architecture content */
}
import SpiralLibrary from "../components/SpiralLibrary.jsx";
import SanJuanHill from "../components/SanJuanHill.jsx";
import MemoryscapeCasino from "../components/MemoryscapeCasino.jsx";
import SpiralPavilion from "../components/SpiralPavilion.jsx";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Longboard" element={<Longboard />} />
        <Route path="/Featured" element={<Featured />} />
        <Route path="/Dwellci" element={<Dwellci />} />
        <Route path="/Scene1" element={<Scene1 />} />

        <Route path="/About" element={<About />} />
        <Route path="/Fabrication" element={<Fabrication />} />

        {/* architecture content */}
        <Route path="/Architecture" element={<Architecture />} />
        <Route path="/Architecture/SpiralLibrary" element={<SpiralLibrary />} />
        <Route path="/Architecture/SanJuanHill" element={<SanJuanHill />} />
        <Route
          path="/Architecture/MemoryscapeCasino"
          element={<MemoryscapeCasino />}
        />
        <Route
          path="/Architecture/SpiralPavilion"
          element={<SpiralPavilion />}
        />

        <Route path="/Multimedia" element={<Multimedia />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
