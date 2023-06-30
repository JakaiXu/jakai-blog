
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="experience" element={<ExperiencePage />}/>
          <Route path="about" element={<AboutPage />}/>
          <Route path="contact" element={<ContactPage />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
