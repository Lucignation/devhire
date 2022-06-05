import axios from '../axios/index';
import { Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ICurrency } from '../common/interfaces/currency.interface';
import { IDeveloper } from '../common/interfaces/developers.interface';
import { Store } from './types';

export const GET_DEVELOPERS = 'GET_DEVELOPERS';
export const FAV_DEVELOPER = 'FAV_DEVELOPER';
export const REMOVE_FAV_DEVELOPER = 'REMOVE_FAV_DEVELOPER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_CURRENCY = 'SET_CURRENCY';

export type ActionTypes =
  | { type: typeof GET_DEVELOPERS; payload: IDeveloper[] }
  | { type: typeof FAV_DEVELOPER; payload: IDeveloper }
  | { type: typeof REMOVE_FAV_DEVELOPER; payload: number }
  | { type: typeof GET_CURRENCIES; payload: ICurrency[] }
  | { type: typeof SET_CURRENCY; payload: ICurrency };

//get request to users
export const getDevelopers =
  (): ThunkAction<void, Store, unknown, Action<IDeveloper[]>> =>
  async (dispatch: Dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        // dispatch(setLoading());
        const url =
          'service-categories/sellers-services/computer-software-development';
        const users = await axios.get(url);
        const allusers = await users.data.data.service_search_results.hits;
        // });
        dispatch({ type: GET_DEVELOPERS, payload: allusers });

        resolve(allusers);
      } catch (error) {
        reject(error);
      }
    });
  };

//remove developer fav from the favorite list
export const removeFav =
  (developer: IDeveloper): ThunkAction<void, Store, unknown, Action<void>> =>
  (dispatch: Dispatch) => {
    console.log(developer);
    dispatch({ type: REMOVE_FAV_DEVELOPER, payload: developer.cust_id });
  };

//fav a dev
export const FavDev =
  (dev: IDeveloper): ThunkAction<void, Store, unknown, Action<void>> =>
  async (dispatch: Dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: FAV_DEVELOPER, payload: dev });
    });
  };

//get all currencies
export const getCurrencies =
  (): ThunkAction<void, Store, unknown, Action<ICurrency[]>> =>
  async (dispatch: Dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const url = 'resources';

        const res = await axios.get(url);

        dispatch({
          type: GET_CURRENCIES,
          payload: res.data.data.currencies,
        });

        resolve(res.data.data.currencies);
      } catch (error) {
        reject(error);
      }
    });
  };

//get a currency
export const setCurrency =
  (currency: ICurrency): ThunkAction<void, Store, unknown, Action<ICurrency>> =>
  async (dispatch: Dispatch) => {
    console.log(currency);
    dispatch({ type: SET_CURRENCY, payload: currency });
  };
