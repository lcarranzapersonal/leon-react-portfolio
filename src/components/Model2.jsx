import { useControls } from "leva";
import { Canvas, useFrame } from "@react-three/fiber";
import vertexShader from "./vertex.glsl?raw";
import fragmentShader from "./noise_frag.glsl?raw";
import { useRef } from "react";

export default function Model1({ pos = [0, 0, 0] }) {
  const u_time = useRef({ value: 0.0 });

  //re-renders component every frame
  useFrame((_, delta) => {
    u_time.current.value += delta;
  });

  return (
    <mesh position={pos}>
      <planeGeometry />
      <shaderMaterial
        args={[
          {
            vertexShader,
            fragmentShader,
            uniforms: {
              u_time: u_time.current,
            },
            wireframe: false,
          },
        ]}
      />
    </mesh>
  );
}
