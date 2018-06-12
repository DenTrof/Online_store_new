/**
 * Gets the repositories of the user from Github
 */

import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { ServerDataLoaded, ServerDataLoadingError,
  ServerDataStart, IdsData } from 'containers/HomePage/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import axios from 'axios';

export function* getDataOnlineStore() {
  // -------------------------------- Get Data for online market


  yield put(ServerDataStart());

  try {
    // const serverData = yield axios.get('https://jsonplaceholder.typicode.com/posts/1');
    // ?mocky-delay=3000ms
    const serverData = yield axios.get('http://www.mocky.io/v2/5abc50f42d000047009be045');
    yield put(ServerDataLoaded(serverData.data));
  } catch (err) {
    yield put(ServerDataLoadingError(err));
  }
}

// ------------------------- Data for pagination ----------------------------------------
export function* idsData() {
  const serverData = yield axios.get('http://www.mocky.io/v2/5abc50f42d000047009be045');
  const idsData = serverData.data.eveData.map((data) => data.id);
  yield put(IdsData(idsData));
}

// Bootstrap sagas
export default [
  getDataOnlineStore,
  idsData,
];
