import React, { PropTypes } from 'react';

const mailingListActionURL = '//london.us13.list-manage.com/subscribe/post' +
  '?u=f3de268a0820d472cbd31f761&amp;id=c723cfd260&LOCATION=';

const MailingList = ({ mailingListTitle, mailingListSummary, page }) => (
  <section id="stay-tuned" className={'MailingList block MailingList--' + page}>
    <div className="content">
      <h3 className="MailingList__heading">
        {mailingListTitle}
      </h3>
      <p className="MailingList__summary">
        {mailingListSummary}
      </p>

      <div id="mc_embed_signup">
        <form
          className="MailingList__form"
          action={mailingListActionURL + page}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <div className="MailingList__form__container">
            <label className="MailingList__form__label" htmlFor="mce-EMAIL">Email</label>
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
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
);

MailingList.propTypes = {
  mailingListTitle: PropTypes.string,
  mailingListSummary: PropTypes.string,
  page: PropTypes.oneOf(['conference', 'community']).isRequired,
};

export default MailingList;
