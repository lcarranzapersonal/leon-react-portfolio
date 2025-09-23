import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model1 from "./Model1";
import Model2 from "./Model2";
import Model3 from "./Model3";
import Model4 from "./Model4";
import Model5 from "./Model5";
import { Suspense } from "react";
import { Hello } from "../Hello";

export default function Scene1() {
  return (
    <div className="max-w-100 h-100">
      <Suspense fallback={<Hello />}>
        <Canvas>
          {/* <Model1 pos={[0, 0, 0]} /> */}
          {/* <Model4 pos={[0, 0, 0]} /> */}
          <Model3 pos={[0, 0, 0]} />
          {/* <Model5 /> */}
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Suspense>
    </div>
  );
}
