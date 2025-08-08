import React from "react";
import { useState } from "react";
import { Card } from "./pages/card.jsx";
import telechairster from "./assets/previews/telechairster_250x500px.png";
import truchetPreview from "./assets/previews/preview-500x250px.png";
import dwellciPreview from "./assets/previews/dwellci_preview_2k.png";
import dwellciHero from "./assets/hero/dwellci_hero.png";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Scene1 from "./components/Scene1.jsx";

import { InView } from "react-intersection-observer";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export function Dwellci() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="w-full bg-gray-50 flex flex-col align-middle items-center justify-items-center min-h-screen px-4"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 100, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-3xl h-[10] object-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100, scale: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <img src={dwellciHero}></img>
      </motion.div>

      <motion.div
        className="w-3xl h-[10] object-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <img src={dwellciHero}></img>
      </motion.div>
    </motion.div>
  );
}
