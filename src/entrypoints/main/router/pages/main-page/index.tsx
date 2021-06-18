import React, { memo, FC, useEffect } from 'react';
import { compose } from 'redux';
import { Link as RouterLink, RouteComponentProps } from 'react-router-dom';
import { InView } from 'react-intersection-observer';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';
import ParallaxContainer from '../../../../../components/parallax-container';
import {
  ContentBox,
  ContentBoxHeader,
  ContextBoxBody,
  SC as ContentBoxSC,
  TitleVariant
} from '../../../../../components/content-box';
import {
  InfoBox,
  InfoBoxBody,
  InfoBoxTitle,
  SC as InfoBoxSC
} from '../../../../../components/info-box';
import Translation from '../../../../../components/translation';
import withNews, {
  Props as CmsNewsProps
} from '../../../../../components/with-cms-news';
import { PATHNAME } from '../../../../../enums';
import { dateStringToDate, formatDate } from '../../../../../utils/date';

import SC from './styled';

const isFeatureToggleActive = localStorage.getItem('DF_TOGGLE');

interface Props extends RouteComponentProps, CmsNewsProps {}

const MainPage: FC<Props> = ({
  cmsNews,
  cmsNewsActions: { getNewsRequested: getNews }
}) => {
  useEffect(() => {
    getNews({ pageLimit: 2 });
  }, []);
  return isFeatureToggleActive ? (
    <ParallaxContainer>
      <Root>
        <Container>
          <SC.Banner>
            <SC.Row animate>
              <ContentBox>
                <ContentBoxHeader>
                  <ContentBoxSC.ContentBoxHeader.Title>
                    Her bygges <b>Datafabrikken</b>.
                  </ContentBoxSC.ContentBoxHeader.Title>
                </ContentBoxHeader>
                <ContentBoxHeader>
                  <ContentBoxSC.ContentBoxHeader.Title>
                    Vi gjør det enklere for deg å dele, finne og anvende data.
                  </ContentBoxSC.ContentBoxHeader.Title>
                </ContentBoxHeader>
              </ContentBox>
            </SC.Row>
          </SC.Banner>
          <SC.MainContent>
            <InView triggerOnce threshold={0.1}>
              {({ inView, ref }) => (
                <SC.Row ref={ref} animate={inView}>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxSC.ContentBoxHeader.Title>
                        <b>Datafabrikken skapes i samabeid med brukerne. </b>
                      </ContentBoxSC.ContentBoxHeader.Title>
                      <ContentBoxSC.ContentBoxHeader.Title
                        variant={TitleVariant.SECONDARY}
                      >
                        <b>Derfor trenger vi deg!</b>
                      </ContentBoxSC.ContentBoxHeader.Title>
                      <ContextBoxBody>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                      </ContextBoxBody>
                    </ContentBoxHeader>
                  </ContentBox>
                </SC.Row>
              )}
            </InView>
            <InView triggerOnce threshold={0.1}>
              {({ inView, ref }) => (
                <SC.Row ref={ref} animate={inView}>
                  <ContentBox>
                    <ContentBoxHeader>
                      <ContentBoxSC.ContentBoxHeader.Title
                        variant={TitleVariant.SECONDARY}
                      >
                        <b>Leter du etter data? </b>
                      </ContentBoxSC.ContentBoxHeader.Title>
                      <ContentBoxSC.ContentBoxHeader.Title>
                        <b>Datafabrikken gjør det enkelt for deg.</b>
                      </ContentBoxSC.ContentBoxHeader.Title>
                      <ContextBoxBody>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                      </ContextBoxBody>
                    </ContentBoxHeader>
                  </ContentBox>
                </SC.Row>
              )}
            </InView>
            <InView triggerOnce threshold={0.1}>
              {({ inView, ref }) => (
                <SC.NewsRow ref={ref} animate={inView}>
                  {cmsNews?.map(
                    ({ id, created, title, field_ingress: ingress }) => (
                      <InfoBox
                        key={id}
                        as={RouterLink}
                        to={`${PATHNAME.NEWS}/${id}`}
                      >
                        <InfoBoxSC.InfoBox.Date>
                          {created && formatDate(dateStringToDate(created))}
                        </InfoBoxSC.InfoBox.Date>
                        <InfoBoxTitle>
                          <h2>{title}</h2>
                        </InfoBoxTitle>
                        <InfoBoxBody>{ingress}</InfoBoxBody>
                      </InfoBox>
                    )
                  )}
                </SC.NewsRow>
              )}
            </InView>
          </SC.MainContent>
        </Container>
      </Root>
    </ParallaxContainer>
  ) : (
    <SC.MainPageFeatureToggleOff>
      <SC.Title>
        <Translation id='title' />
      </SC.Title>
    </SC.MainPageFeatureToggleOff>
  );
};

export default compose<FC>(memo, withNews)(MainPage);
