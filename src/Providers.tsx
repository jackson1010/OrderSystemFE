import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SampleShadCnUi from "./pages/SampleShadCnUi";
import TopNav from "./components/custom/TopNav";

const Providers = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shadcnui" element={<SampleShadCnUi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Providers;
