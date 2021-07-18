import React from 'react';
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "drei";
import { Physics, usePlane, useBox } from "use-cannon";
import * as THREE from 'three';




const Box = ({ xClick, yClick, zClick, rClick, gClick, bClick }) => {
    const [ref, api] = useBox(() => ({ mass: 0, position: [0, 0, 0] }));
    const color7 = new THREE.Color(rClick, gClick, bClick);
    return (
      <mesh
        onClick={() => { api.velocity.set(0, 0, 0);
        console.log(xClick)
        }}
        ref={ref}
        position={[0, 0, 0]}
      >
        <boxBufferGeometry attach="geometry" args={[xClick, zClick, yClick]} />
        <meshLambertMaterial attach="material" color={color7}  />
      </mesh>
    );
  }
  
  
 const Scene3d = ({xClick, yClick, zClick, rClick, gClick, bClick}) => {
    return (
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Box  
              rClick={rClick}
              gClick={gClick}
              bClick={bClick}
              xClick={xClick}
              yClick={yClick}
              zClick={zClick}/>
        </Physics>
      </Canvas>
    );
  }
  export default Scene3d;
