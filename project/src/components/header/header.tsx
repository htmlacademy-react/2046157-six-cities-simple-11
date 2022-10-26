import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

import { User } from '../../types/data';

type HeaderProps = {
  user: User;
}

function Header({ user }: HeaderProps): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <HeaderNav user={user} />
        </div>
      </div>
    </header>
  );
}

export default Header;
