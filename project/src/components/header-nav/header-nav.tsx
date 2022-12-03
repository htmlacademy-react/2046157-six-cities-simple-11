import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { logoutAction } from '../../store/api-actions';

import UserAuthInfo from '../user-auth-info/user-auth-info';

function HeaderNav(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  function handleClick(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    evt.preventDefault();
    dispatch(logoutAction());
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <UserAuthInfo user={user} />
        </li>
        <li className="header__nav-item">
          {user
            ? <Link to={AppRoute.Root} onClick={handleClick} className="header__nav-link" ><span className="header__signout">Sign out</span></Link>
            : <Link to={AppRoute.Login} className="header__nav-link" ><span className="header__signout">Sign in</span></Link>}
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
