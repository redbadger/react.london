import React from 'react';
import SiteFooter from '../SiteFooter';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import NavigationBar from '../NavigationBar';

const signupActionURL = '//london.us13.list-manage.com/subscribe/' +
  'post?u=f3de268a0820d472cbd31f761&id=c723cfd260&LOCATION=conference';

const Conference = () => (
  <div>
    <div id="wrapper">
      <main id="conference">
        <Hero page="Conference" />
        <RedBadgerBanner />
        <NavigationBar />
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
        <SiteFooter />
      </main>
    </div>
  </div>
);

Conference.propTypes = {
};

export default Conference;
