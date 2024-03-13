import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SampleShadCnUi from "./pages/SampleShadCnUi";
import SampleReduxSagaAxios from "./pages/SampleReduxSagaAxios";
import { Provider } from "react-redux";
import store from "./data/store";
import App from "./pages/App";
import TherapyBooking from "./pages/TherapyBooking";
import UnderDevelopment from "./pages/UnderDevelopment";

const Providers = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/therapy" element={<TherapyBooking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shadcnui" element={<SampleShadCnUi />} />
          <Route path="/sampleredux" element={<SampleReduxSagaAxios />} />
          <Route path="/underdevelopment" element={<UnderDevelopment />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
