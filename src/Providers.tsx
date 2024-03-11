import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SampleShadCnUi from "./pages/SampleShadCnUi";
import TopNav from "./components/custom/TopNav";
import SampleReduxSagaAxios from "./pages/SampleReduxSagaAxios";
import { Provider } from "react-redux";
import store from "./data/store";

const Providers = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shadcnui" element={<SampleShadCnUi />} />
          <Route
            path="/samplereduxsagaaxios"
            element={<SampleReduxSagaAxios />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
