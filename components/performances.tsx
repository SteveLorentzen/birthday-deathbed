import { mediaQueries } from 'my-constants';
import { format } from 'date-fns';

interface IPerformance {
  venue: String;
  addressStreet: String;
  addressCityState: String;
  date: String;
  startTime: String;
  endTime: String;
  description: String;
  price: Number;
}

const performances = [
  {
    venue: 'Rock & Brews at Yaamava',
    addressStreet: 'Highland Ave.',
    addressCityState: 'Highland, CA',
    date: format(new Date(2022, 9, 4), 'EE, LLL do, yyyy'),
    startTime: '7:00pm',
    endTime: '10:00pm',
    description: 'Come have a tasty dinner while we rock your faces off!',
    price: 0,
  },
];

function Performance({ performance }: { performance: IPerformance }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 0 2rem 2rem',
        width: '100%',
        borderTop: '1px solid grey',
        borderBottom: '1px solid grey',

        [mediaQueries.medium]: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      }}
    >
      <div
        css={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <div
          css={{
            fontSize: 'var(--font-medium)',
            color: 'var(--color-accent-dark)',
            fontWeight: 'bolder',
          }}
        >
          {performance.venue}
        </div>
        <div css={{ fontSize: 'var(--font-medium)', padding: '1rem 0' }}>
          {performance.addressStreet}
        </div>
        <div css={{ fontSize: 'var(--font-medium)' }}>
          {performance.addressCityState}
        </div>
      </div>
      <div
        css={{
          display: 'flex',
          width: '35%',
          minWidth: '21rem',
          flexDirection: 'column',
        }}
      >
        <div css={{ fontSize: 'var(--font-medium)' }}>{performance.date}</div>
        <div
          css={{ fontSize: 'var(--font-medium)', marginTop: '1rem' }}
        >{`${performance.startTime} - ${performance.endTime}`}</div>
        <div
          css={{
            fontSize: 'var(--font-medium)',
            fontWeight: 'bold',
            marginTop: '1rem',
          }}
        >
          {performance.price === 0 ? 'Free' : `$${performance.price}`}
        </div>
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
        maxWidth: 'var(--home-max-width)',
        margin: '6rem 0',
      }}
    >
      <div>
        <h1
          css={{
            fontSize: 'var(--font-large)',
            padding: '1rem',
            fontWeight: 'lighter',
            textAlign: 'center',
            [mediaQueries.small]: {
              padding: '2rem',
              fontSize: 'var(--font-xl)',
            },
          }}
        >
          Upcoming Performances
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
