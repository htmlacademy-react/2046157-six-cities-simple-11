import { State } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../consts';
import { UserData } from '../../types/data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State): UserData | null => state[NameSpace.User].user;
