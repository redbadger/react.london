import React, { PropTypes } from 'react';

const MailingList = ({ mailingListTitle, mailingListSummary }) => (
  <section id="stay-tuned" className="MailingList block">
    <div className="content">
      <h3 className="MailingList__heading">{mailingListTitle}</h3>
      <p className="MailingList__summary">{mailingListSummary}</p>

      <div id="mc_embed_signup">
        <form className="MailingList__form" action="//london.us13.list-manage.com/subscribe/post?u=f3de268a0820d472cbd31f761&amp;id=c723cfd260&LOCATION=community" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
          <div className="MailingList__form__container">
            <label className="MailingList__form__label" htmlFor="mce-EMAIL">Email</label>
            <input className="MailingList__form__email" type="email" value="" autoComplete="off" name="EMAIL" id="mce-EMAIL" placeholder="name@address.com" required />
            <input className="MailingList__form__submit" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
          </div>
        </form>
      </div>
    </div>
  </section>
);

MailingList.propTypes = {
  mailingListTitle: PropTypes.string,
  mailingListSummary: PropTypes.string,
};

export default MailingList;
