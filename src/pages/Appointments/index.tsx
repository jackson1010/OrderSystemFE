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
          <div className="font-bold text-slate-800">
            <span className="align-top">GEHA Bookings</span>
            <span style={{ float: "right" }}>en</span>
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

            {/* <Card
              className="basis-60 shrink-0 grow max-w-none sm:max-w-64 bg-slate-200 p-4 sm:hover:bg-slate-300 text-sm cursor-pointer mr-3 mb-3"
              onClick={() => {
                navigate("/therapy");
              }}
            >
              <h3 className="font-bold">Therapy Booking</h3>
              <p className="my-2">Select your therapist, book date and time</p>
              <p className="mt-1 text-slate-600 underline">Click to Book</p>
            </Card>
            <Card
              className="basis-60 shrink-0 grow max-w-none sm:max-w-64 bg-slate-200 p-4 sm:hover:bg-slate-300 text-sm cursor-pointer mr-3 mb-3"
              onClick={() => {
                navigate("/visitor");
              }}
            >
              <h3 className="font-bold">Visitor Booking</h3>
              <p className="my-2">Book Date and time for your next visits.</p>
              <p className="mt-1 text-slate-600 underline">Click to Book</p>
            </Card> */}
          </div>
        </div>
        <div className="p-4 pr-1">
          <p className="text-sm font-bold pb-4">Your Appointments</p>
          <div className="flex flex-wrap">
            <Card
              className="basis-60 shrink-0 grow max-w-none sm:max-w-64 bg-slate-50 p-4 sm:hover:bg-slate-200 text-sm cursor-pointer mr-3 mb-3"
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
              className="basis-60 shrink-0 grow max-w-none sm:max-w-64 bg-slate-50 p-4 sm:hover:bg-slate-200 text-sm cursor-pointer mr-3 mb-3"
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
              className="basis-60 shrink-0 grow max-w-none sm:max-w-64 bg-slate-50 p-4 sm:hover:bg-slate-200 text-sm cursor-pointer mr-3 mb-3"
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
