import { ICurrency } from '../common/interfaces/currency.interface';
import { IDeveloper } from '../common/interfaces/developers.interface';

export type Store = {
  resources?: any;
  developer: IDeveloper;
  developers: IDeveloper[];
  favorites: IDeveloper[];
  currencies: ICurrency[];
  currency: ICurrency;
};
