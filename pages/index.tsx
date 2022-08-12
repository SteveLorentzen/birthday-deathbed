import * as React from 'react';
import Image from 'next/image';
import { mediaQueries } from 'my-constants';
import { Performances } from 'components/performances';
import { fadeup } from 'animations';
import { IPerformance } from 'interfaces-and-types';
import Head from 'next/head';

function Home({ performances }: { performances: IPerformance[] }) {
  React.useEffect(() => {
    async function getBandData() {
      const result = await fetch(
        'https://rest.bandsintown.com/artists/Dick%20The%20Citizen/events?app_id=5a8f511d16953501bbc9d9cdacb5ea19&date=%22upcoming%22'
      );
      const data = await result.json();

      console.log(data);
    }
    getBandData();
  }, []);

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Head>
        <title>Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Birthday Deathbed- Los Angeles based tribute to Stone Temple Pilots'
        />
      </Head>
      <div
        css={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          css={{
            display: 'flex',
            position: 'relative',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10rem 1rem',
            [mediaQueries.medium]: {
              padding: '14rem 1rem',
            },
            [mediaQueries.large]: {
              padding: '9rem 1rem',
            },
            [mediaQueries.xxxl]: {
              padding: '14rem 1rem',
            },
          }}
        >
          <div css={{ animation: `${fadeup} 1s ease` }}>
            <h1>
              <Image
                src='/images/BirthdayDeathbedLogo_Sm.png'
                width='600'
                height='300'
                alt='Birthday Deathbed'
              ></Image>
            </h1>
          </div>
          <h2
            css={{
              fontSize: 'var(--font-small)',
              textAlign: 'center',
              padding: '1rem',
              zIndex: 1,
              [mediaQueries.medium]: { fontSize: 'var(--font-medium)' },
            }}
          >
            A{' '}
            <span
              css={{
                fontSize: 'var(--font-medium)',
                whiteSpace: 'nowrap',
                fontStyle: 'italic',
                [mediaQueries.xs]: { fontSize: 'var(--font-large)' },
                [mediaQueries.medium]: { fontSize: 'var(--font-xl)' },
              }}
            >
              Stone Temple Pilots
            </span>{' '}
            tribute
          </h2>
        </div>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'var(--color-accent-dark)',
            width: '100%',
            padding: '6rem 0',
          }}
        >
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <iframe
              css={{
                width: 'var(--home-width)',
                height: 'var(--home-height)',
                maxWidth: 'var(--home-max-width)',
                maxHeight: 'var(--home-max-height)',
              }}
              width='560'
              height='315'
              src='https://www.youtube.com/embed/t2JWFUOQ3Xg'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div css={{ maxWidth: 'var(--home-max-width)', width: '100%' }}>
          <h3
            css={{
              fontSize: 'var(--font-xl)',
            }}
          ></h3>
        </div>
        <Performances performances={performances} />

        <div
          css={{
            width: '100%',
            maxWidth: 'var(--home-max-width)',
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            marginTop: '6rem',
          }}
        >
          <div>
            <Image
              src='/images/birthday_deathbed_1.jpg'
              width='1442'
              height='1030'
              alt='Birthday Deathbed holding their instruments'
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  async function getPerformances() {
    const result = await fetch(
      'https://rest.bandsintown.com/artists/Birthday%20Deathbed/events?app_id=c7c1586132d1f9ecf3d339e4c3849902'
    );
    return await (await result).json();
  }
  try {
    const performances = await getPerformances();
    return {
      props: {
        performances,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export default Home;
