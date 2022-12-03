import { UserData } from '../../types/data';

type UserAuthInfoProps = {
  user: UserData | null;
}

function UserAuthInfo({ user }: UserAuthInfoProps): JSX.Element {
  return (
    <div className="header__nav-profile">
      <div className="header__avatar-wrapper user__avatar-wrapper">
        {user && <img style={{ borderRadius: '100%' }} src={user.avatarUrl} alt="avatar" />}
      </div>
      {user && <span className="header__user-name user__name">{user.email}</span>}
    </div>
  );
}

export default UserAuthInfo;
