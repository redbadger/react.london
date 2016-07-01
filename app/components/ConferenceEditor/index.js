import React from 'react';
import Conference from '../Conference';

const ConferenceEditor = () => (
  <div className="conference-editor">
    <h1>
      Conference Editor!
    </h1>
    <h2>Preview</h2>
    <div className="preview">
      <Conference />
    </div>
  </div>
);

ConferenceEditor.propTypes = {
};

export default ConferenceEditor;
