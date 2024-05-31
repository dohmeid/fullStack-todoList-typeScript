import React from "react";
import Header from "./components/Header/Header.js";
import ControlBar from "./components/ControlBar/ControlBar.js";
import Tasks from "./components/Tasks/Tasks.js";

const App = () => {

  return (
    <div>
    <Header />
    < ControlBar />
    <Tasks />
    </div>
  );
}

export default App;
