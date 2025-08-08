import { useControls } from "leva";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import vertexShader from "./sdf_vertex.glsl?raw";
import fragmentShader from "./sdf_frag.glsl?raw";
import { useRef, useState } from "react";
import { Vector3 } from "three";

export default function Model1({ pos = [0, 0, 0] }) {
  const u_time = useRef({ value: 0.0 });
  const u_mousePosition = useRef({ value: new Vector3(0.0, 0.0, -5.0) });
  const { camera, pointer, raycaster, scene } = useThree();
  const u_click = useRef({ value: false });
  const clickTimer = useRef(0);

  //re-renders component every frame
  useFrame((_, delta) => {
    u_time.current.value += delta;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(scene, true);

    if (intersects?.length > 0) {
      u_mousePosition.current.value = intersects[0].point;
    }

    // Handle click timer - keep effect active for 1 second
    if (clickTimer.current > 0) {
      clickTimer.current -= delta;
      u_click.current.value = true;
    } else {
      u_click.current.value = false;
    }

    if (u_click.current.value) {
      console.log("clicked effect active");
    }
  });

  return (
    <mesh
      position={pos}
      onClick={(e) => {
        clickTimer.current = 1.0; // Keep effect for 1 second
        console.log("Click registered");
      }}
    >
      <icosahedronGeometry args={[2, 150]} />
      <shaderMaterial
        args={[
          {
            vertexShader,
            fragmentShader,
            uniforms: {
              u_time: u_time.current,
              u_mousePosition: u_mousePosition.current,
              u_click: u_click.current,
            },
            wireframe: false,
          },
        ]}
      />
    </mesh>
  );
}
