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
import spiral1 from "../portfolio_import/architecture/architecture9.png";
import spiral2 from "../portfolio_import/architecture/architecture10.png";
import spiral3 from "../portfolio_import/architecture/architecture11.png";
import spiral4 from "../portfolio_import/architecture/architecture12.png";
import spiral5 from "../portfolio_import/architecture/architecture13.png";
import spiral6 from "../portfolio_import/architecture/architecture14.png";
import spiral7 from "../portfolio_import/architecture/architecture15.png";
import spiral8 from "../portfolio_import/architecture/architecture16.png";
import spiral9 from "../portfolio_import/architecture/architecture17.png";
import spiral10 from "../portfolio_import/architecture/architecture18.png";
import spiral11 from "../portfolio_import/architecture/architecture19.png";

export default function SanJuanHill() {
  return (
    <div className="flex flex-col items-center max-w-auto h-lvh align-top py-10 md:px-50 px-5 overflow-x-hidden">
      <h2 className="text-5xl">SAN JUAN HILL RE-EMERGENCE</h2>
      <p className="py-5">
        How might architecture properly address the erasure of whole
        communities, decades after the fact? This is the core conceit of this
        design. The first program type consists of residential units with
        priorities to the elderly, especially the descendants of those who lived
        in the original neighborhood. I argue that archives in the US are
        extensive, and that despite the erasure of this community, tracing its
        descendants is possible. The second program is that of a library,
        embodying archives in forms more familiar, through text. Both of these
        programs feed off of the existing David Geffen building, allowing an
        architecture contrasting in material, scale, program and time to exist
        in tandem with the current concert hall. This produces a circulation
        which allows for the speculation of the intersection of two moments of
        life, from the intimate, domestic continuation of San Juan Hill to the
        public, contemporary experiences of current concert-goers.
      </p>

      <div className="flex flex-col items-center sm:w-3xl md:w-vw lg:w-7xl py-10">
        <img src={spiral1} className="py-5"></img>
        <img src={spiral2} className="py-5"></img>
        <img src={spiral3} className="py-20"></img>
        <img src={spiral4} className="py-5"></img>
        <img src={spiral5} className="py-5"></img>
      </div>
    </div>
  );
}
