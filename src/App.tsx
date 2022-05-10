import React from "react";
import "./App.css";
import Prompt from "./components/prompt/Prompt";
import Response from "./components/response/Responses";

function App() {
  return (
    <>
      <div className="App">
        <h1>Chatbot</h1>
      </div>
      <Prompt />
      <Response />
    </>
  );
}

export default App;
