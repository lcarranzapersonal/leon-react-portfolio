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
import spiral1 from "../portfolio_import/architecture/architecture20.png";
import spiral2 from "../portfolio_import/architecture/architecture21.png";
import spiral3 from "../portfolio_import/architecture/architecture22.png";
import spiral4 from "../portfolio_import/architecture/architecture23.png";
import spiral5 from "../portfolio_import/architecture/architecture24.png";
import spiral6 from "../portfolio_import/architecture/architecture25.png";

export default function MemoryscapeCasino() {
  return (
    <div className="flex flex-col items-center max-w-auto h-lvh align-top py-10 md:px-50 px-5 overflow-x-hidden">
      <h2 className="text-5xl">MEMORYSCAPE CASINO</h2>
      <p className="py-5">
        In our casino design for Coney Island, we carry forward a central
        concept of the archive into experimentations with generative AI. Using
        interview transcripts from Coney Island’s online Oral History Archive, a
        methodology was created in which these interviews were brought into
        ChatGPT to be interpreted into generative image prompts for Midjoruney.
        Based on the resulting series of images, we imagined a generic layout
        for our casino situated directly on top of Luna Park. Through the scenes
        produced through the placement of tables, gaming areas, tables, and
        shapes articulated through the tensile fabric architecture, we
        conceptualized distinct digital layers of reality, each unique to the
        worlds described by the interviewees
      </p>

      <div className="flex flex-col items-center sm:w-3xl md:w-vw lg:w-7xl py-10">
        <img src={spiral1} className="py-5"></img>
        <img src={spiral2} className="py-5"></img>
        <img src={spiral3} className="py-20"></img>
        <img src={spiral4} className="py-5"></img>

        <iframe
          className="w-full h-100"
          src="https://www.youtube.com/embed/Ez0Mf2oB2Q0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="py-5">
          A video created using a Stable Diffusion LoRA which allowed me to
          generate 360 views of a casino based on prompts generated from our
          described methodology. The video was presented on both a TV display
          and a Meta Quest 2 Headset.
        </p>
        <img src={spiral5} className="py-5"></img>
      </div>
    </div>
  );
}
