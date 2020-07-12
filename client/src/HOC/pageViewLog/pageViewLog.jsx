import { useAnalytics } from 'reactfire';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/**
 * Pageview is an HOC that passes off analytics to reactfire to see what pages are visitied.
 */
const Logger = () => {
  const analytics = useAnalytics();
  const location = useLocation();
  // By passing `location.pathname` to the second argument of `useEffect`,
  // we only log on first render and when the `pathname` changes
  useEffect(() => {
    analytics.logEvent('page-view', { path_name: location.pathname });
  }, [location.pathname, analytics]);

  return null;
};

export default Logger;
