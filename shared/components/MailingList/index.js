import React, { PropTypes } from 'react';

const mailingListActionURL =
  '//london.us13.list-manage.com/subscribe/post' +
  '?u=f3de268a0820d472cbd31f761&amp;id=c723cfd260&LOCATION=';

const MailingList = ({ mailingListTitle, page }) => (
  <section id="stay-tuned" className={'MailingList block MailingList--' + page}>
    <div className="content">
      <h3 className="MailingList__heading">{mailingListTitle}</h3>

      <div id="mc_embed_signup">
        <form
          className="MailingList__form"
          action={mailingListActionURL + page}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          rel="noopener"
          noValidate
        >
          <div className="MailingList__form__container">
            <label className="MailingList__form__label" htmlFor="mce-EMAIL">
              Email
            </label>
            <input
              className="MailingList__form__email"
              type="email"
              autoComplete="off"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="name@address.com"
              required
            />
            <input
              className={'MailingList__form__submit MailingList__form__submit--' + page}
              type="submit"
              value="Get updates"
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </div>
        </form>
      </div>

      <p className="MailingList__summary">
        Once you are signed up to our monthly newsletter, you can unsubscribe and update your
        preferences at any time. We’ll update you on ticket release dates and event details for our
        next React London Meetups. View our{' '}
        <a href="https://red-badger.com/privacy-policy">Privacy Policy</a> to find out more about
        how we take care of your personal data.
      </p>
    </div>
  </section>
);

MailingList.propTypes = {
  mailingListTitle: PropTypes.string,
  mailingListSummary: PropTypes.string,
  page: PropTypes.oneOf(['conference', 'community']).isRequired,
};

export default MailingList;
