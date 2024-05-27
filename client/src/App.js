import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";

function App() {

  return (
    <>
      <Header />
      <Form />
      <Tasks />
    </>
  );
}

export default App;
