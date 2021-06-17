import {
  GET_CMS_PAGE_REQUESTED,
  GET_CMS_PAGE_SUCCEEDED,
  GET_CMS_PAGE_FAILED,
  RESET_CMS_PAGE
} from './action-types';

import { CmsArticle as CmsPage } from '../../../types';

export function getCmsPageRequested(id: string) {
  return {
    type: GET_CMS_PAGE_REQUESTED,
    payload: {
      id
    }
  };
}

export function getCmsPageSucceeded(page: CmsPage) {
  return {
    type: GET_CMS_PAGE_SUCCEEDED,
    payload: {
      page
    }
  };
}

export function getCmsPageFailed(message: string) {
  return {
    type: GET_CMS_PAGE_FAILED,
    payload: {
      message
    }
  };
}

export function resetCmsPage() {
  return {
    type: RESET_CMS_PAGE
  };
}
