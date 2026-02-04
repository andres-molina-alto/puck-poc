// src/App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Editor from "./components/editor/Editor";
import Renderer from "./components/renderer/Renderer";

function App() {
  return (
    <BrowserRouter basename="/puck-poc">
      <Routes>
        <Route path="/editor" element={<Editor />} />
        <Route path="/renderer" element={<Renderer />} />
        <Route path="/" element={<Navigate to="/editor" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
