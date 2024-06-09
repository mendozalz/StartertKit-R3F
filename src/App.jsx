import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id="app">
      <Canvas>
        <mesh>
          <boxGeometry args={[1,1,1]}/>
          <meshBasicMaterial color={"#8bdd08"}/>
        </mesh>
        <OrbitControls/>
      </Canvas>
    </div>
  );
}

export default App;
