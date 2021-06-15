import styled from 'styled-components';

import { theme } from '../../../app/theme';

import ContainerBase from '../../../../../components/container';

const Article = styled.article`
  line-height: 1.5;
`;

const Container = styled(ContainerBase)``;

const Header = styled.section`
  margin-top: ${theme.spacing('S50')};
`;

const Title = styled.h1`
  font-size: 3.5em;
  margin-bottom: 1.5em;
`;

const Ingress = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
  font-weight: ${theme.fontWeight('FW400')};
  margin-bottom: 1.5em;
`;

const Body = styled.p`
  font-size: 1.2em;
`;

const FullWidthImage = styled.img`
  border-radius: 5px;
  height: auto;
  margin-bottom: 4em;
  max-width: 100%;
`;

export default {
  Article,
  Container,
  Header,
  Title,
  Ingress,
  Body,
  FullWidthImage
};
