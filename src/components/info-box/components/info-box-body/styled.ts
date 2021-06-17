import styled from 'styled-components';

import { theme } from '../../../../entrypoints/main/app/theme';

const Body = styled.div`
  font-size: ${theme.fontSize('FS12')};
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export default { Body };
