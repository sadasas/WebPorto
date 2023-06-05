import React from "react";
import { Canvas } from "@react-three/fiber";

import { Man3D } from "./Man";
import styles from "@/styles/canvas/canvasBio.module.scss";

function CanvasBio() {
  return (
    <div className={styles["container"]}>
      <Canvas>
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <Man3D position={[0, -2, 0]} />
      </Canvas>
    </div>
  );
}

export default CanvasBio;
