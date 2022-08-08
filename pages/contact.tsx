import { PageTitle } from 'components/page-title';
import { mediaQueries } from 'my-constants';
import React from 'react';
import styled from '@emotion/styled';

function Contact() {
  return (
    <div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10rem',
        }}
      >
        <h2
          css={{
            fontSize: 'var(--font-xsm)',
            textAlign: 'center',
            [mediaQueries.xs]: { fontSize: 'var(--font-small)' },
            [mediaQueries.small]: { fontSize: 'var(--font-small)' },
          }}
        >
          For booking and other inquiries:
        </h2>
        <h3
          css={{
            fontSize: 'var(--font-small)',
            marginTop: '2rem',
            [mediaQueries.xs]: { fontSize: 'var(--font-medium)' },
            [mediaQueries.small]: { fontSize: 'var(--font-large)' },
          }}
        >
          BdayDeathbed@gmail.com
        </h3>
      </div>
    </div>
  );
}

export default Contact;
