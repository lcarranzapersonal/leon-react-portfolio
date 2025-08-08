import React from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "three";

export const Hello = ({ prop, name }) => (
  <div>
    <h1>Hello {prop}</h1>
    <p>My name is {name}</p>
  </div>
);
