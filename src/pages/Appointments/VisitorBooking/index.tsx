import { useEffect, useState } from "react";
import "./styles.css";
import { ArrowLeftIcon, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { getAllBookings, getAllHolidays, visitorBook } from "@/data/api/apiClient";
import { useSelector } from "react-redux";
import { DateTime } from "luxon";
import { BOOK_SLOT_LIMIT, TIME_SLOTS } from "@/data/interface";
import Alert from "@/components/ui/alert";

const VisitorBooking = () => {
  const navigate = useNavigate();
  const userobj = useSelector((state: any) => state.userReducer);
  const [date, setDate] = useState<DateTime| null>(null);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [availableTimeSlot, setAvailableTimeSlot]= useState<string[]>([]);
  const [reasonForVisit, setReasonForVisit] = useState<string>('');
  const [unavailableDates, setUnavailableDates] = useState(() => {
    const storedDates = localStorage.getItem('unavailableDates');
    return storedDates ? JSON.parse(storedDates) : null;
  });
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleDateSelect = (selectedDate: DateTime | null) => {setDate(selectedDate); setIsPopoverOpen(false); };
  const handleTimeSlotSelect = (time: string) => {setTimeSlot(time);};
  const [error, setError]= useState(false);
  const [errorMsg, setErrorMsg]= useState('');
  const [completed, setCompleted]= useState(false);

  console.log("visitor booking page");
  
  const clear = () =>{
    setReasonForVisit("");
    setDate(null);
  }

  const timer = (msg: string) =>{
    setError(true);
    setErrorMsg(msg);
    setTimeout(()=>{
      setError(false);
      },5000);
  }

  useEffect(()=>{
    const getUnavailableDays = async() =>{
      try{
        const getUnavailableDaysResponse = await getAllHolidays();
        if(getUnavailableDaysResponse.status== 200){
            console.log(getUnavailableDaysResponse);
            setUnavailableDates(getUnavailableDaysResponse.data);
            localStorage.setItem('unavailableDates', JSON.stringify(getUnavailableDaysResponse.data));
        }
      }catch(error){
        timer("Unable to fetch holidays");
        console.error('error: ', error);
      }
    }
      if(!unavailableDates){
      getUnavailableDays();
      }
    },[unavailableDates]);

    const isDateUnavailable = (d: Date) =>{
      const jsDate = DateTime.fromJSDate(d).toISODate();
      const today = DateTime.local().toISODate();

      //check if date is in the past
      if(jsDate){
        if (jsDate <= today) {
          return true;
        }
      }
      return unavailableDates.some((item: { date: string ; center: string; }) => 
        item.date === jsDate && (item.center === 'BOTH'|| item.center === 'SHC'))
    }

    useEffect(()=>{
      const getAvailableTimeSlot = async() =>{
        try{
            const isoDate = date?.toISODate();
            const getAvailableTimeSlotResponse = await getAllBookings(isoDate);
            if(getAvailableTimeSlotResponse.status== 200){  
                console.log(getAvailableTimeSlotResponse);
                if(getAvailableTimeSlotResponse.data.length !=0){
                const avaiableSlot = TIME_SLOTS.filter(slot => {
                  const bookedCount = getAvailableTimeSlotResponse.data[slot] || 0;
                  return bookedCount < BOOK_SLOT_LIMIT;
                });
                setAvailableTimeSlot(avaiableSlot);
              }else{
                setAvailableTimeSlot(TIME_SLOTS);
              }
            }
          }catch(error){
            timer("Unable to get time slots");
          console.error('error: ', error);
          }
      };
      if(date){
        getAvailableTimeSlot();
      }
    },[date]);

  const book = async () =>{
    if(date && timeSlot && reasonForVisit){
      setIsLoading(true);
      const [hour, minute, period] = timeSlot.split(/[:\s]/); 
      const formattedHour = period === 'PM' && hour !== '12' ? parseInt(hour) + 12 : parseInt(hour);
      const bookingTiming = date.set({ hour: formattedHour, minute: parseInt(minute) }).toFormat("yyyy-MM-dd'T'HH:mm:ss");
      try{
        const bookingResponse = await visitorBook(userobj.profile.visitorId,bookingTiming,reasonForVisit,);
        console.log(bookingResponse);
        if (bookingResponse.status == 200) {
          clear();
          setCompleted(true);
          setTimeout(()=>{
            navigate("/");
          },10000);
          
        }
      }catch(error:any){
        clear();
        timer(error.response?.data?.message ||"Unable to proceed with bookng")
        console.error('error: ', error);
      } finally{
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="visitorcontentbg">
      <div className="bg-slate-100/70 min-h-lvh">
        <div className="bg-purple-900 pt-5 px-4 text-slate-100 font-bold h-16">
          <Link to="/">
            <ArrowLeftIcon className="inline mr-4 backbtn" />
          </Link>
          <h3 className="text-base font-bold inline">Visitor Booking</h3>
          <span style={{ float: "right" }}>en</span>
        </div>
        <div className="visitormobilebanner" />
        {/* BODY */}
        <div className="sm:p-4 sm:pb-16 sm:pt-10">
          <div className="shadow-lg bg-white sm:max-w-2xl sm:m-auto sm:rounded-md">
            <p className="font-bold text-base text-slate-900 pt-6 px-4 pb-2 underline">
              Visitor Booking Form
            </p>
            <div className="p-4">
              <p className="font-semibold pt-4 pb-2 text-sm text-slate-800">
                Reason for Visit
              </p>

              <Input
                type="text"
                className="w-full sm:w-60"
                value={reasonForVisit}
                placeholder="provide a valid reason, more than 5 characters"
                onChange={(e) =>setReasonForVisit(e.target.value)}
              />
              <p className="font-semibold pt-4 pb-2 text-sm text-slate-600">
                Date
              </p>
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full sm:w-60 justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? date.toLocaleString(DateTime.DATE_MED) : <span>Select a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date?.toJSDate()}
                    onSelect={d => handleDateSelect(d? DateTime.fromJSDate(d): null)}
                    initialFocus
                    disabled ={isDateUnavailable}
                  />
                </PopoverContent>
              </Popover>
              <br />
              <br />
              { date &&(
                <>
                <p className="font-semibold pb-3  text-sm">Time Slot</p>
                <div className="pb-4">
                  {availableTimeSlot.map(time => (
                    <Badge
                      key={time}
                      className={`cursor-pointer ${timeSlot === time ? 'bg-blue-600' : 'bg-slate-400 hover:bg-blue-600'} mr-2 mb-2`}
                      onClick={() => handleTimeSlotSelect(time)}
                      >
                        {time}
                    </Badge>
                  ))}
                </div>
                </>
              )} 
            </div>
            <hr />
            {date && timeSlot && reasonForVisit.length >5 &&(
              <div className="p-4 mb-8 mt-2">
              <Button className="float-right" onClick={()=> book()}>Request Booking</Button>
             </div>
            )}
          </div>
          {error &&(
            <Alert message={errorMsg} type="error"/>
          )}
          {completed &&(
            <Alert message="Booking completed" type="success"/>
          )}
        </div>
      </div>
    </div>
  )
}

export default VisitorBooking;
