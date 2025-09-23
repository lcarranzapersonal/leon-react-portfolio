import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model1 from "./Model1";
import Model2 from "./Model2";
import Model3 from "./Model3";
import Model4 from "./Model4";
import Model5 from "./Model5";
import { Suspense } from "react";
import { Hello } from "../Hello";
import { Splide, SplideSlide } from '@splidejs/react-splide';

//image content
import cover from "../portfolio_import/fabrication/fabrication_portfolio.png";
import longboard1 from "../portfolio_import/fabrication/fabrication_portfolio4.png";
import longboard2 from "../portfolio_import/fabrication/fabrication_portfolio5.png";
import longboard3 from "../portfolio_import/fabrication/fabrication_portfolio6.png";
import longboard4 from "../portfolio_import/fabrication/fabrication_portfolio7.png";
import longboard5 from "../portfolio_import/fabrication/fabrication_portfolio8.png";
import longboard6 from "../portfolio_import/fabrication/fabrication_portfolio9.png";

export default function Longboard() {
  return (
    <div className="flex flex-col items-center max-w-auto h-lvh align-top">

      <div className="sm:w-3xl md:w-vw lg:w-vw w-vw">
        <img src={longboard1}></img>
        <img src={longboard4}></img>
        <img src={longboard3}></img>
        <img src={longboard5}></img>
        <img src={longboard6}></img>
      </div>
      
    </div>
  );
}
