import styled, { css } from 'styled-components';
import { ParallaxBanner as ParallaxBannerBase } from 'react-scroll-parallax';

import { theme } from '../../../app/theme';

import NatureImage from '../../../../../images/nature.jpg';
import { AnimateProps, slideInFromLeft } from '../../../../../utils/animations';

import Container from '../../../../../components/container';

const MainPageFeatureToggleOff = styled.article`
  background-image: url(${NatureImage});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
`;

const MainPage = styled(Container)``;

const ParallaxBanner = styled(ParallaxBannerBase)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: ${theme.spacing('S50')};
`;

const Banner = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 25vh;
`;

const Row = styled.div<AnimateProps>`
  display: flex;
  margin-bottom: 15em;
  visibility: hidden;
  opacity: 0;
  will-change: transform, opacity, visibility;
  animation-delay: 200ms;
  ${({ animate }) =>
    animate &&
    css`
      animation-duration: 700ms;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      animation-name: ${slideInFromLeft};
    `}
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  & > ${Row} {
    &:nth-child(odd) {
      justify-content: flex-end;
    }
  }
`;

export default {
  MainPageFeatureToggleOff,
  Title,
  ParallaxBanner,
  MainPage,
  Banner,
  MainContent,
  Row
};
