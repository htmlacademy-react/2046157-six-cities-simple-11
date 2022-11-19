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
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type User = {
  id?: number;
}

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
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
