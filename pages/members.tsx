import Image from 'next/image';
import { PageTitle } from '../components/page-title';
import { mediaQueries } from 'my-constants';

const bandMembers = [
  {
    name: 'Steve Pedersen',
    role: 'Lead Vocals',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius illum fugit voluptate ducimus veniam magnam accusamus quasi commodi repellat saepe ea, non quisquam necessitatibus corporis voluptates. Odio nulla assumenda eligendi.',
    pic: '/images/steve_p_birthday_deathbed.jpg',
    altText: 'Lead singer Steve Pedersen',
  },
  {
    name: 'Damien Smith',
    role: 'Lead Guitar',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius illum fugit voluptate ducimus veniam magnam accusamus quasi commodi repellat saepe ea, non quisquam necessitatibus corporis voluptates. Odio nulla assumenda eligendi.',
    pic: '/images/damien_birthday_deathbed.jpg',
    altText: 'Lead guitarist Damien Smith',
  },
  {
    name: 'Steve Lorentzen',
    role: 'Rhythm Guitar',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius illum fugit voluptate ducimus veniam magnam accusamus quasi commodi repellat saepe ea, non quisquam necessitatibus corporis voluptates. Odio nulla assumenda eligendi.',
    pic: '/images/steve_l_birthday_deathbed.jpg',
    altText: 'Rhythm guitarist Steve Lorentzen',
  },
  {
    name: 'Erik MacPherson',
    role: 'Bass',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius illum fugit voluptate ducimus veniam magnam accusamus quasi commodi repellat saepe ea, non quisquam necessitatibus corporis voluptates. Odio nulla assumenda eligendi.',
    pic: '/images/erik_birthday_deathbed.jpg',
    altText: 'Bassist Erik MacPherson',
  },
  {
    name: 'Sean Rainey',
    role: 'Drums',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius illum fugit voluptate ducimus veniam magnam accusamus quasi commodi repellat saepe ea, non quisquam necessitatibus corporis voluptates. Odio nulla assumenda eligendi.',
    pic: '/images/sean_birthday_deathbed.jpg',
    altText: 'Drummer Sean Rainey',
  },
];

function BandMember({
  name,
  pic,
  description,
  altText,
  role,
}: {
  name: string;
  description: string;
  pic: string;
  altText: string;
  role: string;
}) {
  return (
    <div
      className='band-member'
      css={{ [mediaQueries.xs]: { padding: '1.5rem' } }}
    >
      <div
        css={{
          position: 'relative',
        }}
      >
        <Image
          width={1050}
          height={750}
          src={pic}
          alt={altText}
          priority={name === 'Steve Pedersen'}
          objectFit='contain'
        />
      </div>
      <div css={{ padding: '1rem' }}>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: '2rem 0',
            [mediaQueries.small]: {
              flexDirection: 'row',
              alignItems: 'flex-end',
            },
          }}
        >
          <h2
            css={{
              fontSize: 'var(--font-large)',
              fontWeight: 'normal',
              letterSpacing: '.15rem',
              lineHeight: '2.75rem',
              [mediaQueries.small]: {
                linHeight: '2.25rem',
              },
            }}
          >
            {name}
          </h2>
          <h3
            css={{
              fontSize: 'var(--font-small)',
              fontWeight: 'normal',
              textTransform: 'uppercase',
              letterSpacing: '.15rem',
              marginTop: '1rem',
              color: 'var(--color-red-dark)',
              [mediaQueries.small]: { marginLeft: '1rem' },
            }}
          >
            {role}
          </h3>
        </div>
        <p css={{ fontSize: 'var(--font-small)' }}>{description}</p>
      </div>
    </div>
  );
}

function Members() {
  return (
    <div
      css={{
        maxWidth: '50rem',
        margin: '0 auto 16rem auto',
        '.band-member:not(:last-child)': {
          marginBottom: '10rem',
        },
      }}
    >
      <PageTitle title='Members' />
      {bandMembers.map((bandMember) => {
        return (
          <BandMember
            altText={bandMember.altText}
            description={bandMember.description}
            name={bandMember.name}
            role={bandMember.role}
            pic={bandMember.pic}
            key={bandMember.name}
          />
        );
      })}
    </div>
  );
}

export default Members;
