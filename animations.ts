import { keyframes } from '@emotion/react';

export const fadeup = keyframes`
  0% {
    transform: translateY(1rem);
    opacity: 0
  }

  100% {
    transform: translateY(0)
    opacity: 1
  }
`;
