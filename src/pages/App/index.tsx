import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="p-2">
      <h3 className="mb-4 text-lg font-bold">Index Page</h3>
      <p>This Page Reserved for development only</p>
      <p>Please Select a module to start:</p>
      <div>
        <li className="p-2">
          <Link to="/home" className="text-blue-500 font-semibold ">
            Geha Booking
          </Link>
        </li>
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
    </div>
  );
};

export default App;
