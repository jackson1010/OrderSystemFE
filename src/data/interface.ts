export interface UnavailableDate {
    id: number;
    date: string;
    center: string;
    is_open: boolean;
    holiday: string;
  }

export const TIME_SLOTS = [
    "09:00", "10:00", "11:00", "12:00", "13:00",
    "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  export const BOOK_SLOT_LIMIT = 3;
  