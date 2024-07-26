
import { HomeIcon, LinkIcon, LogOutIcon, SettingsIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/Logo2.png";
import { logout } from "@/data/actions/userAction";

const SideNav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    console.log(localStorage)
    dispatch(logout());
  };
  return (
    <div className="sidenav bg-slate-900">
      <div className="px-4 pb-4">
        <img src={Logo} className="p-2" style={{ height: "100px" }} />
      </div>
      <div className="text-slate-400">
        <Link to="/" className=" block p-4 hover:bg-slate-700">
          <HomeIcon className="inline" />
          <span className="pl-4">Home</span>
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
