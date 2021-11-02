import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';
import { PageTitle } from '@my-org/ui-header';
import { useEffect, useState } from 'react';
import { API_URL, ApiResponse } from '@my-org/api-interface';

export function App() {
  const [apiResponse, setApiResponse] = useState<ApiResponse>({
    message: 'Loading...',
  });

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then(setApiResponse);
  }, []);

  return (
    <div className={styles.app}>
      <p style={{ color: 'purple', fontWeight: 900 }}>{apiResponse.message}</p>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  );
}

export default App;
