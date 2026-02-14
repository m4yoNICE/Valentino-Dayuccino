import { createContext, useContext, useState } from "react";

const TeleportContext = createContext(undefined);

export const TeleportProvider = ({ children }) => {
  const [totalTeleports, setTotalTeleports] = useState(0);

  const incrementTeleports = () => setTotalTeleports((prev) => prev + 1);
  const resetTeleports = () => setTotalTeleports(0);

  return (
    <TeleportContext.Provider
      value={{ totalTeleports, incrementTeleports, resetTeleports }}
    >
      {children}
    </TeleportContext.Provider>
  );
};

export const useTeleport = () => useContext(TeleportContext);
