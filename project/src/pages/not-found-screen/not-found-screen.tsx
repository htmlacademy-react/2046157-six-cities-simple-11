import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './not-found-screen.css';

import { AppRoute } from '../../consts';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="container--not-found">
      <Helmet><title>six cities simple - Page Not Found</title></Helmet>
      <h1>Page Not Found (404)</h1>
      <h1><span>(╯°□°）╯︵ ┻━┻</span></h1>
      <Link to={AppRoute.Root}>Go to Main Page</Link>
    </div>
  );
}

export default NotFoundScreen;
