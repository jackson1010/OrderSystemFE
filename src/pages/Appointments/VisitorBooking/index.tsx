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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

const VisitorBooking = () => {
  const [date, setDate] = useState<Date>();

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
        <div className="sm:p-4 sm:pb-16 sm:pt-10">
          <div className="shadow-lg bg-white sm:max-w-2xl sm:m-auto sm:rounded-md">
            <p className="font-bold text-base text-slate-900 pt-6 px-4 pb-2 underline">
              Visitor Booking Form
            </p>
            <div className="p-4">
              <p className="font-semibold pb-2 text-sm text-slate-800">
                Category
              </p>
              <RadioGroup defaultValue="">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="family"
                    id="r1-1"
                    className="text-slate-500"
                  />
                  <Label
                    htmlFor="r1-1"
                    className="text-sm text-slate-500 font-normal"
                  >
                    Family Member Visit
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="socialworker"
                    id="r1-2"
                    className="text-slate-500"
                  />
                  <Label
                    htmlFor="r1-2"
                    className="text-sm text-slate-500 font-normal"
                  >
                    Social Worker Visit
                  </Label>
                </div>
              </RadioGroup>
              <p className="font-semibold pt-4 pb-2 text-sm text-slate-800">
                Number of Guests
              </p>

              <Input
                type="number"
                placeholder="total pax"
                className="w-full sm:w-60"
              />

              <p className="font-semibold pt-4 pb-2 text-sm text-slate-600">
                Date
              </p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full sm:w-60 justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span></span>}
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

              <p className="font-semibold pb-3  text-sm">Time Slot</p>
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

              <br />
            </div>
            <hr />
            <div className="p-4 mb-8 mt-2">
              <Button className="float-right">Proceed Next</Button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorBooking;
