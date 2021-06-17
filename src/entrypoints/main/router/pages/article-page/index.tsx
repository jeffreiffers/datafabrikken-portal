import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

import withPage, {
  Props as CmsArticleProps
} from '../../../../../components/with-cms-page';
import Article from '../../../../../components/article';

import { articleIds } from './articles';

interface Props extends CmsArticleProps, RouteComponentProps {}

const ArticlePage: FC<Props> = ({
  cmsPage,
  cmsPageActions: { getCmsPageRequested: getCmsPage, resetCmsPage },
  location: { pathname }
}) => {
  useEffect(() => {
    getCmsPage(articleIds[pathname].nb);
    return () => {
      resetCmsPage();
    };
  }, []);

  return cmsPage ? <Article article={cmsPage} /> : null;
};

export default compose<FC>(memo, withPage)(ArticlePage);
