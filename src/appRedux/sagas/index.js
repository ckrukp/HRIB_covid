import {all} from "redux-saga/effects";

export default function* rootSaga(getState) {
  yield all([
    // authSagas(),
    // marketDatasetSagas(),
    // subscribeDatasetSagas(),
    // daasSagas(),
    // settingSagas(),
  ]);
}
