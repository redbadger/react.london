import React, {Component} from 'react';

import style from './Preview.css';
import About from '../../containers/About.js';
import UpcomingMeetup from '../../containers/UpcomingMeetup.js';

const Preview = () => (
    <main className="Preview">
      <About />
      <UpcomingMeetup />
    </main>
  );

export default Preview;
