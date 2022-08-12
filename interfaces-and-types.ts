export interface IPerformance {
  artist: {
    artist_optin_show_phone_number: boolean;
    facebook_page_url: string;
    id: string;
    image_url: string;
    links: string;
    mbid: string;
    name: string;
    options: { display_listen_unit: boolean };
    support_url: string;
    thumb_url: string;
    tracker_count: number;
    tracking: string[];
    upcoming_event_count: number;
    url: string;
  };
  artist_id: string;
  bandsintown_plus: boolean;
  datetime: string;
  datetime_display_rule: string;
  description: string;
  ends_at: string;
  festival_datetime_display_rule: string;
  festival_end_date: string;
  festival_start_date: string;
  id: string;
  lineup: string[];
  offers: string[];
  on_sale_datetime: string;
  starts_at: string;
  title: string;
  url: string;
  venue: {
    city: string;
    country: string;
    latitude: string;
    location: string;
    longitude: string;
    name: string;
    region: string;
  };
}
