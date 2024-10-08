import { HomeIcon, LinkIcon, LogOutIcon, SettingsIcon, User } from "lucide-react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/data/actions/userAction";

const BottomNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    console.log(localStorage)
    dispatch(logout());
  };

  return (
    <div className="bg-slate-800 text-slate-400 bottomnav p-1 pt-2">
      <div className="h-11 flex text-xs">
        <div
          className="flex-1 text-center cursor-pointer hover:text-slate-100"
          onClick={() => navigate("/")}
        >
          <HomeIcon className="h ml-auto mr-auto" />
          Home
        </div>
        <div
          className="flex-1 text-center cursor-pointer hover:text-slate-100"
          onClick={() => navigate("/profile")}
        >
          <User className="h ml-auto mr-auto" />
          Profile
        </div>
        <div
          className="flex-1 text-center cursor-pointer hover:text-slate-100"
          onClick={() => navigate("/references")}
        >
          <LinkIcon className="h ml-auto mr-auto" />
          References
        </div>
        <div
          className="flex-1 text-center cursor-pointer hover:text-slate-100"
          onClick={() => handleLogout()}
        >
          <LogOutIcon className="h ml-auto mr-auto" />
          Logout
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
