import { useAnalytics } from 'reactfire';
import {useEffect} from 'react';

const Logger = ({ location }) => {
  const analytics = useAnalytics();

  // By passing `location.pathname` to the second argument of `useEffect`,
  // we only log on first render and when the `pathname` changes
  useEffect(() => {
    analytics.logEvent('page-view', { path_name: location.pathname });
  }, [location.pathname,analytics]);

  return null;
}

export default Logger