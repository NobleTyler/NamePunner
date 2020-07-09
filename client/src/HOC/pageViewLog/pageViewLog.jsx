import {useAnalytics} from 'reactfire'
import {useEffect} from 'react'
//Used for gathering analytics whenever page is loaded

const Logger = ({location}) =>{
const analytics = useAnalytics();
  useEffect(() => {
    analytics.logEvent('page-view',{path_name: location.pathname})
  },[location.pathname,analytics])
  return null
}

export default Logger