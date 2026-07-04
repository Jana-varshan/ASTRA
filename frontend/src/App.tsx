import Scene from "./components/Scene";
import Background from "./components/Background";
import Orb from "./components/Orb";
import Status from "./components/Status";

const App = () => {
  return (
    <Scene>
      <Background />
      <Orb />
      <Status />
    </Scene>
  );
};

export default App;