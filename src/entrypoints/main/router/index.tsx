import React, { memo, FC, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PATHNAME } from '../../../enums';

import Header from '../../../components/header';

const isFeatureToggleActive = localStorage.getItem('DF_TOGGLE');

const routes = {
  [PATHNAME.MAIN]: lazy(() => import('./pages/main-page')),
  [PATHNAME.DATASETS]: lazy(() => import('./pages/datasets-page')),
  [PATHNAME.ABOUT]: lazy(() => import('./pages/article-page')),
  [PATHNAME.FIND_DATA]: lazy(() => import('./pages/find-data-page')),
  [PATHNAME.NEWS]: lazy(() => import('./pages/news-page')),
  NEWS_ARTICLE: lazy(() => import('./pages/news-article-page'))
};

const Router: FC = () => (
  <BrowserRouter>
    {isFeatureToggleActive && <Header />}
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={PATHNAME.MAIN} component={routes[PATHNAME.MAIN]} />
        <Route
          path={`${PATHNAME.FIND_DATA}${PATHNAME.DATASETS}`}
          component={routes[PATHNAME.DATASETS]}
        />
        <Route path={PATHNAME.ABOUT} component={routes[PATHNAME.ABOUT]} />
        <Route
          path={PATHNAME.FIND_DATA}
          component={routes[PATHNAME.FIND_DATA]}
        />
        <Route
          exact
          path={`${PATHNAME.NEWS}/:newsArticleId`}
          component={routes.NEWS_ARTICLE}
        />
        <Route path={PATHNAME.NEWS} component={routes[PATHNAME.NEWS]} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default memo(Router);
