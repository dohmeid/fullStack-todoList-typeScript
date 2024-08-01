import React, { FC } from "react";
import Header from "./components/Header/Header";
import ControlBar from "./components/ControlBar/ControlBar";
import Tasks from "./components/Tasks/Tasks";

const App: FC = () => {
  return (
    <>
      <Header />
      <ControlBar />
      <Tasks />
    </>
  );
}

export default App;