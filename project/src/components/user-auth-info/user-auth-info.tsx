import { AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks/store';
import { getUser } from '../../store/user-process/selectors';

type UserAuthInfoProps = {
  userStatus: string;
}

function UserAuthInfo({ userStatus }: UserAuthInfoProps): JSX.Element {
  const user = useAppSelector(getUser);
  const isUser = userStatus === AuthorizationStatus.Auth && user;

  return (
    <div className="header__nav-profile">
      <div className="header__avatar-wrapper user__avatar-wrapper">
        {isUser && <img style={{ borderRadius: '100%' }} src={user.avatarUrl} alt="avatar" />}
      </div>
      {isUser && <span className="header__user-name user__name">{user.email}</span>}
    </div>
  );
}

export default UserAuthInfo;
