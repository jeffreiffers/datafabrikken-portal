import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

import withPage, {
  Props as CmsArticleProps
} from '../../../../../components/with-cms-page';
import Article from '../../../../../components/article';

import { articleIds } from './articles';
import Root from '../../../../../components/root';

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

  return <Root invertColor>{cmsPage && <Article article={cmsPage} />}</Root>;
};

export default compose<FC>(memo, withPage)(ArticlePage);
