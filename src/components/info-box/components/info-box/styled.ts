import styled from 'styled-components';

import { theme, Colour } from '../../../../entrypoints/main/app/theme';

import InfoBoxTitleSC from '../info-box-title/styled';

const onMobileView = '@media (max-width: 900px)';

type infoBoxProps = {
  invertColor?: boolean;
};
const InfoBox = styled.a<infoBoxProps>`
  background-color: ${({ invertColor }) =>
    invertColor
      ? theme.colour(Colour.NEUTRAL, 'N0')
      : theme.colour(Colour.BLUE, 'B48')};
  color: ${({ invertColor }) =>
    invertColor
      ? theme.colour(Colour.BLUE, 'B52')
      : theme.colour(Colour.NEUTRAL, 'N0')};
  box-shadow: 0 2px 8px
    ${({ invertColor }) =>
      invertColor
        ? theme.colour(Colour.NEUTRAL, 'N30')
        : theme.colour(Colour.NEUTRAL, 'N60')};
  display: flex;
  flex: 0 1 49%;
  flex-direction: column;
  margin-bottom: ${theme.spacing('S20')};
  padding: ${theme.spacing('S24')};
  &:hover {
    ${InfoBoxTitleSC.Title} {
      &:after {
        transition: padding-left 150ms ease-out 100ms;
        padding-left: ${theme.spacing('S2')};
      }
    }
  }
  ${onMobileView} {
    flex-basis: 100%;
  }
`;

const Date = styled.span`
  color: ${theme.colour(Colour.BLUE, 'B20')};
  font-size: ${theme.fontSize('FS10')};
  margin-bottom: ${theme.spacing('S6')};
`;

export default { InfoBox, Date };
