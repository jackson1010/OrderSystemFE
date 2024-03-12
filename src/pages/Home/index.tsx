import GehaLogo from "../../assets/logo/GehaLogo.png";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Home = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <div className="bg-slate-100 p-4 text-slate-600 font-bold ">
        <img src={GehaLogo} className="inline" style={{ height: "40px" }} />
        <span className="ml-2">Geha Booking System</span>
        <span style={{ float: "right" }}>en</span>
      </div>
      <div className="p-4">
        <Card className="p-4 bg-slate-100">
          <h3 className="text-md font-bold">Notice:</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, qui
            suscipit illo est unde sequi doloremque sed laborum deleniti. Vero
            ad placeat magni repellat, facilis vel totam inventore iusto
            sapiente! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aperiam rem architecto id nostrum nobis ea, perferendis non
            inventore? Similique eveniet praesentium iusto amet rerum,
            voluptatem eligendi? Rem earum amet porro.
          </p>
        </Card>
      </div>
      <div className="p-5">
        <p className="text-md font-bold pb-2">Category:</p>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="DRC">DRC - Day Rehab Centre</SelectItem>
            <SelectItem value="SH">SH - Sheltered Home</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-2 p-5 inline-block">
        <p className="text-md font-bold pb-2">Booking Slot:</p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    </div>
  );
};

export default Home;
