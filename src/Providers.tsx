import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SampleShadCnUi from "./pages/SampleShadCnUi";
import SampleReduxSagaAxios from "./pages/SampleReduxSagaAxios";
import { Provider } from "react-redux";
import store from "./data/store";
import App from "./pages/App";

const Providers = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shadcnui" element={<SampleShadCnUi />} />
          <Route path="/sampleredux" element={<SampleReduxSagaAxios />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
