import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ExperienceDetail from "./Pages/ExperienceDetail";
import ProjectDetail from "./Pages/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience/:id" element={<ExperienceDetail />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
