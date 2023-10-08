import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";

import Layout from "./Layout";

import { Home, Cv, Contact, Projects, ProjectDetail, Login, Register } from "./pages";

// const Cv = lazy(() =>
//   import("./pages/index").then((module) => {
//     return { default: module.Cv };
//   })
// );

// const Contact = lazy(() =>
//   import("./pages/index").then((module) => {
//     return { default: module.Contact };
//   })
// );

// const Projects = lazy(() =>
//   import("./pages/index").then((module) => {
//     return { default: module.Projects };
//   })
// );

// const ProjectDetail = lazy(() =>
//   import("./pages/index").then((module) => {
//     return { default: module.ProjectDetail };
//   })
// );

function App() {
  useEffect(() => {
    let offset = 300;

    const deviceHeight = window.innerHeight;
    if (deviceHeight < 450) {
      offset = 150;
    } else if (deviceHeight < 400) {
      offset = 100;
    } else if (deviceHeight < 350) {
      offset = 0;
    }

    Aos.init({ offset, duration: 1500, once: true });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
