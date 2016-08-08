import React from 'react';
import Popover from '@terebentina/react-popover';
import TypeWriter from 'react-typewriter';

const RedBadgerBanner = () => (
  <section className="RedBadgerBanner block">
    <div className="content space-between">
      <div>
      <Popover position="right" isOpen={true} className="awesome" trigger={<object
              className="RedBadgerBanner__logo"
              data="/img/SVG/Badger.svg"
              type="image/svg+xml"
            >
              <img
                className="RedBadgerBanner__logo"
                srcSet="/img/PNG/ReactLondon_SaveTheDate_Icons_x2-01.png"
                src="/img/PNG/ReactLondon_SaveTheDate_Icons-01.png"
                alt="Red Badger logo"
              />
            </object>}>
            <TypeWriter typing={1} minDelay={60}>Please help me! I was caught in a Badger Trap.</TypeWriter>
      </Popover>
      </div>
    </div>
  </section>
);

export default RedBadgerBanner;
