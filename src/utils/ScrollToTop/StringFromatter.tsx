import { min } from "date-fns";

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return date.toLocaleDateString(undefined, options);
  };

  export const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0");
    const mins = date.getMinutes().toString().padStart(2, "0");

    const timeString = `${hours}:${mins}`;
    return timeString;
  };

 export const toCamelCase = (str: string) => {
    return str
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase());
  };