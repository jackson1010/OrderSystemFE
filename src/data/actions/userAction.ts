import { GET_USEROBJ, SET_USER } from "../constant";
export const getUser = () => {
  console.log("action - get user called");
  return {
    type: GET_USEROBJ,
  };
};
export const setUser = (data: any) => {
  console.log("action - set User called");
  console.log(data);
  return {
    type: SET_USER,
    data: data,
  };
};
