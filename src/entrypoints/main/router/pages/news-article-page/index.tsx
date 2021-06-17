import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

import withPage, {
  Props as CmsArticleProps
} from '../../../../../components/with-cms-page';
import Article from '../../../../../components/article';

interface RouteParams {
  newsArticleId: string;
}

interface Props extends CmsArticleProps, RouteComponentProps<RouteParams> {}

const NewsArticlePage: FC<Props> = ({
  cmsPage,
  cmsPageActions: {
    getCmsNewsArticleRequested: getCmsNewsArticle,
    resetCmsPage: resetCmsNewsArticle
  },
  match: {
    params: { newsArticleId }
  }
}) => {
  useEffect(() => {
    getCmsNewsArticle(newsArticleId);
    return () => {
      resetCmsNewsArticle();
    };
  }, []);

  return cmsPage ? <Article article={cmsPage} /> : null;
};

export default compose<FC>(memo, withPage)(NewsArticlePage);
