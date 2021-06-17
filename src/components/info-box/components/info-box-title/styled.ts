import styled from 'styled-components';

import { theme } from '../../../../entrypoints/main/app/theme';

const Title = styled.div`
  display: inline-flex;
  font-size: ${theme.fontSize('FS16')};
  margin-bottom: ${theme.spacing('S8')};
  &:after {
    font-family: 'Material Icons';
    content: '\\e5c8';
    font-size: ${theme.fontSize('FS16')};
    margin-left: ${theme.spacing('S4')};
  }
`;

export default { Title };
