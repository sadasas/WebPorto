import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Character3D } from "./Character3D";
import DotLoader from "@components/loaders/DotLoader";
import styles from "@styles/canvas/canvasBio.module.scss";

function CanvasBio() {
  return (
    <div className={styles["container"]}>
      <Suspense fallback={<DotLoader />}>
        <Canvas>
          <ambientLight />
          <pointLight position={[0, 0, 0]} />
          <Character3D position={[0, -2, 0]} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default CanvasBio;
