import React, { useState, useMemo } from "react";
import Cnc from "./classes-non-context/App";

const App = () => {
    const [implementation, setImplementation] = useState("classes-non-context");

    const app = useMemo(() => {
        switch(implementation) {
            case "classes-non-context":
                return <Cnc />;
            default:
                return <div>Unknown implementation</div>
        }
    }, [implementation]);

    return (
        <div>
            { app }
            <h2>Implementation</h2>
            <button onClick={() => setImplementation("classes-non-context")}>Classes non context</button>
        </div>
    )
};

export default App;
