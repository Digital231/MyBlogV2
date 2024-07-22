import NavbarComponent from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import ContactMe from "./pages/ContactMe";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
