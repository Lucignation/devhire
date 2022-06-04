import axios from 'axios';
import { Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IDeveloper } from '../common/interfaces/developers.interface';
import { Store } from './types';

export const GET_DEVELOPERS = 'GET_DEVELOPERS';
export const FAV_DEVELOPER = 'FAV_DEVELOPER';

export type ActionTypes =
  | { type: typeof GET_DEVELOPERS; payload: IDeveloper[] }
  | { type: typeof FAV_DEVELOPER; payload: IDeveloper };

//get request to users
export const getDevelopers =
  (): ThunkAction<void, Store, unknown, Action<IDeveloper[]>> =>
  async (dispatch: Dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        // dispatch(setLoading());
        const url =
          'https://api.terawork.com/service-categories/sellers-services/computer-software-development';
        // const vehicle = await axiosInstance.get(url);
        const users = await axios.get(url);
        const allusers = await users.data.data.service_search_results.hits;

        // allusers.map((user: any) => {
        //   //   console.log(user._source);
        //   dispatch({ type: GET_DEVELOPERS, payload: user._source });
        // });
        dispatch({ type: GET_DEVELOPERS, payload: allusers });

        resolve(allusers);
        // dispatch({ type: GET_DEVELOPERS, payload: vehicle.data.results });
        // resolve(vehicle.data.results);
      } catch (error) {
        reject(error);
      }
    });
  };
