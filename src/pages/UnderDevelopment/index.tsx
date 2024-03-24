import { Link } from "react-router-dom";
import UnderDevimg from "../../assets/images/gif/underdev.gif";
import { ArrowLeftIcon } from "lucide-react";

const UnderDevelopment = () => {
  return (
    <div>
      <div className="bg-slate-800 pt-5 px-4 text-slate-200 font-bold h-16">
        <Link to="/">
          <ArrowLeftIcon className="inline mr-4 backbtn" />
        </Link>
        <h3 className="text-base font-bold inline">Page Not Found</h3>
        <span style={{ float: "right" }}>en</span>
      </div>
      <div
        style={{
          padding: "30px",
          width: "100%",
        }}
      >
        <img
          src={UnderDevimg}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <p style={{ textAlign: "center" }}>Page is under development...</p>
      </div>
    </div>
  );
};

export default UnderDevelopment;
