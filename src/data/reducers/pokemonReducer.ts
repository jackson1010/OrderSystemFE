import { SET_POKEMON } from "../constant";

export const pokemonReducer = (data = {}, action: any) => {
  switch (action.type) {
    case SET_POKEMON:
      console.log("reducer - set pokemon called");
      console.log(action.data);
      return action.data;
    default:
      return data;
  }
};
