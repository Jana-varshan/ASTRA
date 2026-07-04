import Scene from "./components/Scene";
import Background from "./components/Background";
import Orb from "./components/Orb";
import Status from "./components/Status";

import { useAstra } from "./context/AstraContext";
import { OrbState } from "./types/OrbState";
import { useKeyboard } from "./hooks/useKeyboard";

const App = () => {
  const { orbState, setOrbState } = useAstra();

  useKeyboard(() => {
    setOrbState(
      orbState === OrbState.IDLE
        ? OrbState.LISTENING
        : OrbState.IDLE
    );
  });

  return (
    <Scene>
      <Background />
      <Orb />
      <Status />
    </Scene>
  );
};

export default App;