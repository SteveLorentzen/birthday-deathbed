import * as React from 'react';
import { mediaQueries } from 'my-constants';
import { format } from 'date-fns';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface IPerformance {
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

function Performance({ performance }: { performance: IPerformance }) {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplate: `"event  event   "
                       "city   city    " 
                       "date   time   "`,

        gridTemplateRows: '3fr 2fr 1fr ',
        gridTemplateColumns: '1fr 1fr ',
        width: '100%',
        borderTop: '1px solid grey',
        borderBottom: '1px solid grey',
        padding: '2rem 1rem',
        [mediaQueries.small]: {
          gridTemplate: `"event  event      " 
                         "city   city   " 
                         "date   time "`,

          gridTemplateRows: '2fr 2fr 1fr ',
          gridTemplateColumns: '1fr 1fr ',
        },
      }}
    >
      <div
        css={{
          display: 'flex',
          gridArea: 'event',
          marginRight: '2rem',
        }}
      >
        <Link href={performance.url} passHref>
          <a
            target='_blank'
            css={{
              position: 'relative',
              lineHeight: '.9',
              fontSize: 'var(--font-medium)',
              color: 'var(--color-accent-dark)',
              fontWeight: 'bolder',
              cursor: 'pointer',
              ':hover': {
                color: 'var(--color-accent-dark-hover)',
              },
            }}
          >
            {performance.title}
            <span
              css={{
                position: 'absolute',
                marginLeft: '1rem',
                whiteSpace: 'nowrap',
              }}
            >
              <FaExternalLinkAlt />
            </span>
          </a>
        </Link>
      </div>
      <div
        css={{
          fontSize: 'var(--font-small)',
          gridArea: 'city',
        }}
      >
        {performance.venue.location}
      </div>

      <div
        css={{
          fontSize: 'var(--font-small)',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          gridArea: 'date',
        }}
      >
        {format(new Date(performance.datetime), 'MMM do, yyyy')}
      </div>
      <div
        css={{
          fontSize: 'var(--font-small)',
          fontWeight: 'bold',
          gridArea: 'time',

          textAlign: 'right',
        }}
      >{`${format(new Date(performance.starts_at), 'K:mmbbb')}${
        performance.ends_at &&
        ` - ${format(new Date(performance.ends_at), 'K:mmbbb')}`
      }`}</div>
    </div>
  );
}

function Performances() {
  const [performances, setPerformances] = React.useState<IPerformance[]>([]);

  React.useEffect(() => {
    async function getPerformances() {
      const result = await fetch(
        'https://rest.bandsintown.com/artists/Birthday%20Deathbed/events?app_id=c7c1586132d1f9ecf3d339e4c3849902'
      );
      const data = await (await result).json();
      console.log(data);
      setPerformances(data);
    }
    getPerformances();
  }, []);

  https: return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'var(--home-width)',
        maxWidth: '60rem',
        margin: '6rem 0',
      }}
    >
      <div>
        <h1
          css={{
            fontSize: 'var(--font-medium)',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '2rem 1rem',
            [mediaQueries.small]: {
              fontWeight: 'normal',
              fontSize: 'var(--font-large)',
            },
          }}
        >
          Upcoming Shows
        </h1>
      </div>
      <div
        css={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {performances.map((performance) => {
          return <Performance key={performance.id} performance={performance} />;
        })}
      </div>
    </div>
  );
}

export { Performances };
