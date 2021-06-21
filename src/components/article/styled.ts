import styled from 'styled-components';

import ContainerSC from '../container/styled';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const Article = styled.article`
  line-height: 1.5;
  margin-bottom: ${theme.spacing('S50')};
`;

const Container = styled(ContainerSC.Container)`
  padding-top: ${theme.spacing('S50')};
`;

const Header = styled.section`
  background-color: ${theme.colour(Colour.BLUE, 'B52')};
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  padding-bottom: ${theme.spacing('S20')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  margin-bottom: ${theme.spacing('S10')};
`;

const Ingress = styled.p`
  font-size: ${theme.fontSize('FS16')};
  line-height: 1.5;
  margin-bottom: ${theme.spacing('S16')};
`;

const Body = styled.div`
  font-size: ${theme.fontSize('FS12')};
  margin-bottom: ${theme.spacing('S10')};
  & > h2 {
    font-size: ${theme.fontSize('FS16')};
    margin-bottom: ${theme.spacing('S10')};
  }
  & > h3,
  h4 {
    font-size: ${theme.fontSize('FS14')};
    margin-bottom: ${theme.spacing('S10')};
  }
  & > p {
    margin-bottom: ${theme.spacing('S10')};
  }
`;

const Quote = styled.div`
  border-left: 3px solid ${theme.colour(Colour.BLUE, 'B14')};
  font-size: ${theme.fontSize('FS20')};
  font-style: italic;
  line-height: 1.5;
  padding: ${theme.spacing('S6')} ${theme.spacing('S10')};
  margin: ${theme.spacing('S16')} 0;
`;

const ImageWrapper = styled.div`
  margin-bottom: ${theme.spacing('S16')};
`;

const Image = styled.img`
  max-width: 100%;
`;

const ImageText = styled.span`
  font-size: 0.9rem;
`;

export default {
  Article,
  Container,
  Header,
  Title,
  Ingress,
  Body,
  Quote,
  ImageWrapper,
  Image,
  ImageText
};
