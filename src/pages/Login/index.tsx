import "./styles.css";
import GehaLogo from "../../assets/logo/Logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/data/actions/userAction";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    alert("This Page is for demo only, Do not enter your real data!!!");
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    alert("Demo Login , Assume login success...");
    dispatch(
      setUser({
        islogin: true,
        username: "Sample User",
        jwttoken: "Sample Token",
      })
    );
    navigate("/");
  };

  return (
    <div className="flex">
      <div className="leftbanner bg-slate-500 flex-auto hidden sm:block" />
      <div className="flex-auto basis-80 sm:flex-grow-0 p-8">
        <img src={GehaLogo} className="logotop" />

        <Input
          type="email"
          placeholder="Email"
          className="w-full mx-auto mt-12 text-base"
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full mx-auto mt-4 text-base"
        />
        <Button
          variant={"default"}
          className="w-full mx-auto mt-8 block"
          onClick={() => handleLogin()}
        >
          Log In
        </Button>

        <div className="w-full mx-auto block text-sm">
          <p
            className="text-blue-500 font-bold mt-8 cursor-pointer"
            onClick={() => {
              alert("function under development");
            }}
          >
            Forget Password?
          </p>
          <p
            className="text-blue-500 font-bold mt-3 cursor-pointer"
            onClick={() => {
              alert("function under development");
            }}
          >
            Register for GEHA Booking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
