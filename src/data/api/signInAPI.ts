import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:8080/api",
  headers:{
    'Content-Type': 'application/json'
  }
});

export const signIn = (credentials: any) => authApi.post('/signin', credentials);

export default authApi;
