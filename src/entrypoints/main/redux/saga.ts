import { all } from 'redux-saga/effects';

import datasetsSaga from '../../../components/with-datasets/redux/saga';

export default function* saga() {
  yield all([datasetsSaga()]);
}
