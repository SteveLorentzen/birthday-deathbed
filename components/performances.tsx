import { mediaQueries } from 'my-constants';
import { format } from 'date-fns';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface IPerformance {
  venue: String;
  addressStreet: String;
  addressCityState: String;
  date: String;
  startTime: String;
  endTime: String;
  description: String;
  price: Number;
  eventUrl: string;
}

const performances = [
  {
    venue: 'Rock & Brews at Yaamava',
    addressStreet: '777 San Manuel Blvd.',
    addressCityState: 'Highland, CA 92346',
    date: format(new Date(2022, 9, 4), 'EE, LLL do, yyyy'),
    startTime: '7:00pm',
    endTime: '10:00pm',
    description: 'Come have a tasty dinner while we rock your faces off!',
    price: 0,
    eventUrl:
      'https://bandsintown.com/e/103679759?utm_medium=web&utm_source=jump_page&utm_campaign=share_event&came_from=702',
  },
];

function Performance({ performance }: { performance: IPerformance }) {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplate: `"event  event event  "
                       "event  event event  " 
                       "street street street "
                       "city   city city   " 
                       "date   date date   "
                       "time   time price  "`,

        gridTemplateRows: '2fr 1fr  1fr 2fr 2fr 1fr',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '100%',
        borderTop: '1px solid grey',
        borderBottom: '1px solid grey',
        padding: '2rem 1rem',
        [mediaQueries.small]: {
          gridTemplate: `"event  event  event  event    " 
                         "street street street  price"
                         "city   city   city .    " 
                         "date   date   time   time "`,

          gridTemplateRows: '2fr 1fr  2fr 1fr',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
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
        <Link href={performance.eventUrl} passHref>
          <a
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
            {performance.venue}
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
          gridArea: 'street',
        }}
      >
        {performance.addressStreet}
      </div>
      <div css={{ fontSize: 'var(--font-small)', gridArea: 'city' }}>
        {performance.addressCityState}
      </div>

      <div
        css={{
          fontSize: 'var(--font-small)',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          gridArea: 'date',
        }}
      >
        {performance.date}
      </div>
      <div
        css={{
          fontSize: 'var(--font-small)',
          fontWeight: 'bold',
          gridArea: 'time',

          textAlign: 'left',
          [mediaQueries.small]: {
            textAlign: 'right',
          },
        }}
      >{`${performance.startTime} - ${performance.endTime}`}</div>
      <div
        css={{
          fontSize: 'var(--font-small)',
          gridArea: 'price',
          textAlign: 'right',
          color: 'var(--color-grey-medium)',
        }}
      >
        {performance.price === 0 ? 'Free' : `$${performance.price}`}
      </div>
    </div>
  );
}

function Performances() {
  return (
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
          return (
            <Performance
              key={performance.date + performance.startTime}
              performance={performance}
            />
          );
        })}
      </div>
    </div>
  );
}

export { Performances };
