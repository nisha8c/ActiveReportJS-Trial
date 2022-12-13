import React from "react";
import "./App.css";
import { Designer } from "@grapecity/activereports-react";

function App() {
  return (
    <div id="designer-host">
      <Designer report={{ id: "report.rdlx-json", displayName: "my report" }} />
    </div>
  );
}

export default App;