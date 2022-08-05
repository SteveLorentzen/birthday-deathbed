import Image from 'next/image';

const width = '90vw';

const height = 'calc(90vw * .5625)';

const maxWidth = '90rem';

const maxHeight = 'calc(90rem * .5625)';

function Home() {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        padding: '8rem',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: maxWidth,
          '& > div': {
            marginBottom: '14rem',
          },
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <h1>
              <Image
                src='/images/logo_birthday_deathbed.jpg'
                width='600'
                height='300'
                alt='Birthday Deathbed'
              ></Image>
            </h1>
          </div>
          <h2 css={{ fontSize: '1.8rem' }}>
            A{' '}
            <span css={{ fontSize: '3rem', fontStyle: 'italic' }}>
              Stone Temple Pilots
            </span>{' '}
            tribute
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
              width: width,
              height: height,
              maxWidth: '90rem',
              maxHeight: maxHeight,
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
        <div css={{ maxWidth: maxWidth, width: '100%' }}>
          <h3
            css={{
              fontSize: '3rem',
            }}
          ></h3>
        </div>
        <div
          css={{
            width: '100%',
            maxWidth: maxWidth,
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
          }}
        >
          <div css={{ flexBasis: '60%' }}>
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
