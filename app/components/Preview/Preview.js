import React, {Component} from 'react';

import style from './Preview.css';
import About from '../About/About';
import UpcomingMeetup from '../UpcomingMeetup/UpcomingMeetup';

const Preview = ({ text }) => (
    <main className="Preview">
      <About text={text} />
      <UpcomingMeetup text={text} />
    </main>
  );

export default Preview;
