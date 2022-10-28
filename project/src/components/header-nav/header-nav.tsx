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
          <a className="header__nav-link" href="/">
            <span className="header__signout">{user.id ? 'Sign out' : 'Sign up'}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
