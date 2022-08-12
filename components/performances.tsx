import { mediaQueries } from 'my-constants';
import { format } from 'date-fns';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IPerformance } from 'interfaces-and-types';

function Performance({ performance }: { performance: IPerformance }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        borderTop: '1px solid grey',
        borderBottom: '1px solid grey',
        padding: '2rem 1rem',
        'div:not(:last-child)': {
          paddingBottom: '1rem ',
        },
        [mediaQueries.medium]: {
          flexDirection: 'row',
          alignItems: 'center',
          'div:not(:last-child)': {
            paddingBottom: '0',
          },
        },
      }}
    >
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
          display: 'flex',
          gridArea: 'event',
        }}
      >
        <a
          href={performance.url}
          target='_blank'
          rel='noreferrer'
          css={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            lineHeight: '.9',
            fontSize: 'var(--font-small)',
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
              marginLeft: '1rem',
            }}
          >
            <FaExternalLinkAlt />
          </span>
        </a>
      </div>
      <div
        css={{
          fontSize: 'var(--font-small)',
          gridArea: 'city',
        }}
      >
        {performance.venue.location}
      </div>
    </div>
  );
}

function Performances({ performances }: { performances: IPerformance[] }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'var(--home-width)',
        maxWidth: '70rem',
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
