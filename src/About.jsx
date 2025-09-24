import React from "react";
import { useState } from "react";
import { Card } from "./pages/card.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

//links
import Scene1 from "./components/Scene1.jsx";
import Longboard from "./components/Longboard.jsx";

//previews
import truchetPreview from "./assets/previews/preview-500x250px.png";
import telechairster from "./assets/previews/telechairster_250x500px.png";
import dwellciPreview from "./assets/previews/dwellci_preview_2k.png";
import architecturePreview from "./assets/previews/architecture_250x500px.png";
import portraitPreview from "./assets/previews/portrait_250x500px.png";
import headshot from "./assets/previews/truchet_portrait.png";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export function About() {
  let [isOpen, setIsOpen] = useState(false);
  const [ref, isVisible] = useInView({
    threshold: 1.0,
    once: true,
  });

  return (
    <motion.div
      className="flex flex-col items-center justify-items-center min-h-screen px-4 md:px-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
    >
      <img src={headshot} className="py-5 w-md"></img>
      <div className="py-10 px-10">
        <h2 className="text-3xl  font-medium">ABOUT</h2>
        <p className="py-2">
          A recent graduate from Cornell University’s architecture program with
          a focus on computational design and digital fabrication. Both there
          and in his early career, he has experienced working in various fast
          paced design environments. He has experienced working with cross
          functional teams to learn and innovate with digital tools for design
          and manufacturing—especially CAD, CAM, and additive manufacturing.
        </p>

        <h2 className="py-5 text-3xl  font-medium">EXPERIENCE</h2>

        <h3 className="text-xl  font-medium">3D MODELER AND FABRICATOR</h3>
        <h4 className="py-2 text-xl font-light"> Freelance </h4>
        <h4 className=" text-xl font-light"> August 2023 - Present </h4>

        <ul className="py-2">
          <li className="py-2">
            Subdivision modeled functional furniture using novel hybrid 3D
            printing and CAM programming methods with 3-week turnaround
          </li>
          <li className="py-2">
            Drafted precise documents and animations in CAD illustrating the
            assembly and intended usage of products costs
          </li>
          <li className="py-2">
            Rendered products in environments matching their intended uses costs
          </li>
          <li className="py-2">
            Modeled molds for vacuum-forming wood lamination
          </li>
          <li className="py-2">
            Communicated effectively with clients to design, manufacture, and
            post-process toys, ensuring precision and their delight
          </li>
          <li className="py-2">
            Accurately budgeted and estimated for time and material costs
          </li>
        </ul>

        <h3 className="text-xl  font-medium">
          DESIGN TECHNOLOGY AND PRODUCT MANAGEMENT INTERN
        </h3>
        <h4 className="py-2 text-xl font-light">
          {" "}
          Dwellci AI, Architecture AI Startup{" "}
        </h4>
        <h4 className=" text-xl font-light"> May 2025 - August 2025 </h4>

        <ul className="py-2">
          <li className="py-2">
            Led and moderated meetings to discuss vision of proprietary 3D
            design software for architects
          </li>
          <li className="py-2">
            Rapidly learned software development principles to make informed
            decisions with machine learning engineers
          </li>
          <li className="py-2">
            Collaborated with web developers and graphic designers to launch
            company website
          </li>
        </ul>

        <h3 className="text-xl  font-medium">
          GRAPHIC DESIGN AND DIGITAL MARKETING INTERN
        </h3>
        <h4 className="py-2 text-xl font-light">
          {" "}
          eCornell, Digital Marketing{" "}
        </h4>
        <h4 className=" text-xl font-light"> February 2021 - May 2025 </h4>

        <ul className="py-2">
          <li className="py-2">
            Worked with copywriting, design, and marketing teams to deliver
            videos, photos, and custom brochures for web usage with 1-week
            turnaround
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
