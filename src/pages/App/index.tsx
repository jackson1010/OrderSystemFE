import { Link } from "react-router-dom";
import "./styles.css";
import DancingBear from "../../assets/images/dancebear.gif";
import { Construction, SquareCode, Link as LinkIcon } from "lucide-react";

const App = () => {
  return (
    <>
      <div className="bg-slate-800 text-slate-200 p-4">
        <h3 className="text-base font-bold">Geha Booking System (Preview)</h3>
      </div>

      <div className="p-4">
        <Construction className="inline" />
        <span className="pl-2 font-semibold">Modules under development:</span>
        <div className="pb-5">
          <li className="p-2">
            <Link to="/login" className="text-blue-500 underline ">
              Login (User / Admin)
            </Link>
          </li>
          <li className="p-2">
            <Link to="/therapy" className="text-blue-500 underline ">
              Therapy Booking (User)
            </Link>
          </li>
          <li className="p-2">
            <Link to="/underdevelopment" className="text-blue-500 underline ">
              Therapy Booking (Admin)
            </Link>
          </li>
          <li className="p-2">
            <Link to="/underdevelopment" className="text-blue-500 underline ">
              Visitor Booking (User)
            </Link>
          </li>
          <li className="p-2">
            <Link to="/underdevelopment" className="text-blue-500 underline ">
              Visitor Booking (Admin)
            </Link>
          </li>
        </div>

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

export default App;
