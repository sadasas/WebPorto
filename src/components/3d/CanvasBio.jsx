import React from "react";
import { Canvas } from "@react-three/fiber";

import { Character3D } from "./Character3D";
import styles from "@styles/canvas/canvasBio.module.scss";

function CanvasBio() {
  return (
    <div className={styles["container"]}>
      <Canvas>
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <Character3D position={[0, -2, 0]} />
      </Canvas>
    </div>
  );
}

export default CanvasBio;
