/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import { useTheme } from 'styled-components';
import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Text: THREE.Mesh;
  };
  materials: {
    ['default']: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const theme = useTheme();
  const group = useRef<THREE.Group>();
  const { nodes } = useGLTF('/models/curly.glb') as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Text.geometry} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color={theme.colors.background} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/curly.glb');
