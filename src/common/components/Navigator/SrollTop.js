/**
 * @file
 * Contains Scroll top component.
 */

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const historyWatcher = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      historyWatcher();
    }
  }, []);
  return null;
}

export default withRouter(ScrollToTop);
