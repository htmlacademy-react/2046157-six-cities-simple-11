import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';

import { AppRoute } from '../../consts';
import { AuthorizationStatus } from '../../consts';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const userStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    userStatus === AuthorizationStatus.Auth ? <Navigate to={AppRoute.Root} /> : children
  );
}

export default PrivateRoute;
