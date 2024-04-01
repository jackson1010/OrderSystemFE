import { Card } from "@/components/ui/card";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import {
  BookUserIcon,
  CalendarHeartIcon,
  PhoneOutgoingIcon,
} from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="banner">
        <div className="pt-5 px-4">
          <div className="font-bold text-slate-200">
            <span className="align-top">Home</span>
            <span style={{ float: "right" }}>en</span>
          </div>
          <div className="text-sm text-slate-300 pt-6">
            <p className="text-base font-bold text-slate-100">
              Welcome to Geha Booking
            </p>
            <p className="text-xs">
              Start Therapy Booking or Visitors Booking with us now.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="p-4 pr-1">
          <p className="text-sm font-bold pb-4 text-slate-700">Services</p>
          <div className="flex flex-wrap">
            <div className="mr-4" style={{ width: "66px" }}>
              <Card
                className="basis-10 shrink-0 grow-0 max-w-none bg-blue-200 text-slate-700 p-4 sm:hover:bg-blue-300 text-sm cursor-pointer"
                onClick={() => {
                  navigate("/therapy");
                }}
              >
                <CalendarHeartIcon className="m-auto w-8 h-8" />
              </Card>
              <p className="text-xs text-center font-semibold text-slate-500">
                Therapy Booking
              </p>
            </div>

            <div className="mr-4" style={{ width: "66px" }}>
              <Card
                className="basis-10 shrink-0 grow-0 max-w-none bg-blue-200 text-slate-700 p-4 sm:hover:bg-blue-300 text-sm cursor-pointer"
                onClick={() => {
                  navigate("/visitor");
                }}
              >
                <BookUserIcon className="m-auto w-8 h-8" />
              </Card>
              <p className="text-xs text-center font-semibold text-slate-500">
                Visitor Booking
              </p>
            </div>

            <div className="mr-4" style={{ width: "66px" }}>
              <Card
                className="basis-10 shrink-0 grow-0 max-w-none bg-blue-200 text-slate-700 p-4 sm:hover:bg-blue-300 text-sm cursor-pointer"
                onClick={() => {
                  navigate("/customersupport");
                }}
              >
                <PhoneOutgoingIcon className="m-auto w-8 h-8" />
              </Card>
              <p className="text-xs text-center font-semibold text-slate-500">
                Customer Support
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 pr-1">
          <p className="text-sm font-bold pb-4">Your Appointments</p>
          <div className="flex flex-wrap">
            <Card
              className="basis-60 shrink-0 grow max-w-none sm:max-w-64 bg-slate-100 p-4 sm:hover:bg-slate-200 text-sm cursor-pointer mr-3 mb-3"
              onClick={() => {
                navigate("/therapydetails");
              }}
            >
              <h3 className="font-bold">19/03/2024 (Tue)</h3>
              <p className="mt-2">Subject : Therapy</p>
              <p className="mt-0">Therapist : Melissa Yeo</p>
              <p className="mt-0">Session : 10:00AM - 11:00AM</p>
              <p className="mt-1 text-slate-600 underline">Click for details</p>
            </Card>
            <Card
              className="basis-60 shrink-0 grow max-w-none sm:max-w-64 bg-slate-100 p-4 sm:hover:bg-slate-200 text-sm cursor-pointer mr-3 mb-3"
              onClick={() => {
                navigate("/therapydetails");
              }}
            >
              <h3 className="font-bold">29/03/2024 (Fri)</h3>
              <p className="mt-2">Subject : Therapy</p>
              <p className="mt-0">Therapist : Theressa Ong</p>
              <p className="mt-0">Session : 02:00PM - 03:00PM</p>
              <p className="mt-1 text-slate-600 underline">Click for details</p>
            </Card>
            <Card
              className="basis-60 shrink-0 grow max-w-none sm:max-w-64 bg-slate-100 p-4 sm:hover:bg-slate-200 text-sm cursor-pointer mr-3 mb-3"
              onClick={() => {
                navigate("/visitordetails");
              }}
            >
              <h3 className="font-bold">30/03/2024 (Sat)</h3>
              <p className="mt-2">Subject : Visitor</p>
              <p className="mt-0">Visiting : James Liew</p>
              <p className="mt-0">Session : 02:00PM - 03:00PM</p>
              <p className="mt-1 text-slate-600 underline">Click for details</p>
            </Card>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HomePage;
