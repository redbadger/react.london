import React, { Component } from 'react';
import Radium from 'radium';

import About from '../About/About';
import UpcomingMeetup from '../UpcomingMeetup/UpcomingMeetup';

const Preview = Radium(({ text, summary }) => (
  <main style={style}>
    <About text={text} summary={summary} />
    <UpcomingMeetup text={text} />
  </main>
));

const style = {
  padding: 20,
};

export default Preview;
