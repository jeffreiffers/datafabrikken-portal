import styled from 'styled-components';

import { theme, Colour } from '../../entrypoints/main/app/theme';

type Props = {
  checked: boolean;
};

const CheckboxContainer = styled.div`
  & > label {
    align-items: center;
    display: flex;
    & > span {
      margin-left: ${theme.spacing('S4')};
    }
    & > input {
      border: 0;
      clip: rect(0 0 0 0);
      clippath: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${theme.colour(Colour.NEUTRAL, 'N0')};
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div<Props>`
  border: 1px solid;
  width: 25px;
  height: 25px;
  transition: all 150ms;
  ${CheckboxContainer} > label > input:focus + & {
    box-shadow: 0 0 0 3px ${theme.colour(Colour.BLUE, 'B36')};
  }
  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

export default { CheckboxContainer, StyledCheckbox, Icon };
