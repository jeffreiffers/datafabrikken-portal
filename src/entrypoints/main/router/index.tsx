import React, { memo, FC, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PATHNAME } from '../../../enums';

import Root from '../../../components/root';
import Header from '../../../components/header';
import Footer from '../../../components/footer';

const isFeatureToggleActive = localStorage.getItem('DF_TOGGLE');

const routes = {
  [PATHNAME.MAIN]: lazy(() => import('./pages/main-page')),
  [PATHNAME.DATASETS]: lazy(() => import('./pages/datasets-page'))
};

const Router: FC = () => (
  <BrowserRouter>
    {isFeatureToggleActive && <Header />}
    <Root>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path={PATHNAME.MAIN} component={routes[PATHNAME.MAIN]} />
          <Route
            path={PATHNAME.DATASETS}
            component={routes[PATHNAME.DATASETS]}
          />
        </Switch>
      </Suspense>
    </Root>
    {isFeatureToggleActive && <Footer />}
  </BrowserRouter>
);

export default memo(Router);
