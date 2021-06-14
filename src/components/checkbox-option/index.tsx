import React, { FC, useState, PropsWithChildren, ChangeEvent } from 'react';

import SC from './styled';
import { getParameter } from '../../utils/location-helper';
import Translation from '../translation';

interface Props {
  filterName: string;
  label: string;
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxContainer: FC<PropsWithChildren<Props>> = ({
  filterName,
  label,
  handleCheckboxChange
}) => {
  const [checked, setChecked] = useState<boolean>(!!getParameter(filterName));

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    handleCheckboxChange(event);
  };

  const id = encodeURIComponent(filterName);

  return (
    <SC.CheckboxContainer>
      <label htmlFor={id}>
        <input id={id} type='checkbox' checked={checked} onChange={onChange} />
        <SC.StyledCheckbox checked={checked}>
          <SC.Icon viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12' />
          </SC.Icon>
        </SC.StyledCheckbox>
        <span>
          <Translation id={label} />
        </span>
      </label>
    </SC.CheckboxContainer>
  );
};

export default CheckboxContainer;
