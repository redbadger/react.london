import React from 'react';

const ConferenceEditor = () => (
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

      <nav className="NavBar block">
        <ul className="NavBar__tabs">
          <li><a href="/">Meetups</a></li>
          <li><a className="NavBar__tab--active" href="#">Conference</a></li>
        </ul>
      </nav>

      <section id="about" className="block">
        <div className="content">
          <h2>Let’s explore!</h2>
          <p>Red Badger is launching a new conference focused on React in London for 2017 – we’re calling it <strong>React London 2017.</strong></p>
          <p>We’re bringing together some great speakers and events – get involved! More details to follow soon.</p>
        </div>
      </section>

      <section id="update" className="Update block">
        <div className="content">
          <h3 className="Update__heading">Sign up here for conference updates</h3>
          <div>
            <form
              className="Update__form"
              action="//london.us13.list-manage.com/subscribe/post?u=f3de268a0820d472cbd31f761&amp;id=c723cfd260&LOCATION=conference"
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

    <footer className="SiteFooter block">
      <div className="content space-between">

        <ul className="SiteFooter__links">
          <li>
            <a className="SiteFooter__link SiteFooter__link--mail" href="mailto:hello@react.london">
              <span>hello@react.london</span>
            </a>
          </li>
          <li>
            <a className="SiteFooter__link SiteFooter__link--slack" href="http://slack.red-badger.com/" target="_blank">
              <span>Join the conversation</span>
            </a>
          </li>
          <li>
            <a className="SiteFooter__link SiteFooter__link--youtube" href="https://www.youtube.com/channel/UCHlIVrJki1BxwKe7NtFYZRg" target="_blank">
              <span>Watch videos</span>
            </a>
          </li>
          <li>
            <a className="SiteFooter__link SiteFooter__link--twitter" href="https://twitter.com/ReactLondon_" target="_blank">
              <span>@ReactLondon_</span>
            </a>
          </li>
          <li>
            <a className="SiteFooter__link SiteFooter__link--hashtag" href="https://twitter.com/search?q=%23reactlondon" target="_blank">
              #reactlondon
            </a>
          </li>
        </ul>

        <a className="SiteFooter__logo" href="http://red-badger.com/" target="_blank">
          <object
            className="SiteFooter__logo--svg"
            data="/img/SVG/ReactLondon_SaveTheDate_Icons-02.svg"
            type="image/svg+xml"
          >
            <img
              className="SiteFooter__logo--img"
              srcSet="/img/PNG/ReactLondon_SaveTheDate_Icons_x2-02.png"
              src="/img/PNG/ReactLondon_SaveTheDate_Icons-02.png"
              alt="Red Badger logo"
            />
          </object>
        </a>

      </div>
    </footer>


  </div>
);

ConferenceEditor.propTypes = {
};

export default ConferenceEditor;
