import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const LuckyCats = ({ isMobile }) => {
  const luckyCat = useGLTF("./lucky_cat/scene.gltf");

  return (
    <mesh>
      <hemisphereLight 
      intensity={1} 
      groundColor='black'
      
      />

      <spotLight
        intensity={7}
        position={[1,3.2,2]}
      />

      <pointLight 
      intensity={7} 
      position={[-3,-2,2]}
      />

      <primitive
        object={luckyCat.scene}
        scale={isMobile ? 2 : 2}
        position={isMobile ? [0, -2.5, -2.2] : [0, -2.5, -1.5]}
        rotation={[0.2, -0.2, 0]}
      />
    </mesh>
  );
};

const LuckyCatsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 20, 10], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <LuckyCats isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default LuckyCatsCanvas;