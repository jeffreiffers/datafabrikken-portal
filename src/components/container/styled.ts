import styled from 'styled-components';

import { theme } from '../../entrypoints/main/app/theme';

const onMobileView = '@media (max-width: 900px)';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  max-width: 1140px;
  margin: 0 auto;
  overflow-wrap: break-word;
  z-index: 10;

  @media (max-width: 1204px) {
    & {
      margin: 0 ${theme.spacing('S32')};
    }
  }

  ${onMobileView} {
    & {
      margin: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

export default { Container };
