import { DateTime } from 'luxon';

export interface VisitorBookingRequest {
    visitorId: string;
    bookingTiming: DateTime;
    reasonForVisit: string;
  }