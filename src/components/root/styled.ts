import styled from 'styled-components';

import { Colour, theme } from '../../entrypoints/main/app/theme';

const Root = styled.main`
  background-color: ${theme.colour(Colour.BLUE, 'B52')};
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  display: flex;
  flex-direction: column;
  flex: 1;
  height: auto;
  word-break: break-word;
`;

export default { Root };
