export type Place = {
  title: string;
  isPremium: boolean;
  rating: number;
  type: string;
  price: number;
  previewImage: string;
  id: number;
  bedrooms: number;
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  images: string[];
  maxAdults: number;
  city: City;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type ReviewComment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};

export type NewReviewComment = {
  comment: string;
  rating: number;
};

export type AuthData = {
  email: string;
  password: string;
};

export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
};
