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
import spiral1 from "../portfolio_import/architecture/architecture2.png";
import spiral2 from "../portfolio_import/architecture/architecture3.png";
import spiral3 from "../portfolio_import/architecture/architecture4.png";
import spiral4 from "../portfolio_import/architecture/architecture5.png";
import spiral5 from "../portfolio_import/architecture/architecture6.png";
import spiral6 from "../portfolio_import/architecture/architecture7.png";
import spiral7 from "../portfolio_import/architecture/architecture8.png";
import spiral8 from "../portfolio_import/architecture/architecture9.png";
import spiral9 from "../portfolio_import/architecture/architecture10.png";
import spiral10 from "../portfolio_import/architecture/architecture11.png";
import spiral11 from "../portfolio_import/architecture/architecture12.png";

export default function SpiralLibrary() {
  return (
    <div className="flex flex-col items-center max-w-auto h-lvh align-top py-10 md:px-50 px-5 overflow-x-hidden">
      <h2 className="text-5xl">SPIRAL LIBRARY</h2>
      <p className="py-5">
        This library project in Seneca Falls, NY is based on the Musashino Art
        University Museum & Library by Sou Fujimoto Architects. In this
        integrative design studio, I have adapted the original’s spiral parti to
        this specific site. Offsets which follow the outline of a spiral were
        critical gestures to adhere to. Perforations within the walls are were
        made in such a way that the viewer sees, and is sometimes able to
        traverse, a spiral. In order to maximize the amount of space on the
        site, these offset walls were distorted in plan so that they took up the
        edges of the site.
      </p>

      <div className="flex flex-col items-center sm:w-3xl md:w-vw lg:w-7xl py-10">
        <img src={spiral1} className="py-5"></img>
        <img src={spiral2} className="py-5"></img>
        <p className="px-15">
          An ideal offset distance between walls was identified in the Musashino
          Library. Since the Seneca Falls site is considerably smaller, a new
          distance must be established for the branch library. This was
          determined to be 10 feet, with a 5 foot deviation based on public and
          private programming.
        </p>
        <br></br>
        <p className="px-15">
          A gabled roof, based on the one found in Haus Gables, is implemented
          into the design of the building. It cuts into the otherwise
          rectangular wall geometry in elevation. The material capabilities of
          CLT allows for both a specific geometry that can cover and span across
          the walls, as well as cuts within the roof itself that index areas of
          public programs.
        </p>

        <img src={spiral3} className="py-20"></img>
        <img src={spiral4} className="py-5"></img>
        <img src={spiral5} className="py-5"></img>
        <img src={spiral6} className="py-5"></img>
        <img src={spiral7} className="py-5"></img>
      </div>
    </div>
  );
}
