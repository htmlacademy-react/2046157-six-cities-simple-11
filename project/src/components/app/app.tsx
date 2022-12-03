import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainScreen from '../../pages/main-screen/main-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import PlaceScreen from '../../pages/place-screen/place-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

import { AppRoute } from '../../consts';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} element={<MainScreen />} />
          <Route path={AppRoute.Login} element={
            <PrivateRoute>
              <AuthScreen />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Place}/:id`} element={<PlaceScreen />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
