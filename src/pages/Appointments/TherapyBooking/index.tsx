
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

import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const TherapyBooking = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div>
      <div className="bg-slate-800 pt-5 px-4 text-slate-200 font-bold h-16">
        <Link to="/">
          <ArrowLeftIcon className="inline mr-4 backbtn" />
        </Link>
        <h3 className="text-base font-bold inline">Therapy Booking</h3>
        <span style={{ float: "right" }}>en</span>
      </div>
      <div className="mt-2 p-4">
        <p>Select Therapist: </p>
        <Select>
          <SelectTrigger className="max-w-72">
            <SelectValue placeholder="Therapist" />
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

        <p>Date:</p>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[288px] justify-start text-left font-normal",
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

        <p>Time:</p>
        <Select>
          <SelectTrigger className="max-w-72">
            <SelectValue placeholder="Time Slot" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0900" disabled>
              09:00AM
            </SelectItem>
            <SelectItem value="1000" disabled>
              10:00AM
            </SelectItem>
            <SelectItem value="1100" disabled>
              11:00AM
            </SelectItem>
            <SelectItem value="1200">12:00PM</SelectItem>
            <SelectItem value="1300">01:00PM</SelectItem>
            <SelectItem value="1400">02:00PM</SelectItem>
            <SelectItem value="1500" disabled>
              03:00PM
            </SelectItem>
            <SelectItem value="1600" disabled>
              04:00PM
            </SelectItem>
            <SelectItem value="1700">05:00PM</SelectItem>
          </SelectContent>
        </Select>

        <br />

        <p>Remarks:</p>
        <Textarea className="max-w-72" />

        <br />

        <Button>Confirm Booking</Button>
      </div>
    </div>
  );
};

export default TherapyBooking;
