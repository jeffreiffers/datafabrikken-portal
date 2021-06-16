import styled from 'styled-components';

import ContainerSC from '../../../../../components/container/styled';

import { theme, Colour } from '../../../app/theme';

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
  min-height: 50vh;
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

const Body = styled.p`
  font-size: ${theme.fontSize('FS12')};
  margin-bottom: ${theme.spacing('S10')};
`;

const Quote = styled.div`
  border-left: 3px solid ${theme.colour(Colour.BLUE, 'B14')};
  font-size: ${theme.fontSize('FS20')};
  font-style: italic;
  line-height: 1.5;
  padding: ${theme.spacing('S6')} ${theme.spacing('S10')};
  margin: ${theme.spacing('S16')} 0;
`;

const FullWidthImage = styled.img`
  border-radius: 5px;
  height: auto;
  margin-bottom: ${theme.spacing('S40')};
  max-width: 100%;
`;

export default {
  Article,
  Container,
  Header,
  Title,
  Ingress,
  Body,
  Quote,
  FullWidthImage
};
