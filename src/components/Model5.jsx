import { useControls } from "leva";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import vertexShader from "./vertex.glsl?raw";
import fragmentShader from "./noise_frag.glsl?raw";
import { useRef } from "react";
import { Vector3 } from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Model5({}) {
  const gltf = useLoader(GLTFLoader, "../assets/models/parol.gltf");

  return <primitive object={gltf.scene} />;
}
