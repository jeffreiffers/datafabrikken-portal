import React, { FC, memo } from 'react';
import { Helmet } from 'react-helmet';

import { PARAGRAPH } from '../../enums';
import {
  getParagraphBodyProcessed,
  getParagraphImage
} from '../../utils/drupal-values';
import { convertToSanitizedHtml } from '../../utils/markdown-converter';

import Root from '../root';
import { Variant as ContainerVariant } from '../container';
import { InfoBox, InfoBoxBody, InfoBoxTitle } from '../info-box';

import SC from './styled';
import { CmsArticle } from '../../types';

interface Props {
  article: Partial<CmsArticle>;
}

export const renderModule = (module: any) => {
  switch (module.type) {
    case PARAGRAPH.BODY:
      return (
        <SC.Body
          key={module.id}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: convertToSanitizedHtml(getParagraphBodyProcessed(module))
          }}
        />
      );
    case PARAGRAPH.QUOTE:
      return (
        <SC.Quote
          key={module.id}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: convertToSanitizedHtml(getParagraphBodyProcessed(module))
          }}
        />
      );
    case PARAGRAPH.IMAGE: {
      const image = getParagraphImage(module);
      return (
        <SC.ImageWrapper key={module.id}>
          <SC.Image
            alt={image?.meta?.alt}
            src={image?.download_urls?.canonical}
          />
          <SC.ImageText>{module.field_image?.field_ingress}</SC.ImageText>
        </SC.ImageWrapper>
      );
    }
    case PARAGRAPH.INFO_BOX: {
      return (
        <InfoBox key={module.id} href={module.field_link?.uri} invertColor>
          <InfoBoxTitle>
            <h2>{module.field_link?.title}</h2>
          </InfoBoxTitle>
          <InfoBoxBody>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: convertToSanitizedHtml(module.field_body?.processed)
              }}
            />
          </InfoBoxBody>
        </InfoBox>
      );
    }
    default:
      return null;
  }
};

const Article: FC<Props> = ({ article }) => {
  const title = article?.title;
  const ingress = article?.field_ingress;
  const modules = article?.field_modules;
  return (
    <Root invertColor>
      <Helmet>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={ingress} />
        <meta name='og:description' content={ingress} />
      </Helmet>
      <SC.Article>
        <SC.Header>
          <SC.Container variant={ContainerVariant.WIDTH_720}>
            <SC.Title>{title}</SC.Title>
            {ingress && (
              <SC.Ingress
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: convertToSanitizedHtml(ingress)
                }}
              />
            )}
          </SC.Container>
        </SC.Header>
        <SC.Container variant={ContainerVariant.WIDTH_720}>
          {modules?.map((module: any) => renderModule(module))}
        </SC.Container>
      </SC.Article>
    </Root>
  );
};

export default memo(Article);
