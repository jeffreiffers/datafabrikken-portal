import {
  GET_CMS_ARTICLE_REQUESTED,
  GET_CMS_ARTICLE_SUCCEEDED,
  GET_CMS_ARTICLE_FAILED,
  RESET_CMS_ARTICLE
} from './action-types';

import { CmsArticle } from '../../../types';

export function getCmsArticleRequested(id: string) {
  return {
    type: GET_CMS_ARTICLE_REQUESTED,
    payload: {
      id
    }
  };
}

export function getCmsArticleSucceeded(article: CmsArticle) {
  return {
    type: GET_CMS_ARTICLE_SUCCEEDED,
    payload: {
      article
    }
  };
}

export function getCmsArticleFailed(message: string) {
  return {
    type: GET_CMS_ARTICLE_FAILED,
    payload: {
      message
    }
  };
}

export function resetCmsArticle() {
  return {
    type: RESET_CMS_ARTICLE
  };
}
