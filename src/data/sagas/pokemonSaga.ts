import { takeEvery, put } from "redux-saga/effects";
import { GET_POKEMON, SET_POKEMON } from "../constant";
import pokemonApi from "../api/pokemonApi";

function* sagaGet(): Generator<any, any, any> {
  console.log("Saga Get Pokemon called...");
  try {
    let res = yield pokemonApi.get("/pikachu");
    console.log("Axios response >>>", res);
    console.log("Axios data >>>", res.data);
    yield put({
      type: SET_POKEMON,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
  }
}

function* pokemonSaga() {
  yield takeEvery(GET_POKEMON, sagaGet);
}
export default pokemonSaga;
