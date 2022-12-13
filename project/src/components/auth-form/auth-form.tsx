import { useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { loginAction } from '../../store/api-actions';
import { selectCity } from '../../store/places-process/places-process';

import { CITIES } from '../../consts';

function AuthForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState({ email: '', password: '' });

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(loginAction(userData));
    dispatch(selectCity(CITIES[0]));
  }

  return (
    <form onSubmit={handleSubmitForm} className="login__form form" action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input onChange={handleChangeInput} value={userData.email} className="login__input form__input" type="email" name="email" placeholder="Email" required />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input onChange={handleChangeInput} value={userData.password} className="login__input form__input" type="password" name="password" placeholder="Password" required />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

export default AuthForm;
