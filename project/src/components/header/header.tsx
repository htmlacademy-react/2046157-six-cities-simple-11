import { useLocation } from 'react-router-dom';

import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

import { AppRoute } from '../../consts';

function Header(): JSX.Element {
  const isNotLoginPage = useLocation().pathname !== AppRoute.Login;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {isNotLoginPage && <HeaderNav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
