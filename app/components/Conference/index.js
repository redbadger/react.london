import React from 'react';
import SiteFooter from '../SiteFooter';

const signupActionURL = '//london.us13.list-manage.com/subscribe/' +
  'post?u=f3de268a0820d472cbd31f761&id=c723cfd260&LOCATION=conference';

const Conference = () => (
  <div id="wrapper">
    <main id="conference">

      <header id="hero" className="block">
        <div className="content">
          <h1>React London 2017</h1>
          <p className="block-bg">Be part of it</p>
          <h2 className="block-bg">March 2017</h2>
          <a className="sign-up-trampoline" href="#update">
            <p className="block-bg">
              Keep me updated
            </p>
            <object data="/img/SVG/ReactLondon_Arrow-01.svg" type="image/svg+xml">
              <img
                srcSet="/img/PNG/ReactLondon_Arrow_x2-01.png"
                src="/img/PNG/ReactLondon_Arrow-01.png"
                alt="Red Badger logo"
              />
            </object>
          </a>

        </div>
      </header>

      <section className="RedBadgerBanner block">
        <div className="content space-between">
          <span className="RedBadgerBanner__tag">Powered by Red Badger</span>
          <object
            className="RedBadgerBanner__logo--svg"
            data="/img/SVG/ReactLondon_SaveTheDate_Icons-01.svg"
            type="image/svg+xml"
          >
            <img
              className="RedBadgerBanner__logo--img"
              srcSet="/img/PNG/ReactLondon_SaveTheDate_Icons_x2-01.png"
              src="/img/PNG/ReactLondon_SaveTheDate_Icons-01.png"
              alt="Red Badger logo"
            />
          </object>
        </div>
      </section>

      <nav className="NavigationBar block">
        <ul className="NavigationBar__tabs">
          <li><a href="/">Meetups</a></li>
          <li><a className="NavigationBar__tab--active" href="#">Conference</a></li>
        </ul>
      </nav>

      <section id="about" className="block">
        <div className="content">
          <h2>Let’s explore!</h2>
          <p>Red Badger is launching a new conference focused on React in London for
            2017 – we’re calling it <strong>React London 2017.</strong></p>
          <p>We’re bringing together some great speakers and events
          – get involved! More details to follow soon.</p>
        </div>
      </section>

      <section id="update" className="Update block">
        <div className="content">
          <h3 className="Update__heading">Sign up here for conference updates</h3>
          <div>
            <form
              className="Update__form"
              action={signupActionURL}
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate
            >
              <div className="Update__form__container">
                <label className="Update__form__label" htmlFor="mce-EMAIL">Email</label>
                <input
                  className="Update__form__email"
                  type="email"
                  value=""
                  autoComplete="off"
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="name@address.com"
                  required
                />
                <input
                  className="Update__form__submit"
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                />
              </div>
            </form>
          </div>
        </div>
      </section>

    </main>

    <SiteFooter />

  </div>
);

Conference.propTypes = {
};

export default Conference;
