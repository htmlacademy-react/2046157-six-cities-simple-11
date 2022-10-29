import { Outlet, useLocation } from 'react-router-dom';

import Header from '../header/header';

import { AppRoute } from '../../types/paths';
import { User } from '../../types/data';

type LayoutProps = {
  user: User;
}

function Layout({ user, }: LayoutProps): JSX.Element {
  const currentLocation: string = useLocation().pathname;

  //Такая кракозябра сгодится? :D Вроде проверил и работает как надо )
  const trimmedCurrentLocation: string = currentLocation.replace(/(\b\/\w+|\/)+$/, '') || currentLocation;

  enum WrapperClassNames {
    Login = 'page page--gray page--login',
    Root = 'page page--gray page--main',
    PlaceDetail = 'page'
  }

  type WrapperClassNamesType = {
    [key: string]: string;
  }

  function getCurrentWrapperClassName(classNames: WrapperClassNamesType): string {
    switch (trimmedCurrentLocation) {
      case (AppRoute.Login):
        return classNames.Login;
      case (AppRoute.Place):
        return classNames.PlaceDetail;
      default:
        return classNames.Root;
    }
  }

  return (
    <div className={getCurrentWrapperClassName(WrapperClassNames)}>
      <Header user={user} />
      <Outlet />
    </div>
  );
}

export default Layout;

