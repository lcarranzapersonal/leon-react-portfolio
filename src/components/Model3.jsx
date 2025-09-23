import { useControls } from "leva";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import vertexShader from "./truchet_vertex.glsl?raw";
import fragmentShader from "./truchet_frag.glsl?raw";
import { useRef } from "react";
import { Vector3 } from "three";

export default function Model1({ pos = [0, 0, 0] }) {
  const u_time = useRef({ value: 0.0 });
  const u_mousePosition = useRef({ value: new Vector3(0, 0, -5) });
  const { camera, pointer, raycaster, scene } = useThree();

  //re-renders component every frame
  useFrame((_, delta) => {
    u_time.current.value += delta;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(scene, true);

    if (intersects?.length > 0) {
      u_mousePosition.current.value = intersects[0].point;
      console.log("Mouse Position:", u_mousePosition.current.value);
    }
  });

  return (
    <mesh position={pos}>
      <icosahedronGeometry args={[1, 120]} />
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
