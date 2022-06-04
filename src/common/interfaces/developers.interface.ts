export interface IDeveloper {
  cust_id: number;
  avatar: string;
  url_name: string;
  summary: string;
  profile_id: number;
  profile_status: string;
  currency_id: number;
  currency_name: string;
  search_weight: number;
  search_premium_subscription: number;
  public_status: boolean;
  vacation_mode: boolean;
  display_name: string;
  starting_from: string;
  category: string;
  category_description: string;
  service: string;
  service_unanalyzed: string;
  service_description: string;
  service_expression: string;
  service_photo: string;
  reg_type: string;
  status_tag: string;
  work_completed: number;
  work_successfully_completed: number;
  work_unsuccessfully_completed: number;
  slug: string;
  services_overview_title: string;
  services_overview_body: string;
  skills: string[];
  location: ILocation;
  qualifications: string[];
  service_packages: [
    { description: string },
    { unit_price: string },
    { local_unit_price: string },
    { expr_delivery_charge: string },
    { delivery_time_in_hours: number },
    { expr_delivery_time_in_hours: number },
    { description: string },
    { unit_price: string },
    { local_unit_price: string },
    { expr_delivery_charge: string },
    { delivery_time_in_hours: number },
    { expr_delivery_time_in_hours: number },
    { description: string },
    { unit_price: string },
    { local_unit_price: string },
    { expr_delivery_charge: string },
    { delivery_time_in_hours: number },
    { expr_delivery_time_in_hours: number }
  ];
  not_interested_in: string;
  cancel_work: boolean;
  quote_validity_period: number;
  available_delivery_mode: string[];
  delivery_locations: string[];
  payment_terms_accepted: string;
  joined_since: number;
  review_score: string;
  level_score: string;
  level_tag: string;
  no_of_reviews: number;
  notice_period_in_hours: number;
  languages: string[];
  community: string;
}

export interface ILocation {
  country: string;
  city: string;
  area_of_city: string;
}
