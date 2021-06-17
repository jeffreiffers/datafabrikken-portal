import React, { memo, FC } from 'react';
import { compose } from 'redux';

import Translation from '../translation';

import SC from './styled';

import { PATHNAME } from '../../enums';

interface Props {}

const Header: FC<Props> = () => (
  <SC.Header>
    <SC.SkipLink href='#main'>
      <Translation id='header.mainContent' />
    </SC.SkipLink>
    <SC.BetaIcon />
    <SC.Nav role='navigation'>
      <SC.Logo href='/'>
        <Translation id='title' />.
      </SC.Logo>
      <SC.NavigationLinks>
        <li>
          <SC.Link to={PATHNAME.MAIN}>
            <Translation id='header.home' />
          </SC.Link>
        </li>
        <li>
          <SC.Link to={PATHNAME.ABOUT}>
            <Translation id='header.about' />
          </SC.Link>
        </li>
        <li>
          <SC.Link to={PATHNAME.COMPETENCE_AND_GUIDANCE}>
            <Translation id='header.findData' />
          </SC.Link>
        </li>
        <li>
          <SC.Link to={PATHNAME.NEWS}>
            <Translation id='header.news' />
          </SC.Link>
        </li>
      </SC.NavigationLinks>
    </SC.Nav>
  </SC.Header>
);

export default compose<FC>(memo)(Header);
