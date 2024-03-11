import { Tuple, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import pokemonSaga from "./sagas/pokemonSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware),
});

sagaMiddleware.run(pokemonSaga);

export default store;
