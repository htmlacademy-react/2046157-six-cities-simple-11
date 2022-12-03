import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import AuthForm from '../../components/auth-form/auth-form';

function AuthScreen(): JSX.Element {
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
              <Link className="locations__item-link" to='/'>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AuthScreen;