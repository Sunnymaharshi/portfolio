import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import Room from "./Room";
import { OrbitControls } from "@react-three/drei";
import HeroLights from "./HeroLights";
const HeroExperience = () => {
  //   const isTablet = useMediaQuery({ query: "(max-width:1024)" });
  const isMobile = useMediaQuery({ query: "(max-width:768)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <HeroLights />
      <OrbitControls
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 1.5}
      />
      <group
        scale={isMobile ? 0.7 : 1.1}
        position={[0, -3.5, 0]}
        rotation={[0.3, -Math.PI / 3, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
