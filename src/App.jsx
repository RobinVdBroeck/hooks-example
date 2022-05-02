import React, { useState, useMemo } from "react";
import Cnc from "./classes-non-context";
import Cwc from "./classes-with-context";
import Hooks from "./hooks";

const App = () => {
  const [implementation, setImplementation] = useState("classes-non-context");

  const app = useMemo(() => {
    switch (implementation) {
      case "classes-non-context":
        return <Cnc />;
      case "classes-with-context":
        return <Cwc />;
      case "hooks":
        return <Hooks />;
      default:
        return <div>Unknown implementation</div>;
    }
  }, [implementation]);

  return (
    <div>
      {app}
      <h2>Implementation</h2>
      <div>
        <button onClick={() => setImplementation("classes-non-context")}>
          Classes non context
        </button>
        <button onClick={() => setImplementation("classes-with-context")}>
          Classes with context
        </button>
        <button onClick={() => setImplementation("hooks")}>Hooks</button>
      </div>
      <div>Current implementation: {implementation}</div>
    </div>
  );
};

export default App;
