import { PageTitle } from 'components/page-title';
import React from 'react';
import styled from '@emotion/styled';

function Contact() {
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  const inputCss = {
    padding: '1rem',
    borderRadius: '5px',
    border: '1px solid black',
    fontSize: '1.5rem',
  };

  return (
    <div>
      <PageTitle title='Contact' />

      <div
        css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h2>For booking and other inquiries:</h2>
        <h3 css={{ fontSize: '3rem', marginTop: '2rem' }}>
          bdayDeathbed@gmail.com
        </h3>
      </div>

      {/* <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto 5rem auto',
        }}
      >
        <form
          css={{
            display: 'flex',
            width: '90%',
            maxWidth: '50rem',
            flexDirection: 'column',
            fontSize: '1.5rem',
            'div:not(:last-child)': {
              marginBottom: '1.5rem',
            },
          }}
          onSubmit={handleSubmit}
        >
          <div css={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='name'>Name</label>
            <input css={inputCss} type='text' id='name' />
          </div>
          <div css={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='email'>Email</label>
            <input css={inputCss} type='email' id='email' />
          </div>
          <div css={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='content'>Content</label>
            <textarea css={inputCss} cols={80} rows={15} id='content' />
          </div>
          <button
            css={{
              padding: '.5rem 1rem',
              color: 'black',
              alignSelf: 'flex-end',
              fontSize: '1.3rem',
            }}
            type='submit'
          >
            Submit
          </button>
        </form>
      </div> */}
    </div>
  );
}

export default Contact;
