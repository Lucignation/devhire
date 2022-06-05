import { IDeveloper } from '../common/interfaces/developers.interface';

export type Store = {
  resources?: any;
  developer: IDeveloper;
  developers: IDeveloper[];
  favorites: IDeveloper[];
};
