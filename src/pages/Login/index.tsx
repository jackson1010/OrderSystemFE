import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-slate-700 pt-5 px-4 text-slate-200 font-bold h-16">
        <Link to="/">
          <ArrowLeftIcon className="inline mr-4 backbtn" />
        </Link>
        <h3 className="text-base font-bold inline">Login Page</h3>
        <span style={{ float: "right" }}>en</span>
      </div>
      <div className="p-2">
        <h3 className="mb-4 text-lg font-bold">User Login</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          harum architecto doloremque culpa ut ratione, ex animi aspernatur quod
          assumenda vero unde inventore. Libero dolore vero architecto quaerat
          reprehenderit illum.
        </p>
      </div>
    </>
  );
};

export default Login;
