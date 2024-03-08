import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/pages/Home";
import About from "./view/pages/About";
import Login from "./view/pages/Login";
import TopNavbar from "./view/components/TopNavbar";

const Providers = () => {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Providers;
