import React, {Component} from 'react';

import style from './Preview.css';
import About from '../../containers/About.js';

const Preview = ({ userText }) => (
    <main className="Preview">
      <About />
    </main>
  );

export default Preview;
