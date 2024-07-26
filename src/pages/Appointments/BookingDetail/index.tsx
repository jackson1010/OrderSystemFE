import "./styles.css";
import { ArrowLeftIcon, Calendar as CalendarIcon } from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/utils/ScrollToTop/StringFromatter";


const BookingDetail = () =>{
    const location = useLocation();
    const { booking } = location.state;
    console.log(booking);

    return(
        <div className="visitorcontentbg">
            <div className="bg-slate-100/70 min-h-lvh">
                <div className="bg-blue-900 pt-5 px-4 text-slate-100 font-bold h-16">
                    <Link to="/">
                        <ArrowLeftIcon className="inline mr-4 backbtn" />
                    </Link>
                    <h3 className="text-base font-bold inline">Booking Details</h3>
                    <span style={{ float: "right" }}>en</span>
                </div>
                <br></br>
                <div className="flex flex-wrap">
                    <Card className="basis-60 shrink-0 grow max-w-none sm:max-w-64 bg-slate-100 p-4 sm:hover:bg-slate-200 text-sm cursor-pointer mr-3 mb-3" >
                        <h3 className="font-bold">{formatDate(booking.bookingTiming)}</h3>
                        <p className="mt-2">Subject: {booking.reasonForVisit}</p>
                        <p className="mt-0">Approved: <span className={booking.isApproved ? 'text-green-600' : 'text-red-600'}>
                            {booking.isApproved ? "Yes" : "No"}</span>
                        </p>
                        <button>Cancel</button>
                    </Card>
                </div>
            </div>
        </div>
    );

}

export default BookingDetail;