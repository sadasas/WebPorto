/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ./public/3D/dance.glb ./src/components/3D
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Character3D(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/3D/dance.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["mixamo.com"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.016}
        >
          <group
            name="8e9044c3623e4ad28d51eb7dd01541d1fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group name="Object_6" position={[0, 86.382, 14.198]} />
                  <group name="Symmetry_1" position={[0, 86.382, 14.198]} />
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.rabbit}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dance.glb");
