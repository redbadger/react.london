import React, {Component} from 'react';

import style from './Preview.css';
import About from '../About/About';
import UpcomingMeetup from '../UpcomingMeetup/UpcomingMeetup';

const Preview = ({ text, summary }) => (
    <main className="Preview">
      <About text={text} summary={summary} />
      <UpcomingMeetup text={text} />
    </main>
  );

export default Preview;
