import Image from 'next/image';
import Link from 'next/link';
import { mediaQueries } from 'my-constants';

function Footer() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white',
        height: 'var(--footer-height)',
      }}
    >
      <div
        css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h3 css={{ fontSize: 'var(--font-small)' }}>Follow us on:</h3>
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem',
            width: '12rem',
            [mediaQueries.large]: {
              width: '10rem',
            },
          }}
        >
          <a
            href='http://www.instagram.com/dickthecitizen'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/Instagram_Glyph_White.png'
              alt='Instagram logo'
              width={50}
              height={50}
            ></Image>
          </a>

          <a
            href='http://www.facebook.com/dickthecitizenband'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              css={{ transform: 'translateY(-.1rem)' }}
              src='/images/f_logo_RGB-White_58.png'
              alt='Instagram logo'
              width={55}
              height={55}
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}

export { Footer };
