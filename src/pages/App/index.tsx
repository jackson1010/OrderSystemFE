import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import References from "../References";
import TherapyBooking from "../TherapyBooking";
import Login from "../Login";
import SampleReduxSagaAxios from "../References/SampleReduxSagaAxios";
import SampleShadCnUi from "../References/SampleShadCnUi";
import UnderDevelopment from "../UnderDevelopment";
import "./styles.css";
import {
  HomeIcon,
  LinkIcon,
  LogOutIcon,
  SettingsIcon,
} from "lucide-react";
import HomePage from "../Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="sidenav bg-slate-800">
          <div className="px-4 h-16">
            <p className="font-bold py-5 text-slate-200">GEHA BOOKING APP</p>
          </div>
          <div className="text-slate-400">
            <Link to="/" className=" block p-4 hover:bg-slate-700">
              <HomeIcon className="inline" />
              <span className="pl-4">Home</span>
            </Link>

            <Link
              to="/underdevelopment"
              className=" block p-4 hover:bg-slate-700"
            >
              <SettingsIcon className="inline" />
              <span className="pl-4">Settings</span>
            </Link>

            <Link to="/references" className=" block p-4 hover:bg-slate-700">
              <LinkIcon className="inline" />
              <span className="pl-4">References</span>
            </Link>

            <Link to="/login" className=" block p-4 hover:bg-slate-700">
              <LogOutIcon className="inline" />
              <span className="pl-4">Logout</span>
            </Link>
          </div>
        </div>
        <div className="sidecontent">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/therapy" element={<TherapyBooking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shadcnui" element={<SampleShadCnUi />} />
            <Route path="/sampleredux" element={<SampleReduxSagaAxios />} />
            <Route path="/references" element={<References />} />
            <Route path="/*" element={<UnderDevelopment />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
