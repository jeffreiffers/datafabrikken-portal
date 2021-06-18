import React, {
  ComponentType,
  ComponentPropsWithoutRef,
  FC,
  memo,
  PropsWithChildren
} from 'react';

import SC from './styled';

interface Props extends ComponentPropsWithoutRef<'a'> {
  invertColor?: boolean;
  to?: string;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const InfoBox: FC<PropsWithChildren<Props>> = ({ children, as, ...props }) => (
  <SC.InfoBox as={as} {...props}>
    {children}
  </SC.InfoBox>
);

export default memo(InfoBox);
