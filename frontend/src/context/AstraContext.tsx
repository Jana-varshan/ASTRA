import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { OrbState } from "../types/OrbState";

interface AstraContextType {
  orbState: OrbState;
  setOrbState: (state: OrbState) => void;
}

const AstraContext = createContext<AstraContextType | undefined>(
  undefined
);

export const AstraProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [orbState, setOrbState] = useState(
    OrbState.IDLE
  );

  return (
    <AstraContext.Provider
      value={{
        orbState,
        setOrbState,
      }}
    >
      {children}
    </AstraContext.Provider>
  );
};

export const useAstra = () => {
  const context = useContext(AstraContext);

  if (!context) {
    throw new Error(
      "useAstra must be used inside AstraProvider"
    );
  }

  return context;
};