import axios from 'axios';
import { VisitorBookingRequest } from '../requestBody';
import { DateTime } from 'luxon';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use((config) =>{
  const token = localStorage.getItem('jwtToken');

  if (token && !config.url?.includes('/signin') && !config.url?.includes('visitor/signup')){
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) =>{
  return Promise.reject(error);
}
)

//COMMON
export const signUp = (credentials: any) => apiClient.post('/visitor/signup', credentials);
export const signIn = (credentials: any) => apiClient.post('/signin', credentials);
export const resetPassword = (username: any) => apiClient.post('/resetpassword', username);
export const getAllHolidays = () => apiClient.get('/getallholidays');
export const getAllBookings = (date: any) => apiClient.get(`/allbookings?date=${date}`);

//VISITOR
export const getProfile = (username: string) => apiClient.post('/profile', { username });
export const getMyVisitorBookings = (visitorId: string) => apiClient.get(`/visitor/bookings?visitorId=${visitorId}`);
export const deleteBooking =(visitorBookingId: string) => apiClient.delete(`/visitor/delbooking?visitorBookingId=${visitorBookingId}`);
export const visitorBook = (visitorId: string, bookingTiming: any, reasonForVisit: string) => {
  const requestBody: VisitorBookingRequest = {
    bookingTiming,
    reasonForVisit,
    visitorId,
  };

  return apiClient.post('/visitor/book', requestBody);
};


export default apiClient;
