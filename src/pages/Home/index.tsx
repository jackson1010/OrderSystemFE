import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import "./styles.css";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const mobilesheetmenu = (
    <Sheet key={"left"}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[300px]">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="font-bold">GEHA Booking</div>
        <SheetFooter className="text-base space-y-4 pt-4 ">
          <SheetClose asChild>
            <>
              <div className="text-blue-500 space-y-4 mt-4">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/therapy">Therapy Booking</Link>
                </li>
                <li>
                  <Link to="/underdevelopment">Visitor Booking</Link>
                </li>
                <li>
                  <Link to="/underdevelopment">Setting</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/references">References</Link>
                </li>
              </div>
            </>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );

  return (
    <div>
      <div className="bg-slate-700 pt-5 px-4 text-slate-200 font-bold h-16">
        <span className="mobilemenubtn mr-4">{mobilesheetmenu}</span>
        <span className="align-top">Home Page</span>
        <span style={{ float: "right" }}>en</span>
      </div>
      <div className="banner" />

      <div>
        <div className="p-4">
          <p className="text-md font-bold pb-4">Your Appointments:</p>
          <Card className="p-4 text-sm space-y-2">
            <li>
              Wed 20/03/2024 2.00PM
              <span className="text-blue-500 underline pl-2 font-semibold">
                Details
              </span>
              <span className="text-red-400 underline pl-2 font-semibold">
                Cancel
              </span>
            </li>
            <li>
              Thu 28/03/2024 3.00PM
              <span className="text-blue-500 underline pl-2 font-semibold">
                Details
              </span>
              <span className="text-red-400 underline pl-2 font-semibold">
                Cancel
              </span>
            </li>
            <li>
              Wed 03/04/2024 3.00PM
              <span className="text-blue-500 underline pl-2 font-semibold">
                Details
              </span>
              <span className="text-red-400 underline pl-2 font-semibold">
                Cancel
              </span>
            </li>
          </Card>
        </div>

        <div className="p-4">
          <p className="text-md font-bold pb-4">Book Appointment:</p>
          <div className="flex space-x-4">
            <Card className="w-60 bg-slate-200 p-4 hover:bg-slate-300">
              <h3 className="text-base font-bold">Therapy Booking</h3>
              <p className="mt-2">
                Select your therapist and book the date and time
              </p>
              <Button
                className="mt-4"
                variant={"default"}
                size={"sm"}
                onClick={() => {
                  navigate("/therapy");
                }}
              >
                Book Therapy
              </Button>
            </Card>
            <Card className="w-60 bg-slate-200 p-4 hover:bg-slate-300">
              <h3 className="text-base font-bold">Visitor Booking</h3>
              <p className="mt-2">Book Date and time for your visits.</p>
              <Button
                className="mt-4"
                variant={"default"}
                size={"sm"}
                onClick={() => {
                  navigate("/visitor");
                }}
              >
                Book Visitor
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
