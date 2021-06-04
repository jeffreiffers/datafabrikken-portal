import React, { memo, FC, PropsWithChildren } from 'react';

import SC from './styled';
import { TextLanguage } from '../../types';

interface Props {
  title: TextLanguage;
  description: TextLanguage;
}

const SearchHit: FC<PropsWithChildren<Props>> = ({ title, description }) => (
  <SC.SearchHit>
    <SC.Title>{title.nb}</SC.Title>
    <SC.Description>{description.nb}</SC.Description>
  </SC.SearchHit>
);

export default memo(SearchHit);
