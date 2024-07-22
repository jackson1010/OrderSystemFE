import { Card } from "@/components/ui/card";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import {
  BookUserIcon,
  CalendarHeartIcon,
  PhoneOutgoingIcon,
} from "lucide-react";
import { useSelector } from "react-redux";
import { getMyVisitorBookings } from "@/data/api/apiClient";
import { useEffect, useState } from "react";
import { formatDate } from "@/utils/ScrollToTop/StringFromatter";

const HomePage = () => {
  const navigate = useNavigate();
  const userobj = useSelector((state: any) => state.userReducer);
  const [bookingList, setBookingList] = useState([]);

  useEffect(()=>{
    console.log("homePage")
    
    const fetchVisitorBookings = async ()=>{
    
      try{
        console.log("fetching data")
        const bookingReponse = await getMyVisitorBookings(userobj.profile.visitorId);
  
        if(bookingReponse.status ==200){
          const bookings = await bookingReponse.data;
          console.log(bookings);
          setBookingList(bookings)
        }
      }catch(error){
        console.error('error: ', error);
      }
    };

    if (userobj.profile && userobj.profile.visitorId) {
      fetchVisitorBookings();
    }
  }, [userobj.profile]);


    


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
                className="basis-10 shrink-0 grow-0 max-w-none bg-blue-50 text-blue-700 p-4 sm:hover:bg-blue-100 text-sm cursor-pointer"
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
                className="basis-10 shrink-0 grow-0 max-w-none bg-purple-50 text-purple-700 p-4 sm:hover:bg-purple-100 text-sm cursor-pointer"
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
                className="basis-10 shrink-0 grow-0 max-w-none bg-green-50 text-green-700 p-4 sm:hover:bg-green-100 text-sm cursor-pointer"
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
          { bookingList.map((booking: any) =>(
              <Card
              key ={booking.visitorBookingId}
              className="basis-60 shrink-0 grow max-w-none sm:max-w-64 bg-slate-100 p-4 sm:hover:bg-slate-200 text-sm cursor-pointer mr-3 mb-3"
              onClick={() => {
                navigate("/therapydetails");
              }}
            >
              <h3 className="font-bold">{formatDate(booking.bookingTiming)}</h3>
              <p className="mt-2">Subject: {booking.reasonForVisit}</p>
              <p className="mt-0">
                  Approved: <span className={booking.isApproved ? 'text-green-600' : 'text-red-600'}>
                    {booking.isApproved ? "Yes" : "No"}
                  </span>
                </p>
              <p className="mt-1 text-slate-600 underline">Click for details</p>
            </Card>
             ))} 
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HomePage;
