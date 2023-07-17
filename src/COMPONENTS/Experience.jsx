import React, { useRef } from "react";
import { Car } from "./MODELS/Car";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PresentationControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";

import { Hero } from "./Hero";
import { Slider } from "./Slider";
import { CTA } from "./CTA";
import { About } from "./About";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { useFrame } from "@react-three/fiber";

export const Experience = () => {
  const carRef = useRef();

  useFrame(() => {
    carRef.current.rotation.y += 0.01;
  });
  // const widthScreen = window.widthScreen;

  return (
    <>
      <ambientLight />
      <spotLight intensity={0.6} />
      <directionalLight intensity={2} />

      <ContactShadows
        opacity={1}
        position={[0, -1.7, 0]}
        scale={15}
        blur={3}
        far={3}
        resolution={256}
        color="#000000"
      />
      <OrbitControls
        // autoRotate
        // autoRotateSpeed={2}
        enableRotate={true}
        enableZoom={false}
      />
      <ScrollControls pages={6.6} damping={0.25}>
        <Scroll html>
          <Hero />

          <Slider />
          <div className="relative top-[54rem] sm:top-[63rem] md:top-[60rem] z-20 ">
            <CTA />
          </div>
          <p className=" relative top-[-1rem] text-center left-[28%] sm:left-[0%] text-[#ffff] text-5xl sm:text-4xl md:text-[2.5rem] lg:text-[2.8rem] w-[45%] sm:w-[100%] sm:px-4 leading-tight">
            Luvly require far{" "}
            <b className="tracking-wide text-[#0E4957]">less energy</b> and cost
            to run and produce than a plug-in car, feature slow formula racing
            tech for best-in-class safety, and are{" "}
            <b className="tracking-wide text-[#0E4957]">recyclable</b>.
          </p>
          <About />
          <FAQ />
          <Footer />
        </Scroll>

        <Scroll>
          <PresentationControls
            damping={0.1}
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 2, tension: 1500 }}
            rotation={[0, 0.1, 0]}
            polar={[-0.2, 0.2]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            cursor={true}
          >
            {/* <Float
              speed={0.5}
              rotationIntensity={0.5}
              floatIntensity={0.1}
              floatingRange={[-0.1, 0.1]}
            > */}
            <mesh
              ref={carRef}
              scale={0.014}
              position={[-0.5, -1.4, -0.2]}
              rotation-y={0.25}
              rotation-x={0}
              castShadow
            >
              <Car />
            </mesh>
            {/* </Float> */}
          </PresentationControls>
        </Scroll>
      </ScrollControls>
    </>
  );
};
