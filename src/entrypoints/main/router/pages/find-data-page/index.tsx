import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';
import { Link as RouterLink } from 'react-router-dom';

import withPage, {
  Props as CmsArticleProps
} from '../../../../../components/with-cms-page';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';

import {
  InfoBox,
  InfoBoxBody,
  InfoBoxTitle
} from '../../../../../components/info-box';
import { PARAGRAPH } from '../../../../../enums';
import { convertToSanitizedHtml } from '../../../../../utils/markdown-converter';

import SC from './styled';

const articleId = '8d6ed4d9-f2b9-4d24-9561-595af3876240';

interface Props extends CmsArticleProps {}

export const renderModule = (module: any) => {
  switch (module.type) {
    case PARAGRAPH.INFO_BOX: {
      const infoBoxUrl = module?.field_link?.uri?.replace('internal:', '');
      // eslint-disable-next-line no-console
      console.log('infoUrl', infoBoxUrl);
      const r = new RegExp('^(?:[a-z]+:)?//', 'i');
      const isAbsoluteUrl = r.test(infoBoxUrl) ?? false;
      // eslint-disable-next-line no-console
      console.log('isAbsoluteUrl', isAbsoluteUrl);
      return (
        <InfoBox
          key={module.id}
          {...(isAbsoluteUrl
            ? { href: module.field_link?.uri }
            : { as: RouterLink, to: infoBoxUrl })}
        >
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

  const modules = cmsPage?.field_modules ?? [];

  return (
    <Root>
      <Container>
        <SC.Page>
          <SC.Title>{cmsPage?.title}</SC.Title>
          <SC.Content>
            {modules?.map((module: any) => renderModule(module))}
          </SC.Content>
        </SC.Page>
      </Container>
    </Root>
  );
};

export default compose<FC>(memo, withPage)(FindDataPage);
