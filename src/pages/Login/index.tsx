import "./styles.css";
import GehaLogo from "../../assets/logo/Logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/data/actions/userAction";

const Login = () => {
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
      <div className="flex-auto basis-80 sm:flex-grow-0">
        <img src={GehaLogo} className="logotop w-64" />

        <Input
          type="email"
          placeholder="Email"
          className="w-64 mx-auto mt-12"
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-64 mx-auto mt-4"
        />
        <Button
          variant={"default"}
          className="w-64 mx-auto mt-8 block"
          onClick={() => handleLogin()}
        >
          Log In
        </Button>

        <div className="w-64 mx-auto block text-sm">
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
