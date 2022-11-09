import { Navigate } from 'react-router-dom';
import { User } from '../../types/data';

import { AppRoute } from '../../consts';


type PrivateRouteProps = {
  user: User;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { user, children } = props;

  return (
    user.id ? <Navigate to={AppRoute.Root} /> : children
  );
}

export default PrivateRoute;
