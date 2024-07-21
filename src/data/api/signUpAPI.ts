import axios from "axios";

const signUpApi = axios.create({
  baseURL: "http://localhost:8080/api",
  headers:{
    'Content-Type': 'application/json'
  }
});

export const signUp = (credentials: any) => signUpApi.post('visitor/signup', credentials);

export default signUpApi;
