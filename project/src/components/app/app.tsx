import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PlaceScreen from '../../pages/place-screen/place-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

import { AppRoute } from '../../consts';
import { Place, User, City } from '../../types/data';

type AppProps = {
  places: Place[];
  placesCount: number;
  user: User;
  city: City;
}

function App(props: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} element={<MainScreen placesCount={props.placesCount} places={props.places} user={props.user} city={props.city} />} />
          <Route path={AppRoute.Login} element={
            <PrivateRoute user={props.user}>
              <LoginScreen user={props.user} />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Place}/:id`} element={<PlaceScreen places={props.places} user={props.user} />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
