import styled from 'styled-components';

import { theme } from '../../../app/theme';

import DatasetIconBase from '../../../../../images/service-data-search.inline.svg';

const Page = styled.article`
  line-height: 1.5;
  padding-top: ${theme.spacing('S50')};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS32')};
  margin-bottom: ${theme.spacing('S10')};
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DatasetIcon = styled(DatasetIconBase)``;

export default {
  Page,
  Title,
  Content,
  DatasetIcon
};
