import { fadeup } from 'animations';

function PageTitle({ title }: { title: string }) {
  return (
    <div
      css={{
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        margin: '5rem 0',
        animation: `${fadeup} 1s ease`,
        color: 'var(--color-accent-dark)',
      }}
    >
      <h1 css={{ fontSize: 'var(--font-3xl)', fontWeight: 'normal' }}>
        {title}
      </h1>
    </div>
  );
}

export { PageTitle };
