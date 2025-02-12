import React, {
  Children,
  ComponentType,
  ComponentPropsWithoutRef,
  FC,
  isValidElement,
  memo,
  PropsWithChildren
} from 'react';

import InfoBoxIcon from '../info-box-icon';
import InfoBoxTitle from '../info-box-title';
import InfoBoxBody from '../info-box-body';

import SC from './styled';

interface Props extends ComponentPropsWithoutRef<'a'> {
  invertColor?: boolean;
  to?: string;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const InfoBox: FC<PropsWithChildren<Props>> = ({ children, as, ...props }) => {
  const renderInfoBoxIcon = () =>
    Children.map(children, child =>
      isValidElement(child) && child.type === InfoBoxIcon ? (
        <SC.IconWrapper>{child}</SC.IconWrapper>
      ) : null
    )?.shift();

  const renderInfoBoxTitle = () =>
    Children.map(children, child =>
      isValidElement(child) && child.type === InfoBoxTitle ? child : null
    )?.shift();

  const renderInfoBoxBody = () =>
    Children.map(children, child =>
      isValidElement(child) && child.type === InfoBoxBody ? child : null
    )?.shift();

  return (
    <SC.InfoBox as={as} {...props}>
      {renderInfoBoxIcon()}
      <SC.ContentWrapper>
        {renderInfoBoxTitle()}
        {renderInfoBoxBody()}
      </SC.ContentWrapper>
    </SC.InfoBox>
  );
};

export default memo(InfoBox);
