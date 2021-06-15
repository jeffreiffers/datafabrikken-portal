import React, { memo, FC, PropsWithChildren } from 'react';

import env from '../../env';

import SC from './styled';
import { Publisher, TextLanguage } from '../../types';
import TruncatedText from '../truncated-text';
import Translation from '../translation';

const { FDK_PORTAL_HOST } = env;

interface Props {
  id: string;
  publisher: Partial<Publisher>;
  title: TextLanguage;
  description: TextLanguage;
}

const SearchHit: FC<PropsWithChildren<Props>> = ({
  id,
  publisher: { name, prefLabel },
  title,
  description
}) => (
  <SC.SearchHit>
    <SC.Title>
      <a href={`${FDK_PORTAL_HOST}/datasets/${id}`}>
        <Translation text={title} />
      </a>
    </SC.Title>
    <SC.Publisher>
      <span>
        <Translation id='owner' />:
      </span>
      <span>{prefLabel ? <Translation text={prefLabel} /> : name}</span>
    </SC.Publisher>
    <SC.Description>
      <TruncatedText visibleLines={4} lineHeight={28}>
        <Translation text={description} />
      </TruncatedText>
    </SC.Description>
  </SC.SearchHit>
);

export default memo(SearchHit);
