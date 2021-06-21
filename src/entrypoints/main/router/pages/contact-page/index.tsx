import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';

import withPage, {
  Props as CmsArticleProps
} from '../../../../../components/with-cms-page';

import Article from '../../../../../components/article';
import Root from '../../../../../components/root';

const articleId = '382bcca1-3b63-4a03-9719-bfb1810464e0';

interface Props extends CmsArticleProps {}

const FindDataPage: FC<Props> = ({
  cmsPage,
  cmsPageActions: { getCmsPageRequested: getCmsPage, resetCmsPage }
}) => {
  useEffect(() => {
    getCmsPage(articleId);
    return () => {
      resetCmsPage();
    };
  }, []);

  return <Root invertColor>{cmsPage && <Article article={cmsPage} />}</Root>;
};

export default compose<FC>(memo, withPage)(FindDataPage);
