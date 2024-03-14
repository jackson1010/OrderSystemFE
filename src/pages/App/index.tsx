import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import References from "../References";
import TherapyBooking from "../TherapyBooking";
import Login from "../Login";
import SampleReduxSagaAxios from "../References/SampleReduxSagaAxios";
import SampleShadCnUi from "../References/SampleShadCnUi";
import UnderDevelopment from "../UnderDevelopment";
import "./styles.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="sidenav bg-slate-800 text-slate-50 p-4">
          <div className="font-bold" style={{ height: "30px" }}>
            GEHA BOOKING
          </div>
          <div className="text-blue-300 space-y-4 mt-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/therapy">Therapy Booking</Link>
            </li>
            <li>
              <Link to="/underdevelopment">Visitor Booking</Link>
            </li>
            <li>
              <Link to="/underdevelopment">Setting</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/references">References</Link>
            </li>
          </div>
        </div>
        <div className="sidecontent">
          <Routes>
            <Route path="/" element={<TherapyBooking />} />
            <Route path="/therapy" element={<TherapyBooking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shadcnui" element={<SampleShadCnUi />} />
            <Route path="/sampleredux" element={<SampleReduxSagaAxios />} />
            <Route path="/underdevelopment" element={<UnderDevelopment />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
