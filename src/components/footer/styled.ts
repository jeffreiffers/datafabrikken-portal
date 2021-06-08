import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

const onMobileView = '@media (max-width: 900px)';

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 3em 0;
  background-color: ${theme.colour(Colour.NEUTRAL, 'N60')};
`;

const ByLine = styled.div`
  background: ${theme.colour(Colour.NEUTRAL, 'N70')};
  color: ${theme.colour(Colour.NEUTRAL, 'N10')};
  display: flex;
  justify-content: center;
  padding: 3em 0;

  & > span {
    ${onMobileView} {
      & {
        margin: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
      }
    }
  }
`;

export default { Footer, ByLine };
