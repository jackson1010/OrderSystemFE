import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <div className="bg-gray-700 p-2">
        <h3
          className="text-lg text-white font-semibold"
          style={{ display: "inline" }}
        >
          TheraBooking
        </h3>
        <Link to="/" className="text-blue-200 pl-4 font-semibold">
          Home
        </Link>
        <Link to="/about" className="text-blue-200 pl-4 font-semibold">
          About
        </Link>
        <Link to="/login" className="text-blue-200 pl-4 font-semibold">
          Login
        </Link>
        <Link to="/shadcnui" className="text-blue-200 pl-4 font-semibold">
          SampleShadCnUI
        </Link>
        <Link
          to="/samplereduxsagaaxios"
          className="text-blue-200 pl-4 font-semibold"
        >
          SampleReduxSagaAxios
        </Link>
      </div>
    </>
  );
};

export default TopNav;
