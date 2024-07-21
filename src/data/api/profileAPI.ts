import axios from 'axios';

const profileApi = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getProfile = (token: string, username: string) => profileApi.post('/profile', { username }, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export default profileApi;
