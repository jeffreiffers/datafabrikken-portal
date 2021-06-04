import styled from 'styled-components';

import { Colour, theme } from '../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const DatasetsPage = styled.div`
  background-color: ${theme.colour(Colour.NEUTRAL, 'N60')};
  display: flex;
  flex-direction: column;
  height: 500vh;
  padding-top: ${theme.spacing('S50')};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1140px;
  z-index: 10;

  @media (max-width: 1204px) {
    & {
      width: 100%;
    }
  }

  ${onMobileView} {
    & {
      padding: 0 1em;
    }
  }
`;

export default { DatasetsPage, Container };
