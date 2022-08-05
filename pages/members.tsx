import Image from 'next/image';
import { PageTitle } from '../components/page-title';

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
    <div className='band-member'>
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
          objectFit='contain'
        />
      </div>

      <div css={{ display: 'flex', alignItems: 'flex-end', margin: '2rem 0' }}>
        <h2
          css={{
            fontSize: '2.5rem',
            fontWeight: 'normal',
            letterSpacing: '.18rem',
            lineHeight: '2.25rem',
          }}
        >
          {name}
        </h2>
        <h3
          css={{
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '.15rem',
            marginLeft: '1rem',
          }}
        >
          {role}
        </h3>
      </div>

      <p css={{ fontSize: '1.5rem' }}>{description}</p>
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
