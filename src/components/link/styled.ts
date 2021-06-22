import styled, { css } from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

import { Variant } from './enums';

type linkProps = {
  variant?: Variant;
};

const Link = styled.a<linkProps>`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-weight: ${theme.fontWeight('FW400')};
  &:after {
    font-family: 'Material Icons';
    content: '\\e5c8';
    font-size: ${theme.fontSize('FS16')};
    margin-left: ${theme.spacing('S2')};
  }

  ${({ variant }) => {
    switch (variant) {
      case Variant.PRIMARY:
        return css`
          padding: ${theme.spacing('S10')};
          background-color: ${theme.colour(Colour.BLUE, 'B20')};
          color: ${theme.colour(Colour.BLUE, 'B52')};
        `;
      default:
        return css`
          color: ${theme.colour(Colour.NEUTRAL, 'N0')};
        `;
    }
  }}
`;

export default { Link };
