import { setUser } from "@/data/actions/userAction";
import { HomeIcon, LinkIcon, LogOutIcon, SettingsIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SideNav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(
      setUser({
        islogin: false,
        username: "",
        jwttoken: "",
      })
    );
  };
  return (
    <div className="sidenav bg-slate-900">
      <div className="px-4 h-16">
        <p className="font-bold py-5 text-slate-200">GEHA BOOKING</p>
      </div>
      <div className="text-slate-400">
        <Link to="/" className=" block p-4 hover:bg-slate-700">
          <HomeIcon className="inline" />
          <span className="pl-4">Appointments</span>
        </Link>

        <Link to="/settings" className=" block p-4 hover:bg-slate-700">
          <SettingsIcon className="inline" />
          <span className="pl-4">Settings</span>
        </Link>

        <Link to="/references" className=" block p-4 hover:bg-slate-700">
          <LinkIcon className="inline" />
          <span className="pl-4">References</span>
        </Link>

        <p
          className=" block p-4 hover:bg-slate-700 cursor-pointer"
          onClick={() => handleLogout()}
        >
          <LogOutIcon className="inline" />
          <span className="pl-4">Logout</span>
        </p>
      </div>
    </div>
  );
};

export default SideNav;
