import { keyframes } from '@emotion/react';

function PageTitle({ title }: { title: string }) {
  const bounce = keyframes`
  0% {
    transform: translateY(1rem);
    opacity: 0
  }

  100% {
    transform: translateY(0)
    opacity: 1
  }
`;

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        margin: '5rem 0',
        animation: `${bounce} 1s ease`,
      }}
    >
      <h1 css={{ fontSize: '4.5rem', fontWeight: 'normal' }}>{title}</h1>
    </div>
  );
}

export { PageTitle };