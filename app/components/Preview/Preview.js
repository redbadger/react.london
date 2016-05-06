import React, {Component} from 'react';
import Radium from 'radium';

import About from '../About/About';
import UpcomingMeetup from '../UpcomingMeetup/UpcomingMeetup';

const Preview = Radium(({ text, summary }) => (
  <main style={style.main}>
    <About text={text} summary={summary} />
    <UpcomingMeetup text={text} />
  </main>
));

const style = {
  main: {
    padding: 20,
  },
};

export default Preview;
