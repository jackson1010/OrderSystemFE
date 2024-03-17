import { combineReducers } from "redux";
import { cartsReducer } from "./reducers/cartReducer";
import { pokemonReducer } from "./reducers/pokemonReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
    cartsReducer,
    pokemonReducer,
    userReducer
  });
  export default rootReducer;