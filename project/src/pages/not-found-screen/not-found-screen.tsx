import { Link } from 'react-router-dom';
import './not-found-screen.css';

import { AppRoute } from '../../types/paths';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="container--not-found">
      <h1>Page Not Found (404)</h1>
      <h1><span>(╯°□°）╯︵ ┻━┻</span></h1>
      <Link to={AppRoute.Root}>Go to Main Page</Link>
    </div>
  );
}

export default NotFoundScreen;
