import React from "react";
import "./App.css";
import LaunchesPage from "./pages/launchesPage";
import { Route, Routes } from "react-router-dom";
import LaunchPage from "./pages/launchPage";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<LaunchesPage />} />
          <Route path="/launch/:launchId" element={<LaunchPage />} />
          <Route path="*" element={<>❌ 404 Not Found ❌</>} />
        </Routes>
      </header>
    </div>
  );
};

export default App;
