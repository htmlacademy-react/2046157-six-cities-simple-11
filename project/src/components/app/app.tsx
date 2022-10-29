import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PlaceScreen from '../../pages/place-screen/place-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Layout from '../layout/layout';

import { AppRoute } from '../../types/paths';
import { Place, User } from '../../types/data';

type AppProps = {
  places: Place[];
  placesCount: number;
  user: User;
  place: Place;
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout user={props.user} />}>
          <Route index element={<MainScreen placesCount={props.placesCount} places={props.places} />} />
          <Route path={AppRoute.Login} element={props.user.id ? <Navigate to={AppRoute.Root} /> : <LoginScreen />} />
          <Route path={`${AppRoute.Place}/:id`} element={<PlaceScreen place={props.place} user={props.user} />} />
        </Route>
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
