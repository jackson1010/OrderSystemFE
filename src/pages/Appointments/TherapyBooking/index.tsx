import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import "./styles.css";
import { format } from "date-fns";
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
import { Link } from "react-router-dom";

const TherapyBooking = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="therapycontentbg">
      <div className="bg-slate-100/70 min-h-lvh">
        <div className="bg-slate-800 pt-5 px-4 text-slate-100 font-bold h-16">
          <Link to="/">
            <ArrowLeftIcon className="inline mr-4 backbtn" />
          </Link>
          <h3 className="text-base font-bold inline">Therapy Booking</h3>
          <span style={{ float: "right" }}>en</span>
        </div>
        <div className="therapymobilebanner" />
        <div className="sm:p-4 sm:pb-16 sm:pt-10">
          <div className="shadow-lg bg-white sm:max-w-sm sm:ml-2 sm:rounded-md">
            <div className="bg-slate-0 p-4 sm:rounded-t-md">
              <h3 className="font-bold mb-1 text-slate-700 text-sm">
                Therapy Booking
              </h3>
              <p className="text-xs mb-2 text-slate-400 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                sunt voluptatibus recusandae modi eum nulla. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Magni, reiciendis?
              </p>
            </div>
            <hr />
            <div className="p-4 text-xs">
              <p className="font-semibold pb-2 text-sm text-slate-600">
                Category:
              </p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">
                    Primary Assessment (New Referral)
                  </SelectItem>
                  <SelectItem value="followup">
                    Therapy Booking (Existing Customer)
                  </SelectItem>
                </SelectContent>
              </Select>

              <br />
              <p className="font-semibold pb-2 text-sm text-slate-600">
                Transportation:
              </p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inhouse">
                    In-house scheduled transportation
                  </SelectItem>
                  <SelectItem value="selftransport">
                    Self arranged transportation
                  </SelectItem>
                </SelectContent>
              </Select>

              <br />
              <p className="font-semibold pb-2 text-sm text-slate-600">
                Therapist:{" "}
              </p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Therapist" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="001">001 - Happy Bear</SelectItem>
                  <SelectItem value="002">002 - Angry Tiger</SelectItem>
                  <SelectItem value="003">003 - Sleepy Dog</SelectItem>
                  <SelectItem value="004">004 - Tasty Chicken</SelectItem>
                  <SelectItem value="005">005 - Crazy Frog</SelectItem>
                </SelectContent>
              </Select>

              <br />

              <p className="font-semibold pb-2 text-sm text-slate-600">Date:</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <br />
              <br />

              <p className="font-semibold pb-3  text-sm">Time Slot:</p>
              <div className="pb-4">
                <Badge className="cursor-pointer bg-slate-400 hover:bg-blue-600 mr-2 mb-2">
                  09:00AM
                </Badge>
                <Badge className="cursor-pointer bg-slate-400 hover:bg-blue-600 mr-2 mb-2">
                  10:00AM
                </Badge>
                <Badge className="cursor-pointer bg-slate-400 hover:bg-blue-600 mr-2 mb-2">
                  11:00AM
                </Badge>
                <Badge className="cursor-pointer bg-slate-400 hover:bg-blue-600 mr-2 mb-2">
                  12:00AM
                </Badge>
                <Badge className="cursor-pointer bg-slate-400 hover:bg-blue-600 mr-2 mb-2">
                  01:00PM
                </Badge>
                <Badge className="cursor-not-allowed bg-slate-200 hover:bg-slate-200 mr-2 mb-2">
                  02:00PM
                </Badge>
                <Badge className="cursor-pointer bg-slate-400 hover:bg-blue-600 mr-2 mb-2">
                  03:00PM
                </Badge>
                <Badge className="cursor-not-allowed bg-slate-200 hover:bg-slate-200 mr-2 mb-2">
                  04:00PM
                </Badge>
                <Badge className="cursor-not-allowed bg-slate-200 hover:bg-slate-200 mr-2 mb-2">
                  05:00PM
                </Badge>
                <Badge className="cursor-not-allowed bg-slate-200 hover:bg-slate-200 mr-2 mb-2">
                  06:00PM
                </Badge>
              </div>
            </div>

            <hr />
            <div className="p-4 mb-4">
              <Button className="float-right">Proceed Next</Button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyBooking;
