export enum AppRoute {
  Login = '/login',
  Place = '/offer',
  Root = '/',
  NotFound = '*',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ReviewCommentStatus {
  Sucess = 'SUCCESS',
  Unknown = 'UNKNOWN',
  Fail = 'FAIL'
}

export enum NameSpace {
  PlacesData = 'PLACES_DATA',
  PlaceData = 'PLACE_DATA',
  PlacesProcess = 'PLACES_PROCESS',
  User = 'USER'
}

export const MarkerParams = {
  Url: {
    Default: 'img/pin.svg',
    Active: 'img/pin-active.svg',
  },
  Size: {
    Width: 27,
    Height: 39,
  }
} as const;

export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    }
  }
];

export enum StatusCodeMapping {
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
}

export const placesSortTypes = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export enum RequireSymbolsCount {
  Min = 50,
  Max = 300,
}

export const RatingGradation = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
} as const;
