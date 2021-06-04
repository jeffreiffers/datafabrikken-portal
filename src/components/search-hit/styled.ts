import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const SearchHit = styled.div`
  background-color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  color: ${theme.colour(Colour.NEUTRAL, 'N60')};
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize('FS12')};
  padding: 3em;
  margin-bottom: 2em;
`;

const Title = styled.h3`
  font-size: ${theme.fontSize('FS16')};
  margin-bottom: 1em;
`;

const Description = styled.p`
  font-size: ${theme.fontSize('FS12')};
`;

export default { SearchHit, Title, Description };
