import React from 'react';

const CommunityCodeOfConduct = () => (
  <div>
    <section className="CodeOfConduct__intro block">
      <div className="content">
        <h3>Code of Conduct</h3>
        <h4>TL;DR &mdash; Don&apos;t be a Jerk :)</h4>
        <p>
          All attendees are expected to adhere to the Code of Conduct at all
          meetup venues. This includes all React London volunteers and
          sponsors.
        </p>
      </div>
    </section>

    <section className="CodeOfConduct__section block">
      <div className="content">
        <p className="CodeOfConduct__section__heading">
          <strong>Harassment</strong> includes, but is not limited to:
        </p>
        <ul>
          <li>
            Verbal comments that negatively target a person in regards to
            their <strong>gender</strong>, <strong>sexual
            orientation</strong>, <strong>disability</strong>, <strong>physical
            appearance</strong>, <strong>body size</strong>, <strong>race
            </strong>, <strong>age</strong>, or <strong>religion</strong>.
          </li>
          <li>
            Continued <strong>verbal</strong> or <strong>physical
            contact</strong> with an attendee who has asked you to stop.
          </li>
          <li>
            <strong>Sexual images</strong> in public spaces
          </li>
          <li>
            Deliberate <strong>intimidation</strong>, <strong>stalking</strong>,
            or <strong>following</strong>.
          </li>
          <li>
            Harassing <strong>photography</strong> or <strong>recording</strong>.
          </li>
          <li>
            Sustained <strong>disruption</strong> of talks or other events.
          </li>
          <li>
            Inappropriate <strong>physical contact</strong>.
          </li>
          <li>
            Unwelcome <strong>sexual attention</strong>.
          </li>
          <li>
            Advocating for, or encouraging, any of the above behaviour.
          </li>
        </ul>
        <p>
          In addition to the above, <strong>no weapons</strong> or <strong>illegal
          substances</strong> are allowed in any meetup venues at any time.
        </p>
      </div>
    </section>

    <section className="CodeOfConduct__section block">
      <div className="content">
        <h3 className="CodeOfConduct__section__heading">Enforcement</h3>
        <p>
          Participants asked to stop any harassing behavior are expected to comply immediately.
        </p>
        <p>
          If a participant engages in harassing behaviour, event organisers
          retain the right to take any actions to keep the event a welcoming environment
          for all participants. This includes <strong>warning the
          offender</strong> or <strong>expulsion from meetup</strong>.
        </p>
        <p>
          Event organisers may take action to redress anything designed to, or
          with the clear impact of, disrupting the event or making the environment
          hostile for any participants.
        </p>
      </div>
    </section>

    <section className="CodeOfConduct__section block">
      <div className="content">
        <h3 className="CodeOfConduct__section__heading">Reporting</h3>
        <p>
          If someone makes you or anyone else feel unsafe or unwelcome, please
          report it as soon as possible. Harassment and other code of conduct violations reduce the
          value of our event for everyone.
        </p>
        <p>
          <strong>We want you to be happy at React London events.</strong>
        </p>
      </div>
    </section>

    <section className="CodeOfConduct__section block">
      <div className="content">
        <h3 className="CodeOfConduct__section__heading">Talk to us</h3>
        <p>
          In addition to speaking to us in person, you can also contact us
          using the following methods:
        </p>
        <ul>
        {/*
          <li>
            <strong>Calling</strong> or <strong>messaging</strong> a female:
            42095823 or a male: 1349084
          </li>
        */}
          <li>
            <strong>Email us </strong>
            <a href="mailto:conduct@react.london" target="_blank" rel="noopener">
              hello@react.london
            </a>
          </li>
          <li>
            <strong>DM us </strong> @reactlondon_
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default CommunityCodeOfConduct;
