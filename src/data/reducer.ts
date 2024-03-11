import { combineReducers } from "redux";
import { ADD_CARTS, DELETE_CARTS, GET_CARTS } from "./constant";

const cartsReducer = (data = ["orange"], action: any) => {
  switch (action.type) {
    case GET_CARTS:
      console.log("reducer - get carts called");
      console.log(data);
      return data;
    case ADD_CARTS:
      console.log("reducer - add carts called");
      return [...data, action.data];
    case DELETE_CARTS:
      console.log("reducer - delete carts called");
      let newcart = [...data];
      newcart.pop();
      return newcart;
    default:
      return data;
  }
};
const rootReducer = combineReducers({
  cartsReducer,
});
export default rootReducer;
