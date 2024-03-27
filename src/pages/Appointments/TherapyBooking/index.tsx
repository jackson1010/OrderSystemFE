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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const TherapyBooking = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div>
      <div className="bg-slate-700 pt-5 px-4 text-slate-200 font-bold h-16">
        <Link to="/">
          <ArrowLeftIcon className="inline mr-4 backbtn" />
        </Link>
        <h3 className="text-base font-bold inline">Therapy Booking</h3>
        <span style={{ float: "right" }}>en</span>
      </div>
      <div className="therapybanner" />
      <div className="mt-2 p-4">
        <p className="font-bold pb-2 text-sm">Category: </p>
        <Select>
          <SelectTrigger className="max-w-72">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">
              Primary Assessment (New Referral)
            </SelectItem>
            <SelectItem value="followup">Therapy Appointment</SelectItem>
          </SelectContent>
        </Select>

        <br />
        <p className="font-bold pb-2 text-sm">Therapist: </p>
        <Select>
          <SelectTrigger className="max-w-72">
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

        <p className="font-bold pb-2 text-sm">Date:</p>
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

        <p className="font-bold pb-3  text-sm">Time Slot:</p>
        <Badge className="cursor-pointer bg-blue-300 hover:bg-blue-600 mr-2 mb-2">
          09:00AM
        </Badge>
        <Badge className="cursor-pointer bg-blue-300 hover:bg-blue-600 mr-2 mb-2">
          10:00AM
        </Badge>
        <Badge className="cursor-pointer bg-blue-300 hover:bg-blue-600 mr-2 mb-2">
          11:00AM
        </Badge>
        <Badge className="cursor-pointer bg-blue-300 hover:bg-blue-600 mr-2 mb-2">
          12:00AM
        </Badge>
        <Badge className="cursor-pointer bg-blue-300 hover:bg-blue-600 mr-2 mb-2">
          01:00PM
        </Badge>
        <Badge className="cursor-not-allowed bg-slate-200 hover:bg-slate-200 mr-2 mb-2">
          02:00PM
        </Badge>
        <Badge className="cursor-pointer bg-blue-300 hover:bg-blue-600 mr-2 mb-2">
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

        <br />

        <p className="font-bold pb-3 mt-4  text-sm">Transportation:</p>
        <RadioGroup defaultValue="">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">In-house scheduled transportation</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Self arranged transportation</Label>
          </div>
        </RadioGroup>
        <br />

        <Button className="mt-8 mb-12">Proceed Next</Button>
      </div>
    </div>
  );
};

export default TherapyBooking;
