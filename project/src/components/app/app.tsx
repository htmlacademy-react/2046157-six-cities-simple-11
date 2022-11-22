import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/store';
import { getPlacesAction } from '../../store/actions';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PlaceScreen from '../../pages/place-screen/place-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

import { AppRoute } from '../../consts';
import { User } from '../../types/data';
import { placesData } from '../../mocks/places';

type AppProps = {
  user: User;
}

function App(props: AppProps): JSX.Element {
  const dispatch = useAppDispatch();

  dispatch(getPlacesAction(placesData));

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} element={<MainScreen user={props.user} />} />
          <Route path={AppRoute.Login} element={
            <PrivateRoute user={props.user}>
              <LoginScreen user={props.user} />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Place}/:id`} element={<PlaceScreen user={props.user} />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
