import * as React from 'react';
import Image from 'next/image';
import { mediaQueries } from 'my-constants';
import { Performances } from 'components/performances';
import { fadeup } from 'animations';

function Home() {
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
      <div
        css={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '7rem 0',
            padding: '0 1rem',
            [mediaQueries.medium]: {
              margin: '8rem 0',
            },
            [mediaQueries.large]: {
              margin: '9rem 0',
            },

            [mediaQueries.xxl]: {
              margin: '11rem 0',
            },
            [mediaQueries.xxxl]: {
              margin: '16rem 0',
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
                // color: "var(--color-red-dark)",
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
            backgroundColor: 'var(--color-accent-very-dark)',
            width: '100%',
            paddingBottom: '8rem',
          }}
        >
          <div>
            <h2
              css={{
                color: 'white',
                fontSize: 'var(--font-medium)',
                fontWeight: 'normal',
                padding: '4rem',
              }}
            >
              Promo Video
            </h2>
          </div>
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
        <Performances />

        <div
          css={{
            width: '100%',
            maxWidth: 'var(--home-max-width)',
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            marginBottom: '12rem',
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

export default Home;
