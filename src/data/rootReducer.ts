import { combineReducers } from "redux";
import { cartsReducer } from "./reducers/cartReducer";
import { pokemonReducer } from "./reducers/pokemonReducer";

const rootReducer = combineReducers({
    cartsReducer,
    pokemonReducer
  });
  export default rootReducer;