import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model1 from "./Model1";
import Model2 from "./Model2";
import Model3 from "./Model3";
import Model4 from "./Model4";
import Model5 from "./Model5";
import { Suspense } from "react";
import { Hello } from "../Hello";
import { Splide, SplideSlide } from "@splidejs/react-splide";

//image content
import spiral1 from "../portfolio_import/architecture/architecture15.png";
import spiral2 from "../portfolio_import/architecture/architecture16.png";
import spiral3 from "../portfolio_import/architecture/architecture17.png";
import spiral4 from "../portfolio_import/architecture/architecture18.png";
import spiral5 from "../portfolio_import/architecture/architecture19.png";
import spiral6 from "../portfolio_import/architecture/architecture20.png";
import spiral7 from "../portfolio_import/architecture/architecture21.png";
import spiral8 from "../portfolio_import/architecture/architecture22.png";
import spiral9 from "../portfolio_import/architecture/architecture23.png";
import spiral10 from "../portfolio_import/architecture/architecture24.png";
import spiral11 from "../portfolio_import/architecture/architecture12.png";
import prompt from "../portfolio_import/OTHER/memoryscape/prompt.jpg";

export default function SpiralPavilion() {
  return (
    <div className="flex flex-col items-center max-w-auto h-lvh align-top py-10 md:px-50 px-5 overflow-x-hidden">
      <h2 className="text-5xl">SPIRAL PAVILION</h2>
      <p className="py-5">
        Recognizing common themes of erasure within our respective ethnic and
        cultural backgrounds in our assignment 1 projects, we sought to design a
        pavilion that was a hybrid between a monument and a speculative
        architecture. Working backwards from concepts generated through
        Midjourney, our pavilion takes the form of a tensile fabric spiral,
        situated on the sand next to Coney Island’s boardwalk.
      </p>

      <div className="flex flex-col items-center sm:w-3xl md:w-vw lg:w-7xl py-10">
        <img src={prompt} className="py-5"></img>
        <img src={spiral1} className="py-5"></img>
        <img src={spiral2} className="py-5"></img>

        <img src={spiral3} className="py-20"></img>
        <img src={spiral4} className="py-5"></img>
        <iframe
          className="w-full h-100"
          src="https://www.youtube.com/embed/_v14qYvVgJE?si=2YY9H2SbN3MSQN6U"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
