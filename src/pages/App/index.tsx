import { Link } from "react-router-dom";
import "./styles.css";
import DancingBear from "../../assets/images/dancebear.gif";

const App = () => {
  return (
    <>
      <div className="bg-slate-800 text-slate-200 p-4">
        <h3 className="text-base font-bold">Geha Booking System (Preview)</h3>
      </div>

      <div className="p-4">
        <p>Modules under development:</p>
        <div className="pb-5">
          <li className="p-2">
            <Link to="/login" className="text-blue-500 font-semibold ">
              Login (User / Admin)
            </Link>
          </li>
          <li className="p-2">
            <Link to="/therapy" className="text-blue-500 font-semibold ">
              Therapy Booking (User)
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/underdevelopment"
              className="text-blue-500 font-semibold "
            >
              Therapy Booking (Admin)
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/underdevelopment"
              className="text-blue-500 font-semibold "
            >
              Visitor Booking (User)
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/underdevelopment"
              className="text-blue-500 font-semibold "
            >
              Visitor Booking (Admin)
            </Link>
          </li>
        </div>

        <p>References for FE Developers:</p>
        <div className="pb-3">
          <li className="p-2">
            <Link to="/shadcnui" className="text-blue-500 font-semibold">
              SampleShadCnUI
            </Link>
          </li>
          <li className="p-2">
            <Link to="/sampleredux" className="text-blue-500 font-semibold">
              SampleReduxSagaAxios
            </Link>
          </li>
        </div>

        <br />
        <img src={DancingBear} />
      </div>
    </>
  );
};

export default App;
