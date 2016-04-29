import React, {Component} from 'react';

import style from './Preview.css';
import About from '../../containers/About.js';

const Preview = ({ userText }) => (
    <div className="Preview">
      <About />
    </div>
  );

export default Preview;
