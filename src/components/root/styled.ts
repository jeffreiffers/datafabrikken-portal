import styled from 'styled-components';

import { Colour, theme } from '../../entrypoints/main/app/theme';

const Root = styled.main`
  background-color: ${theme.colour(Colour.NEUTRAL, 'N60')};
  display: flex;
  flex-direction: column;
  flex: 1;
  height: auto;
`;

export default { Root };
