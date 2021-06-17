import { all } from 'redux-saga/effects';

import cmsPageSaga from '../../../components/with-cms-page/redux/saga';
import datasetsSaga from '../../../components/with-datasets/redux/saga';

export default function* saga() {
  yield all([cmsPageSaga(), datasetsSaga()]);
}
