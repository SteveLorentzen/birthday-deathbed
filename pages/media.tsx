import { PageTitle } from 'components/page-title';

function Media() {
  return (
    <>
      <PageTitle title='Media' />
      <div
        css={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
      >
        <iframe
          css={{
            width: '90vw',
            height: 'calc(90vw * .5625)',
            maxWidth: '70rem',
            maxHeight: 'calc(70rem * .5625)',
          }}
          width='560'
          height='315'
          src='https://www.youtube.com/embed/t2JWFUOQ3Xg'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Media;
