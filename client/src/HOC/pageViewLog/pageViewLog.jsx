import {useAnalytics} from 'reactfire'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
//Used for gathering analytics whenever page is loaded

const Logger = () =>{
    const location = useLocation();
const analytics = useAnalytics();
  useEffect(() => {
    analytics.logEvent('page-view',{path_name: location.pathname})
  },[location.pathname,analytics])
  return null
}

export default Logger