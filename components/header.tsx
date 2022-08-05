import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const headerHeight = '5rem';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Members', path: '/members' },
  //   { name: 'Media', path: '/media' },
  { name: 'Song List', path: '/song-list' },
  { name: 'Contact', path: '/contact' },
];

function Header() {
  const router = useRouter();

  return (
    <>
      {/* {router.pathname === '/' ? null : (
        <div css={{ height: headerHeight }}></div>
      )} */}
      <div
        css={{
          display: 'flex',
          //   position: 'absolute',
          //   top: 0,
          //   left: 0,
          width: '100%',
          justifyContent: 'space-between',
          height: headerHeight,
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '0 2rem',
        }}
      >
        <div
          css={{
            fontSize: '1.6rem',
            transform: 'translateY(.25rem)',
            transition: 'all .1s ease-in',
            '&:hover': {
              transform: ' translateY(.25rem) scale(1.05)',
            },
          }}
        >
          <Link href='/'>
            <a>
              <Image
                alt='Birthday Deathbed Logo'
                src='/images/short_logo_birthday_deathbed.png'
                width='90'
                height='60'
              ></Image>
            </a>
          </Link>
        </div>
        <ul
          css={{
            display: 'none',
            '@media (min-width: 1000px)': {
              display: 'flex',
            },
            listStyle: 'none',
            zIndex: 3,
            'li:not(:last-child)': {
              marginRight: '4rem',
            },
          }}
        >
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.name}
                css={{
                  fontSize: '1.5rem',
                  fontWeight: 'lighter',

                  color: navLink.path === router.pathname ? 'orange' : 'white',
                  textDecoration:
                    navLink.path === router.pathname ? 'underline' : '',
                  'a:active, a:hover': {
                    color: 'orange',
                  },
                }}
              >
                <Link href={navLink.path}>
                  <a>{navLink.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export { Header };
