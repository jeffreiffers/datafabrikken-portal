import React, {
  FC,
  ChangeEvent,
  memo,
  PropsWithChildren,
  useState
} from 'react';

import { getParameter } from '../../utils/location-helper';

import SC from './styled';

interface Props {
  filterName: string;
  value: string;
  label: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ThemeBox: FC<PropsWithChildren<Props>> = ({
  filterName,
  value,
  label,
  handleChange,
  children
}) => {
  const [checked, setChecked] = useState<boolean>(
    !!getParameter(filterName)?.includes(value)
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    handleChange(event);
  };

  return (
    <SC.ThemeBox checked={checked}>
      <SC.Label htmlFor={value}>
        {children && <SC.ThemeIcon>{children}</SC.ThemeIcon>}
        <input
          id={value}
          name={filterName}
          value={value}
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />
        <span>{label}</span>
      </SC.Label>
    </SC.ThemeBox>
  );
};

export default memo(ThemeBox);
