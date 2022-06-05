import { combineReducers } from 'redux';

import {
  GET_DEVELOPERS,
  FAV_DEVELOPER,
  ActionTypes,
  REMOVE_FAV_DEVELOPER,
} from './action';
import { Store } from './types';

const initialState: Store = {
  developer: {
    cust_id: 0,
    avatar: '',
    url_name: '',
    summary: '',
    profile_id: 0,
    profile_status: '',
    currency_id: 0,
    currency_name: '',
    search_weight: 0,
    search_premium_subscription: 0,
    public_status: false,
    vacation_mode: false,
    display_name: '',
    starting_from: '',
    category: '',
    category_description: '',
    service: '',
    service_unanalyzed: '',
    service_description: '',
    service_expression: '',
    service_photo: '',
    reg_type: '',
    status_tag: '',
    work_completed: 0,
    work_successfully_completed: 0,
    work_unsuccessfully_completed: 0,
    slug: '',
    services_overview_title: '',
    services_overview_body: '',
    skills: [],
    location: {
      country: '',
      city: '',
      area_of_city: '',
    },
    qualifications: [],
    service_packages: [
      { description: '' },
      { unit_price: '' },
      { local_unit_price: '' },
      { expr_delivery_charge: '' },
      { delivery_time_in_hours: 0 },
      { expr_delivery_time_in_hours: 0 },
      { description: '' },
      { unit_price: '' },
      { local_unit_price: '' },
      { expr_delivery_charge: '' },
      { delivery_time_in_hours: 0 },
      { expr_delivery_time_in_hours: 0 },
      { description: '' },
      { unit_price: '' },
      { local_unit_price: '' },
      { expr_delivery_charge: '' },
      { delivery_time_in_hours: 0 },
      { expr_delivery_time_in_hours: 0 },
    ],
    not_interested_in: '',
    cancel_work: false,
    quote_validity_period: 0,
    available_delivery_mode: [],
    delivery_locations: [],
    payment_terms_accepted: '',
    joined_since: 0,
    review_score: '',
    level_score: '',
    level_tag: '',
    no_of_reviews: 0,
    notice_period_in_hours: 0,
    languages: [],
    community: '',
  },
  developers: [],
  favorites: [],
};

function resourcesReducer(state: Store = initialState, action: ActionTypes) {
  switch (action.type) {
    case GET_DEVELOPERS:
      return {
        ...state,
        developers: action.payload,
      };

    case FAV_DEVELOPER:
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };

    case REMOVE_FAV_DEVELOPER:
      return {
        ...state,
        favorites: state.favorites.filter(
          (dev) => dev.cust_id !== action.payload
        ),
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  resources: resourcesReducer,
});

export default rootReducer;
