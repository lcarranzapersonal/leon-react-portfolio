import { Featured } from "./Featured";
import { Layout } from "./pages/Layout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene1 from "./components/Scene1";
import { Scene } from "three";

import telechairster from "./assets/previews/telechairster_250x500px.png";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="bg-gray-50">
      <Router>
        <div className="w-full flex justify-center sticky top-2 z-20">
          <nav className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-4 py-4 text-black text-shadow-lg text-shadow-2xs font-medium rounded-3xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-teal-100/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
            <ul className="flex flex-row [&>*]:mx-5 px-2 z-20">
              <li>
                <Link
                  className="transition delay-50 duration-250 ease-in-out text-black rounded-3xl hover:bg-gray-50/50 bg-blend-multiply px-4 py-2"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="transition delay-50 duration-250 ease-in-out text-black rounded-3xl hover:bg-gray-50/50 bg-blend-multiply px-4 py-2"
                  to="/Featured"
                >
                  3D Journal
                </Link>
              </li>
              <li>
                <Link
                  className="transition delay-50 duration-250 ease-in-out text-black rounded-3xl hover:bg-gray-50/50 bg-blend-multiply px-4 py-2"
                  to="/Dwellci/#"
                >
                  Dwellci
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
