import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { PARAGRAPH } from '../../../../../enums';
import {
  getParagraphBodyProcessed,
  getParagraphImage
} from '../../../../../utils/drupal-values';
import { convertToSanitizedHtml } from '../../../../../utils/markdown-converter';

import withArticle, {
  Props as CmsArticleProps
} from '../../../../../components/with-cms-article';

import SC from './styled';
import { articleIds } from './articles';

interface Props extends CmsArticleProps, RouteComponentProps {}

export const renderModule = (module: any) => {
  switch (module.type) {
    case PARAGRAPH.BODY:
      return (
        <SC.Body
          key={module.id}
          dangerouslySetInnerHTML={{
            __html: convertToSanitizedHtml(getParagraphBodyProcessed(module))
          }}
        />
      );
    case PARAGRAPH.IMAGE: {
      const image = getParagraphImage(module);
      return (
        <SC.FullWidthImage
          key={module.id}
          alt={image?.meta?.alt}
          src={image?.download_urls?.canonical}
        />
      );
    }
    default:
      return null;
  }
};

const ArticlePage: FC<Props> = ({
  cmsArticle,
  cmsArticleActions: { getCmsArticleRequested: getCmsArticle },
  location: { pathname }
}) => {
  useEffect(() => {
    getCmsArticle(articleIds[pathname].nb);
  }, []);

  const {
    title,
    field_ingress: ingress,
    field_modules: modules
  } = cmsArticle ?? {};

  return (
    <SC.Article>
      <Helmet>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={ingress} />
        <meta name='og:description' content={ingress} />
      </Helmet>
      <SC.Container>
        <SC.Header>
          <SC.Title>{title}</SC.Title>
        </SC.Header>
        {ingress && (
          <SC.Ingress
            dangerouslySetInnerHTML={{
              __html: convertToSanitizedHtml(ingress)
            }}
          />
        )}
        {modules?.map((module: any) => renderModule(module))}
      </SC.Container>
    </SC.Article>
  );
};

export default compose<FC>(memo, withArticle)(ArticlePage);
