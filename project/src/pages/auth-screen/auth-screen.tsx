import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/store';
import { selectCityAction } from '../../store/actions';

import Header from '../../components/header/header';
import AuthForm from '../../components/auth-form/auth-form';

import { AppRoute } from '../../consts';
import { CITIES } from '../../consts';

function getRandomCityIndex(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function AuthScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const randomCity = CITIES[getRandomCityIndex(0, CITIES.length)];

  function handleClick() {
    dispatch(selectCityAction(randomCity));
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Sign in - six cities simple</title>
        <meta name="description" content="Sign in six cities simple" />
      </Helmet>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <AuthForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link onClick={handleClick} className="locations__item-link" to={AppRoute.Root}>
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AuthScreen;
