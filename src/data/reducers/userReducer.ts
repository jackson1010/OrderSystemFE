import { GET_USEROBJ, SET_USER } from "../constant";

export const userReducer = (
  data = { islogin: false, username: "", jwttoken: "" , role: "" },
  action: any
) => {
  switch (action.type) {
    case GET_USEROBJ:
      console.log("reducer - get user called");
      console.log(data);
      return data;
    case SET_USER:
      console.log("reducer - set user called");
      return action.data;
    default:
      return data;
  }
};
