import { mediaQueries } from 'my-constants';
import { format } from 'date-fns';

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

function Performance() {
  return <div></div>;
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
        margin: '12rem 0',
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
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem 3rem',
                width: '100%',
                borderTop: '1px solid grey',
                borderBottom: '1px solid grey',

                [mediaQueries.medium]: {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
              }}
              key={performance.date + performance.startTime}
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
                <div
                  css={{ fontSize: 'var(--font-medium)', padding: '1rem 0' }}
                >
                  {performance.addressStreet}
                </div>
                <div css={{ fontSize: 'var(--font-medium)' }}>
                  {performance.addressCityState}
                </div>
              </div>
              <div
                css={{
                  display: 'flex',
                  width: '40%',
                  minWidth: '20rem',
                  flexDirection: 'column',
                  marginTop: '1rem',
                }}
              >
                <div css={{ fontSize: 'var(--font-medium)' }}>
                  {performance.date}
                </div>
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
        })}
      </div>
    </div>
  );
}

export { Performances };
