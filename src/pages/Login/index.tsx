import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Authentication from "./Authentication";
import CreateNewAccount from "./CreateNewAccount";

const Login = () => {
  useEffect(() => {
    alert("This Page is for demo only, Do not enter your real data!!!");
  }, []);

  const [loginmodule, setloginmodule] = useState("authentication")

  const switchloginmodule = (module:string) => {
    console.log(module)
    setloginmodule(module)
  };

  return (
    <div className="flex">
      <div className="leftbanner bg-slate-500 flex-auto hidden sm:block" />
      <div className="flex-auto basis-80 sm:flex-grow-0 p-8">
        {loginmodule ==="authentication" && <Authentication switchloginmodule={switchloginmodule}  />}
        {loginmodule ==="createNewAccount" && <CreateNewAccount switchloginmodule={switchloginmodule} />}
      </div>
    </div>
  );
};

export default Login;
