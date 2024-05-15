import { Route, Routes, useNavigate } from "react-router-dom";
import References from "../References";
import TherapyBooking from "../Appointments/TherapyBooking";
import Login from "../Login";
import SampleReduxSagaAxios from "../References/SampleReduxSagaAxios";
import SampleShadCnUi from "../References/SampleShadCnUi";
import UnderDevelopment from "../UnderDevelopment";
import "./styles.css";
import Appointments from "../Appointments";
import { useEffect } from "react";
import { getUser } from "@/data/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import SideNav from "./SideNav";
import BottomNav from "./BottomNav";
import VisitorBooking from "../Appointments/VisitorBooking";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userobj = useSelector((state: any) => state.userReducer);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    console.log("userobj updated");
    console.log(userobj);

    if (userobj.islogin === false) {
      console.warn("User is not logged in, redirect to login page...");
    } else {
      console.warn("User is logged in, Welcome back " + userobj.username);
      console.warn(userobj.role);
      switch (userobj.role) {
        case "samplerole1":
          navigate("/appointment");
          break;
        case "admin":
          navigate("/admin");
          break;
        case "user":
          navigate("/user");
          break;
        default:
          console.log("Error!!! Unknown User role !!!");
          break;
      }
    }
  }, [userobj]);

  return (
    <>
      {userobj.islogin === true ? (
        <>
          <SideNav />
          <div className="sidecontent">
            <Routes>
              <Route path="/" element={<Appointments />} />
              <Route path="/appointment" element={<Appointments />} />
              <Route path="/therapy" element={<TherapyBooking />} />
              <Route path="/visitor" element={<VisitorBooking />} />
              <Route path="/shadcnui" element={<SampleShadCnUi />} />
              <Route path="/sampleredux" element={<SampleReduxSagaAxios />} />
              <Route path="/references" element={<References />} />
              <Route path="/*" element={<UnderDevelopment />} />
            </Routes>
            <div className="sm:hidden" style={{ height: "70px" }} />
            <BottomNav />
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
