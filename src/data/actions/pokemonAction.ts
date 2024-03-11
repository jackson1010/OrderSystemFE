import { GET_POKEMON } from "../constant";
export const getPokemon = () => {
  console.log("action - get pokemon called");
  return {
    type: GET_POKEMON,
  };
};

