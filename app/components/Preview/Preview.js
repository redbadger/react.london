import React, {Component} from 'react';

import style from './Preview.css';

const Preview = ({ userTexts }) => (
    <div>
      <h1>This is <span className='Preview__heading--special'>React!</span></h1>

      {userTexts.map(u => (<div className='userText' key={u.id}>User said: {u.value}</div>))}
    </div>
  );

export default Preview;
