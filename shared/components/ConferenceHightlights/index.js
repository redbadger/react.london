import React from 'react';

const Collapsible = ({ collapsed = true, children }) => (
  collapsed ? null : <div>{children}</div>
);

const Instagram = ({ href, src, name }) => (
  <a
    className='ConferenceHighlights__instagram'
    href={href}
    target='_blank'
    title={`Instagram photo by ${name} (opens in a new window)`}
  >
    <img src={src} alt='instagram photo' />
  </a>
);

const Tweet = ({ username, name, content, href }) => (
  <a
    className='ConferenceHighlights__tweet'
    href={href}
    target='_blank'
    title={`Tweet by ${name} (opens in a new window)`}>
    <div className='ConferenceHighlights__tweet__name'>{name}</div>
    <div className='ConferenceHighlights__tweet__username'>@{username}</div>
    <p>{content}</p>
  </a>
);

const StageOne = () => (
  <div className='ConferenceHighlights block'>
    <div className='content'>
      <h2>Here are some highlights from the day. (More coming soon)</h2>
      <h3>Photos on Instagram</h3>
      <div className='ConferenceHighlights__gallery'>
        <Instagram
          href='https://www.instagram.com/p/BRn8_yajwFR/?taken-by=itsdougthepug'
          src='https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/17267595_263928080729375_8631151348735279104_n.jpg'
          name='Doug The Pug' />
        <Instagram
          href='https://www.instagram.com/p/BRmOq83j6ex/?taken-by=itsdougthepug'
          src='https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/17266112_1846047625667173_5961802609898553344_n.jpg'
          name='Doug The Pug' />
        <Instagram
          href='https://www.instagram.com/p/BRlaCqHjs4h/?taken-by=itsdougthepug'
          src='https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/17333132_1812017895790889_7291888165390909440_n.jpg'
          name='Doug The Pug' />
      </div>
      <a
        className='ConferenceHighlights__see-more-btn'
        href="#"
      >See more photos</a>

      <h3>Conversation on Twitter with #React2017</h3>
      <div className='ConferenceHighlights__gallery'>
        <Tweet
          href='http://twitter.com'
          username='katie_fenn'
          name='Katie Fenn'
          content='New article: building a static website with Gulp and React http://www.katiefenn.co.uk/building-a-static-website-with-react' />
        <Tweet
          href='http://twitter.com'
          username='katie_fenn'
          name='Katie Fenn'
          content='New article: building a static website with Gulp and React http://www.katiefenn.co.uk/building-a-static-website-with-react' />
        <Tweet
          href='http://twitter.com'
          username='katie_fenn'
          name='Katie Fenn'
          content='New article: building a static website with Gulp and React http://www.katiefenn.co.uk/building-a-static-website-with-react' />
      </div>
      <a
        className='ConferenceHighlights__see-more-btn'
        href="#"
      >#React2017</a>
    </div>
  </div>
);

export default StageOne;
