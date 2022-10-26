import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PlaceScreen from '../../pages/place-screen/place-screen';

import { Place, User } from '../../types/data';

type AppProps = {
  places: Place[];
  placesCount: number;
  user: User;
  place: Place;
}

function App(props: AppProps): JSX.Element {
  //Костыль, что бы линтер и TS не ругались на неиспользованные импорты и пропсы. Можно посмотреть и другие страницы, удалив самый первый компонент.
  return <MainScreen user={props.user} placesCount={props.placesCount} places={props.places} /> ||
    <PlaceScreen place={props.place} user={props.user} /> ||
    <LoginScreen user={props.user} />;
}

export default App;

