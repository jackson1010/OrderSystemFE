import { Link } from "react-router-dom";
import "./styles.css";
import DancingBear from "../../assets/images/dancebear.gif";
import { SquareCode, Link as LinkIcon, ArrowLeft } from "lucide-react";

const References = () => {
  return (
    <>
      <div className="bg-slate-700 text-slate-200 p-4">
        <Link to="/">
          <ArrowLeft className="inline mr-4 mobilebackbtn" />
        </Link>
        <h3 className="text-base font-bold inline">References</h3>
      </div>

      <div className="p-4">
        <SquareCode className="inline" />
        <span className="pl-2">Code References for FE Developers:</span>
        <div className="pb-5">
          <li className="p-2">
            <Link to="/shadcnui" className="text-blue-500 underline">
              SampleShadCnUI
            </Link>
          </li>
          <li className="p-2">
            <Link to="/sampleredux" className="text-blue-500 underline">
              SampleReduxSagaAxios
            </Link>
          </li>
        </div>

        <LinkIcon className="inline" />
        <span className="pl-2">Library Website References</span>
        <div className="pb-5">
          <li className="p-2">
            <a
              href="https://ui.shadcn.com/docs/components/accordion"
              target="_blank"
              className="text-blue-500 underline"
            >
              Shadcn.ui (UI library)
            </a>
          </li>
          <li className="p-2">
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-blue-500 underline"
            >
              Tailwind css (styling library)
            </a>
          </li>
          <li className="p-2">
            <a
              href="https://lucide.dev/"
              target="_blank"
              className="text-blue-500 underline"
            >
              Lucide (icon library)
            </a>
          </li>
        </div>

        <br />
        <img src={DancingBear} />
      </div>
    </>
  );
};

export default References;
