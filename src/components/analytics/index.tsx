import { FC, memo, useEffect } from 'react';
import { compose } from 'redux';
import ReactGA from 'react-ga';

import { GoogleAnalyticsTrackingId } from '../../types/enums';

const Analytics: FC = () => {
  const { hostname, pathname, search } = location;

  const isDatafabrikken = ['datafabrikken.norge.no'].includes(hostname);

  const configureAnalytics = () => {
    if (isDatafabrikken) {
      ReactGA.initialize(GoogleAnalyticsTrackingId.DATAFABRIKKEN);
    }

    ReactGA.set({ anonymizeIp: true });
  };

  const registerPageView = () => {
    if (isDatafabrikken) {
      const page = `${pathname}${search}`;

      ReactGA.set({ page });
      ReactGA.pageview(page, undefined, document.title);
    }
  };

  useEffect(() => {
    configureAnalytics();
    setTimeout(registerPageView, 1000);
  }, []);

  return null;
};

export default compose<FC>(memo)(Analytics);
