import Image from 'next/image';
import { PageTitle } from '../components/page-title';
import { mediaQueries } from 'my-constants';

const bandMembers = [
  {
    name: 'Steve Pedersen',
    role: 'Lead Vocals',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatum porro laboriosam ipsa quia? Dolorum maxime assumenda odit soluta velit odio quas? Est quod in amet? Aspernatur placeat sed ipsa!',
    pic: '/images/steve_p_birthday_deathbed.jpg',
    altText: 'Lead singer Steve Pedersen',
  },
  {
    name: 'Damien Smith',
    role: 'Lead Guitar',
    description: `Damien Smith is a professional musician working out of Long Beach California. Damien Is a
multi instrumentalist specializing in guitar, drums, bass and piano. While during the week, his
focus is on playing rock, funk, blues and jazz, on the weekends Damien is a music director at a
church in Redondo Beach. In addition to performing live all over Southern California with
several bands, Damien also works as a producer and recording engineer in his own studio.
When not working on musical projects, Damien can be found doing private music instruction
and freelance video editing.`,
    pic: '/images/damien_birthday_deathbed.jpg',
    altText: 'Lead guitarist Damien Smith',
  },
  {
    name: 'Steve Lorentzen',
    role: 'Rhythm Guitar',
    description:
      "A multi-instrumentalist based out of Glendale, Steve likes to do it all.  Along with playing the guitar for Birthday Deathbed (and a very cool related 90s cover band, Dick the Citizen), Steve plays in two other groups consistently.  The first is an Irish band called Alehouse Fire, in which Steve plays banjo, mandolin and accordion.  By all accounts the man looks fine in a kilt.  The second group specializes in New Orleans jazz and funk with a family friendly vibe. It's called Jazzy Ash and the Leaping Lizards, and Steve is the drummer.  Steve also does freelance work around LA.",
    pic: '/images/steve_l_birthday_deathbed.jpg',
    altText: 'Rhythm guitarist Steve Lorentzen',
  },
  {
    name: 'Erik MacPherson',
    role: 'Bass',
    description:
      'Bike mechanic, MTB instructor,Personal trainer, bass player, dog lover, Jeep fan.',
    pic: '/images/erik_birthday_deathbed.jpg',
    altText: 'Bassist Erik MacPherson',
  },
  {
    name: 'Sean Rainey',
    role: 'Drums',
    description:
      'Sean Rainey is an LA-based drummer/percussionist who has performed and taught all across the globe. A graduate of Berklee College of Music, Sean has performed with The Aggrolites, Will Makar, Wild Roses, Dub Thief and many others and is very active in the musical theater scene in Los Angeles.',
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
          marginBottom: '6rem',
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
