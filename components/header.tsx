import Link from 'next/link';
import * as React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { mediaQueries } from 'my-constants';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { keyframes } from '@emotion/react';

const slidein = keyframes`
	0% {
		transform: translateX(-100%)
	}

	100% {
		transform: translateX(0)	
	}
`;

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Members', path: '/members' },
  { name: 'Song List', path: '/song-list' },
  { name: 'Contact', path: '/contact' },
];

function Header() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const router = useRouter();

  return (
    <>
      <div
        css={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          height: 'var(--header-height)',
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '0 2rem',
        }}
      >
        <div
          css={{
            transform: 'translateY(.25rem)',
            transition: 'all .1s ease-in',
            '&:hover': {
              transform: ' translateY(.25rem) scale(1.05)',
            },
          }}
          onClick={() => setMenuIsOpen(false)}
        >
          <Link href='/'>
            <a>
              <Image
                alt='Birthday Deathbed Logo'
                src='/images/short_logo_birthday_deathbed.png'
                width='65'
                height='48'
              ></Image>
            </a>
          </Link>
        </div>

        {!menuIsOpen ? (
          <AiOutlineMenu
            color='white'
            size={34}
            css={{
              cursor: 'pointer',
              [mediaQueries.small]: { display: 'none' },
            }}
            onClick={() => setMenuIsOpen(true)}
          />
        ) : (
          <AiOutlineClose
            color='white'
            size={34}
            css={{
              cursor: 'pointer',
              [mediaQueries.small]: { display: 'none' },
            }}
            onClick={() => setMenuIsOpen(false)}
          />
        )}

        <ul
          css={{
            display: 'none',
            listStyle: 'none',
            zIndex: 3,
            'li:not(:last-child)': {
              marginRight: '4rem',
            },
            [mediaQueries.small]: {
              display: 'flex',
            },
          }}
        >
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.name}
                css={{
                  fontWeight: 'lighter',
                  color:
                    navLink.path === router.pathname
                      ? 'var(--color-accent)'
                      : 'white',
                  textDecoration:
                    navLink.path === router.pathname ? 'underline' : '',
                  'a:active, a:hover': {
                    color: 'var(--color-accent)',
                  },
                }}
              >
                <Link href={navLink.path}>
                  <a css={{ fontSize: 'var(--font-small)', cursor: 'pointer' }}>
                    {navLink.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {menuIsOpen ? (
        <div
          css={{
            display: 'flex',
            alignContent: 'center',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            backgroundColor: 'black',
            zIndex: 5,
            animation: `${slidein} .3s ease-out`,
          }}
        >
          <ul
            css={{
              display: 'flex',
              textAlign: 'center',
              flexDirection: 'column',
              width: '100%',
              alignContent: 'center',
              listStyle: 'none',
              zIndex: 7,
              color: 'white',
              'li:not(:last-child)': {
                marginBottom: '2rem',
              },
              marginTop: '3rem',
            }}
          >
            {navLinks.map((navLink) => {
              return (
                <li
                  key={navLink.name}
                  css={{
                    color:
                      navLink.path === router.pathname
                        ? 'var(--color-accent)'
                        : 'white',
                    textDecoration:
                      navLink.path === router.pathname ? 'underline' : '',
                    'a:active, a:hover': {
                      color: 'var(--color-accent)',
                    },
                  }}
                >
                  <Link href={navLink.path}>
                    <a
                      css={{ fontSize: 'var(--font-large)', cursor: 'pointer' }}
                      onClick={() => setMenuIsOpen(false)}
                    >
                      {navLink.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export { Header };
