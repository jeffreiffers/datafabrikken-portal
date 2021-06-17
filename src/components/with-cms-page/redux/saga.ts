import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET_CMS_PAGE_REQUESTED } from './action-types';
import * as actions from './actions';

import {
  getPageEntity,
  extractPageData
} from '../../../services/api/cms-api/page';

import type { CmsArticle as CmsPage } from '../../../types';

function* getCmsPageRequested({
  payload: { id }
}: ReturnType<typeof actions.getCmsPageRequested>) {
  try {
    const data: Record<string, any> = yield call(getPageEntity, id);

    if (data) {
      yield put(actions.getCmsPageSucceeded(extractPageData(data) as CmsPage));
    } else {
      yield put(actions.getCmsPageFailed(''));
    }
  } catch (e) {
    yield put(actions.getCmsPageFailed(e.message));
  }
}

export default function* saga() {
  yield all([takeLatest(GET_CMS_PAGE_REQUESTED, getCmsPageRequested)]);
}
