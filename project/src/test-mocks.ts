import { address, datatype, lorem, internet, name, image, date } from 'faker';
import { placesSortTypes } from './consts';

import { City, Place, ReviewComment, UserData } from './types/data';

export const makeMockSortType = (): string => placesSortTypes[Math.floor(Math.random() * placesSortTypes.length)];

export const makeMockId = () => datatype.number({ min: 1, max: 100 });

export const makeMockCity = (): City => ({
  name: address.city(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: datatype.number(),
  },
});

export const makeMockUser = (): Omit<UserData, 'email' | 'token'> => ({
  avatarUrl: internet.avatar(),
  id: makeMockId(),
  isPro: datatype.boolean(),
  name: name.findName(),
});

export const makeMockAppUser = (): UserData => ({
  avatarUrl: internet.avatar(),
  id: makeMockId(),
  isPro: datatype.boolean(),
  name: name.findName(),
  token: datatype.uuid(),
  email: internet.email(),
});

export const makeMockPlace = (): Place => ({
  bedrooms: datatype.number(),
  city: makeMockCity(),
  description: lorem.text(),
  goods: [datatype.string(), datatype.string(), datatype.string()],
  host: makeMockUser(),
  id: makeMockId(),
  images: [image.cats(200, 200), image.cats(200, 200)],
  isPremium: datatype.boolean(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: datatype.number(),
  },
  maxAdults: datatype.number(),
  previewImage: image.imageUrl(),
  price: datatype.number(),
  rating: datatype.number(),
  title: lorem.words(),
  type: lorem.words(),
});

export const makeMockReviewComment = (): ReviewComment => ({
  comment: lorem.text(),
  date: date.future().toISOString(),
  id: makeMockId(),
  rating: datatype.number(),
  user: makeMockUser(),
});

