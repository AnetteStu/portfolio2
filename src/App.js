import "./css/styles.css"

import { Route, Routes } from 'react-router-dom';
import Index from './Pages/Index/Index';
import Layout from './Pages/Layout/Layout';
import Contact from './Pages/Contact/Contact';
import NoPage from './Pages/NoPage/NoPage';
import Projects from "./Pages/Projects/Projects";
import Project from "./Pages/Project/Project";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<Project />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
