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
}

export type User = {
  id?: number;
}
