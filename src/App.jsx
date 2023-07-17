import { Canvas } from "@react-three/fiber";
import { Navbar } from "./COMPONENTS/Navbar";
import { Experience } from "./COMPONENTS/Experience";

function App() {
  return (
    <main className=" h-full w-full min-h-[100vh]  font-poppins ">
      {/* <Hero /> */}
      <Navbar />
      <div className="absolute h-[100vh] w-full ">
        <Canvas
          shadows
          flat
          dpr={[1, 2]}
          camera={{
            position: [-5, 3, 10],
            fov: 30,
          }}
        >
          <Experience />
          <color attach="background" args={["#70ac92"]} />
        </Canvas>
      </div>
    </main>
  );
}

export default App;
