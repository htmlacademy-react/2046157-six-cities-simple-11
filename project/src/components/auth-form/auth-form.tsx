import { useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { selectCityAction } from '../../store/actions';
import { loginAction } from '../../store/api-actions';

import { CITIES } from '../../consts';

function AuthForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState({ email: '', password: '' });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(loginAction(userData));
    dispatch(selectCityAction(CITIES[0]));
  }

  return (
    <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input onChange={handleOnChange} value={userData.email} className="login__input form__input" type="email" name="email" placeholder="Email" required />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input onChange={handleOnChange} value={userData.password} className="login__input form__input" type="password" name="password" placeholder="Password" required />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

export default AuthForm;
