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
          <nav className="">
            
            <ul className="hidden md:flex flex-row [&>*]:mx-5 px-2 z-20">
              <li>
                <Link
                  className="transition delay-50 duration-250 ease-in-out text-black rounded-3xl hover:bg-gray-50/50 bg-blend-multiply px-4 py-2"
                  to="/"
                >
                  Fabrication
                </Link>
              </li>
              <li>
                <Link
                  className="transition delay-50 duration-250 ease-in-out text-black rounded-3xl hover:bg-gray-50/50 bg-blend-multiply px-4 py-2"
                  to="/Featured"
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link
                  className="transition delay-50 duration-250 ease-in-out text-black rounded-3xl hover:bg-gray-50/50 bg-blend-multiply px-4 py-2"
                  to="/Dwellci"
                >
                  Multimedia
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
