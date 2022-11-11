import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

import UserAuthInfo from '../user-auth-info/user-auth-info';

import { User } from '../../types/data';

type HeaderNavProps = {
  user: User;
}

function HeaderNav({ user }: HeaderNavProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {user.id && <UserAuthInfo />}
        </li>
        <li className="header__nav-item">
          <Link to={AppRoute.Login} className="header__nav-link" >
            <span className="header__signout">{user.id ? 'Sign out' : 'Sign up'}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
