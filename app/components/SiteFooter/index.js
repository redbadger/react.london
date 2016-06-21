import React from 'react';
import radium, { Style } from 'radium';
import { colors, layout } from '../../constants/brandingStyles';

const style = {
  footer: {
    ...layout.block,
    background: colors.grey,
    height: '105px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    ...layout.contentWithSpaceBetween,
  },
  logo: {
    display: 'block',
    height: '85px',
    img: {
      height: '100%',
    },
    svg: {
      height: '85px',
    },
  },
  links: {
    fontWeight: '500',
    lineHeight: '1.7',
    columnCount: '2',
    columnGap: '80px',
  },
};

const componentWideStyles = (<Style
  scopeSelector="#SiteFooter"
  rules={{
    li: {
      listStyleType: 'none',
    },
    a: {
      color: colors.white,
      ':hover': {
        color: colors.community,
      },
    },
  }}
/>);


const SiteFooter = () => (
  <footer id="SiteFooter" style={style.footer} >
    {componentWideStyles}

    <div style={style.content}>

      <ul style={style.links}>
        <li>
          <a href="mailto:hello@react.london">hello@react.london</a>
        </li>
        <li>
          <a href="https://twitter.com/londonreact" target="_blank">@londonreact</a>
        </li>
        <li>
          <a href="https://twitter.com/search?q=%23londonreact" target="_blank">#londonreact</a>
        </li>
        <li>
          {/* TODO: Get slack link */}
          <a href="#" target="_blank">Join the conversation</a>
        </li>
        <li>
          {/* TODO: Get video archive link */}
          <a href="#" target="_blank">Watch videos</a>
        </li>
      </ul>

      <a href="https://red-badger.com/" style={style.logo} target="_blank">
        <object
          style={style.logo.svg}
          data="/img/SVG/ReactLondon_SaveTheDate_Icons-02.svg" type="image/svg+xml"
        >
          <img
            style={style.logo.img}
            srcSet="/img/PNG/ReactLondon_SaveTheDate_Icons_x2-02.png"
            src="/img/PNG/ReactLondon_SaveTheDate_Icons-02.png"
            alt="Red Badger logo"
          />
        </object>
      </a>

    </div>
  </footer>
);

export default radium(SiteFooter);
